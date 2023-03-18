import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const fetchAllCharacters = async () => {
  try {
    const response = await axios.get('/character');
    return response.data.results;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const fetchOneCharacters = async (id: string) => {
  try {
    const response = await axios.get(`/character/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};
