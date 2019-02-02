import publicApi from './public';
import adminApi from './admin';

function api(server) {
  server.use('/api/v1/admin', adminApi);
  server.use('/api/v1/public', publicApi);
}

module.exports = api;
