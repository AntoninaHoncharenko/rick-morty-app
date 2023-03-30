import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

// export const fetchAllCharacters = async (page: number) => {
//   try {
//     const response = await axios.get(`/character/?page=${page}}`);
//     return response.data;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

export const fetchCharactersByName = async (name: string, page: number) => {
  try {
    const response = await axios.get(`/character/?name=${name}&page=${page}`);
    return response.data;
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
