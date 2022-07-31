import React, { useState } from 'react';
import Modal from 'react-modal';
import styled, { DefaultTheme, useTheme } from 'styled-components';
import { Box, Button, Text, Title } from '@widgets';
import InvitationForm from './InvitationForm';
import InvitationConfirmation from './InvitationConfirmation';

const Home = styled(Box)`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  word-spacing: 0.1em;
`;

function Component(): JSX.Element {
  const [modalStatus, setModalStatus] = useState<'filling' | 'success'>('filling');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const theme: DefaultTheme = useTheme();

  return (
    <Home $vertical $justifyContent="center" $alignItems="center">
      <Box $vertical $alignItems="center">
        <Title>A better way</Title>
        <Title>to enjoy every day.</Title>
        <Box $paddingY={0.8}>
          <Text>Be the first to know when we launch.</Text>
        </Box>
        <Button onClick={() => {
          setModalStatus('filling');
          setIsModalOpen(true);
        }}>
          Request an invite
        </Button>
      </Box>
      <Modal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Request an Invite Modal"
        style={{
          content: {
            maxWidth: '90%',
            top: '50%',
            right: 'auto',
            bottom: 'auto',
            left: '50%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: theme.bkg.secondary,
          }
        }}
      >
        {modalStatus === 'filling' &&
          <InvitationForm
            onCancel={() => setIsModalOpen(false)}
            onSuccess={() => setModalStatus('success')}/>}
        {modalStatus === 'success' &&
          <InvitationConfirmation onConfirm={() => setIsModalOpen(false)}/>}
      </Modal>
    </Home>
  );
}

export default Component;
