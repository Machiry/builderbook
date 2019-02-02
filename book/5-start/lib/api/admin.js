import sendRequest from './sendRequest';

const ADMIN_BASE_PATH = '/api/v1/admin';

export const getBookList = () =>
  sendRequest(`${ADMIN_BASE_PATH}/books`, {
    method: 'GET',
  });
