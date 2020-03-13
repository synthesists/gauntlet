import axios from 'axios';
import config from '../config';

const { origin } = config;

const getVenues = () => axios.get(`${origin}/venues`);

export {
  getVenues,
};

