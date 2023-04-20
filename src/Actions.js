import axios from "axios";

const item = axios.create({
  baseURL: `https://api.spoonacular.com/recipes/`,
});

export const getItems = async (text) => {
  const params = new URLSearchParams({
    query: text,
    number: 100,
    apiKey: "1898a2b71edd4ec689e79bab52e28b37",
  });
  const response = await item.get(`complexSearch?${params}`);

  return response;
};

export const getCurrentItem = async (id) => {
  const params = new URLSearchParams({
    apiKey: "1898a2b71edd4ec689e79bab52e28b37",
  });
  const response = await item.get(`${id}/information?${params}`);

  return response;
};
