import axios from './requests.js';

export const createSession = async () => {
  const { BASE_URI: uri } = process.env;

  const data = await axios.post(`${uri}/`).then(res => res.data);
  return data;
}