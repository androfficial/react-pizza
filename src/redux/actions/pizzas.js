import { dataAPI } from '../../api/api';

export const setLoaded = (payload) => ({
   type: 'SET_LOADED',
   payload
})

export const setPizzas = (items) => ({
   type: 'SET_PIZZAS',
   payload: items,
});

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
   dispatch(setLoaded(false));
      let { data } = await dataAPI.getPizzas(category, sortBy);
         dispatch(setPizzas(data));
}

// export const fetchPizzas = () => (dispatch) => {
//    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
//       dispatch(setPizzas(data));
//    });
// }