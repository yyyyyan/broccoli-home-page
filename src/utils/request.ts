import { hasKey, IResponse } from '@types';

const API_ROOT: string = 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod';

async function postJson(url: string, payload: any): Promise<IResponse<unknown>> {
  const res: Response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  let success: boolean = res.ok === true && res.status < 300 && res.status >= 200;
  let message: string = success ? '' : `${res.status} ${res.statusText}`;
  let resInJson = null;
  try {
    resInJson = await res.json();
  } catch (err) {
    if (success) {
      message = err.toString();
    }
    success = false;

  }
  return { success, message, payload: resInJson };
}

async function requestInvitation(name: string, email: string): Promise<IResponse<null>> {
  const res: IResponse<unknown> = await postJson(`${API_ROOT}/fake-auth`, { name, email });
  let success: boolean = res.success;
  let message: string = res.message;
  if (
    typeof res.payload === 'object'
    && res.payload !== null
    && hasKey('errorMessage', res.payload)
    && typeof res.payload.errorMessage === 'string'
    && res.payload.errorMessage
  ) {
    success = false;
    // Overrides the generic message with more specific server error.
    message = res.payload.errorMessage;
  }

  return { success, message, payload: null };
}

export { requestInvitation };
