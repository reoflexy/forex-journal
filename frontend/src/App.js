import React from 'react';
import {useRoutes} from 'react-router'
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import AddTrade from './views/AddTrade';
import Upcoming from './views/Upcoming';
import History from './views/History';
import Plan from './views/Plan';

function App() {
 const routes = useRoutes([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/addtrade',
    element: <AddTrade/>
  },
  {
    path: '/upcoming',
    element: <Upcoming/>
  },
  {
    path: '/history',
    element: <History/>
  },
  {
    path: '/plan',
    element: <Plan/>
  },
 ])

 return routes;
}

export default App;
