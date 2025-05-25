import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTI2NDY1MGVkZjllYmRjMzk5NTcwMjBiZWEzMjUzZiIsIm5iZiI6MTc0NzU5NDI3MC40MjMsInN1YiI6IjY4MmEyYzFlN2M5ZDI3OThlOWRiMjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rzx9Lwk-i32JNvVWxxtWcSxsGqx5lUrRrrwTyAo-5tw",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    "/trending/movie/day?language=en-US",
    options
  );
  return response.data.results;
};

export const fetchMovieByQuery = async (debouncedQuery) => {
  const response = await axios.get(
    `/search/movie?query=${debouncedQuery}&include_adult=false&language=en-US`,
    options
  );
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}?language=en-US`, options);
  return response.data;
};

export const fetchMovieCast = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/credits?language=en-US`,
    options
  );
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?language=en-US`,
    options
  );
  return response.data.results;
};
