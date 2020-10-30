const serverPort = 4000;

const origins = {
  cloud: `https://us-central1-gauntlet-5ac98.cloudfunctions.net/api/v1`,
  // local: `http://localhost:5000/gauntlet-5ac98/us-central1/api/v1`,
  local: `http://localhost:${serverPort}/v1`,
//   'local-network': `http://169.254.XXX.XX:${port}`, // Set this to your Private IP address
};

const serverLocation = process.env.REACT_APP_SERVER_LOCATION || 'cloud';

const origin = origins[serverLocation];

console.log(`Client expects server at origin: ${origin}`);

module.exports = {
  origin,
};
