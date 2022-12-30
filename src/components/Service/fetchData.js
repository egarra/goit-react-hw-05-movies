import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '158499514fbb39b03ca6770e80a554af',
};

export const getTrendingMovie = async () => {
  const { data } = await axios.get('/trending/all/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`)
  return data;
}

export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`)
  return data.cast;
}

export const getMovieReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`)
  return data.results;
}
