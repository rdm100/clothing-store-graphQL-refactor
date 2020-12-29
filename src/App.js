import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.jsx';

const Hats = () => (
  <div>
    <h1>Hats page </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />    
        <Route path='/shop/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
