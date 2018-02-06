import { moviesDB } from '../utils/request';
const key = 'c0b2e256491361d28c75bbe8f9e59a85';

const requestGetGenresMovies = () => {
    return moviesDB
        .get(`genre/movie/list?api_key=${key}&language=en-US`);
};

const requestFirstGenre = () => {
    return moviesDB
        .get(`genre/28/movies?api_key=${key}&language=en-US&include_adult=false&sort_by=created_at.asc`);
};

const requestSimilarMovies = () => {
    return moviesDB
        .get(`movie/198663/similar?api_key=${key}&language=en-US&page=1`);
};

const requestTrailerMovies = () => {
    return moviesDB
    .get(`movie/198663?api_key=${key}&append_to_response=videos`)
};

export {
    requestGetGenresMovies,
    requestFirstGenre,
    requestSimilarMovies,
    requestTrailerMovies,
};