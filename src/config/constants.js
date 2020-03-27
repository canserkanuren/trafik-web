export const getBaseUrl = () => {
  let baseUrl = 'http://localhost:8000';

  if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://trafik-back.herokuapp.com';
  }

  return baseUrl;
};
