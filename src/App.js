import React from 'react';
import { Route } from 'react-router';
import { Header } from './components';
import { Home, Cart } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/cart" component={Cart} exact />
        </div>
      </div>
    </div>
  );
};

export default App;