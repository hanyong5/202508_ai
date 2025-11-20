import api from './api';

// axios.get("http://localhost:8080/api/board")

export const getBaord = async () => {
  const { data } = await api.get('/board');
  return data;
};
