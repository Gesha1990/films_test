import axios from 'axios';
import { BASE_FILM_URL } from 'src/constants/constants';

const instance = axios.create({
  baseURL: `${BASE_FILM_URL}/`,
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGYxNjM5MDg2MTc3NDlkMTM1MTNiOGRjODZlNmVlMiIsIm5iZiI6MTczMTU3NjYxNS41MjgxNzE4LCJzdWIiOiI2NzM1YzIwZmIwNDI5N2Y3MGM2ODJjYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5iXCtMYxDs9fHa-rEXSXudotscmV-10IzEP3kYyPi3k'
  }
});

export default instance;
