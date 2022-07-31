import { requestInvitation } from './request';

const MOCK_NAME = 'toto';
const MOCK_MAIL = 'toto@test.com';
const originalFetch = global.fetch;

describe('Success Scenarios', () => {
  afterAll(() => {
    global.fetch = originalFetch;
  });

  test('should return successful response', async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'Success',
        json: () => Promise.resolve({}),
      } as Response);
    const res = await requestInvitation(MOCK_NAME, MOCK_MAIL);
    expect(res.success).toBeTruthy();
    expect(res.message).toBe('');
  });
});

describe('Failure Scenarios', () => {
  afterAll(() => {
    global.fetch = originalFetch;
  });

  test('should return http error', async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: () => Promise.resolve({}),
      } as Response);
    const res = await requestInvitation(MOCK_NAME, MOCK_MAIL);
    expect(res.success).toBeFalsy();
    expect(res.message).toBe('400 Bad Request');
  });

  test('should return server error when found in response', async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: () => Promise.resolve({ errorMessage: 'Bad from server' }),
      } as Response);
    const res = await requestInvitation(MOCK_NAME, MOCK_MAIL);
    expect(res.success).toBeFalsy();
    expect(res.message).toBe('Bad from server');
  });

  test('should return json error when http succeeds but json paring fails', async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.reject('Something wrong in JSON'),
      } as Response);
    const res = await requestInvitation(MOCK_NAME, MOCK_MAIL);
    expect(res.success).toBeFalsy();
    expect(res.message).toBe('Something wrong in JSON');
  });

  test('should return http error when http and json parsing both fail', async () => {
    global.fetch = () =>
      Promise.resolve({
        ok: false,
        status: 400,
        statusText: 'Bad Request',
        json: () => Promise.reject('Something wrong in JSON'),
      } as Response);
    const res = await requestInvitation(MOCK_NAME, MOCK_MAIL);
    expect(res.success).toBeFalsy();
    expect(res.message).toBe('400 Bad Request');
  });
});
