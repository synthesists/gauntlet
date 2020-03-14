import axios from 'axios';
import config from '../config';

const { origin } = config;

const getVenues = () => axios.get(`${origin}/venues`);
const getTree = (rounds, venueId) => axios.post(`${origin}/trees`, { rounds, venueId: 670 });

export {
  getVenues,
  getTree,
};

