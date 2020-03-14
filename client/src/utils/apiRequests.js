import axios from 'axios';
import config from '../config';

const { origin } = config;

const getVenues = () => axios.get(`${origin}/venues`);
const getTree = (rounds) => axios.post(`${origin}/trees`, { rounds });

export {
  getVenues,
  getTree,
};

