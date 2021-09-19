import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, Sort, PizzaBlock, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortNames = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {

  const dispatch = useDispatch();
  
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const setActiveCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectSortType = (obj) => {
    dispatch(setSortBy(obj));
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={category} items={categoryNames} onClickCategory={setActiveCategory} />
        <Sort items={sortNames} activeSortType={sortBy.type} onClickSortType={onSelectSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded 
          ?
          items.map((obj) => <PizzaBlock addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} {...obj} key={obj.id} />)
          :
          Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  );
  
};

export default Home;
