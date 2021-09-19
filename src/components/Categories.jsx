import React from 'react';

const Categories = React.memo(
  ({ items, activeCategory, onClickCategory }) => {
    
    return (
      <div className="categories">
        <ul>
          <li 
            onClick={() => onClickCategory(null)} 
            className={activeCategory === null ? 'active' : ''}>
            Все
          </li>
          {items &&
            items.map((name, index) => 
              <li 
                onClick={() => onClickCategory(index)} 
                className={activeCategory === index ? 'active' : ''} 
                key={`${name}_${index}`}>
                {name}
              </li>
            )
          }
        </ul>
      </div>
    );
  
  }
);

export default Categories;