const port = 4000;

const origins = {
//   cloud: 'https://reunite.eu-gb.cf.appdomain.cloud',
  local: `http://localhost:${port}/api/v1`,
//   'local-network': `http://169.254.XXX.XX:${port}`, // Set this to your Private IP address
};

const serverLocation = process.env.REACT_APP_SERVER_LOCATION || 'local';

const origin = origins[serverLocation];

console.log(`Client expects server at origin: ${origin}`);

module.exports = {
  origin,
};