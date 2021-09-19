import * as axios from 'axios';

export const dataAPI = {
  getPizzas(category, sortBy) {
    return axios.get(`/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`);
  }
};