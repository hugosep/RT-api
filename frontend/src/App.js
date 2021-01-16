import React from 'react';
import './App.css';
import { Switch, Route,BrowserRouter } from 'react-router-dom';

// Imports Components
import Item from './components/items/Item'
import Items from './components/items/Items'
import HeaderRipley from './components/layout/HeaderRipley';

function App() {
  return (
    <BrowserRouter>
        <HeaderRipley/>
        <Switch>
            <Route exact path='/' component={ Items }/>
            <Route path='/details/:partNumber' component={Item}/>
        </Switch>
    </BrowserRouter>
)
}

export default App;
