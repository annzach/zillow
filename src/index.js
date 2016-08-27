import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Main from './components/Main'
import HouseSell from './components/HouseSell'
import BuyPage from './components/BuyPage';
import SearchPage from './components/SearchPage';
import './css/style.css'

render(
  <Router history ={browserHistory}>
  <Route path= '/' component ={Main}>
   <IndexRoute component={Welcome}></IndexRoute>
    <Route path= '/housesell' component ={HouseSell}/>
    <Route path='buy' component={BuyPage}></Route>
    <Route path='buy/Search' component={SearchPage}></Route>
  </Route>
  </Router>,
  document.getElementById('root')
);
