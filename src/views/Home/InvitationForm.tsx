import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { Box, Button, Text, TextInput, Title } from '@widgets';
import { requestInvitation } from '@utils';
import Divider from './Divider';

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FormButton = styled(Button)`
  height: 2.5em;
  margin: 0.3em 0;
`;

const FormInput = styled(TextInput)`
  height: 2.5em;
  margin: 0.3em 0;
`;

interface IForm {
  name: string;
  email: string;
  confirmedEmail: string;
}

interface IError {
  type: 'primary' | 'secondary';
  message: string;
}

interface Props {
  onCancel: () => void;
  onSuccess: () => void;
}

function Component(props: Props): JSX.Element {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<IError>({
    type: 'secondary',
    message: ''
  });
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    confirmedEmail: ''
  });
  const confirmEmailInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page refresh
    setError({ type: 'secondary', message: '' });
    if (form.email !== form.confirmedEmail) {
      confirmEmailInput.current.focus();
      setError({
        type: 'secondary',
        message: 'Please verify your confirmed email.'
      });
    } else {
      setIsSending(true);
      requestInvitation(form.name, form.email)
        .then(res => {
          if (res.success) {
            props.onSuccess();
          } else {
            setError({ type: 'primary', message: res.message });
          }
          setIsSending(false);
        });
    }
  };

  return (
    <Box $vertical $alignItems="center" $minWidth={18} $paddingX={1} $paddingY={1.5}>
      <Title $type="secondary" $style="italic">Request an Invite</Title>
      <Divider/>
      <Form onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          placeholder="Full Name"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value || '' })}
          value={form.name}/>
        <FormInput
          required
          type="text"
          placeholder="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="e.g. toto@domain.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value || '' })}
          value={form.email}/>
        <FormInput
          ref={confirmEmailInput}
          required
          type="text"
          placeholder="Confirm Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          title="e.g. toto@domain.com"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setForm({ ...form, confirmedEmail: e.target.value || '' })}
          value={form.confirmedEmail}/>
        <Box $paddingY={1}>
          {error && <Text $alert $type={error.type}>{error.message}</Text>}
        </Box>
        <FormButton type="submit" $disabled={isSending}>{isSending ? 'Sending, please wait...' : 'Send'}</FormButton>
        <FormButton $type="secondary" $disabled={isSending} onClick={props.onCancel}>Cancel</FormButton>
      </Form>
    </Box>
  );
}

export default Component;
