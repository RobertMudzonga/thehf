import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'a2a928ef52msh400ef94b26a2370p193fd8jsn89ab17cc1d4a',
    }
  });
    
  return data;
}