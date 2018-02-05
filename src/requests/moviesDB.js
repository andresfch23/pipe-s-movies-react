import { moviesDB } from '../utils/request';
const key = 'c0b2e256491361d28c75bbe8f9e59a85';

const requestGetGenresMovies = () => {
  return moviesDB
    .get(`genre/movie/list?api_key=${key}&language=en-US`);
};

export {
    requestGetGenresMovies,
};