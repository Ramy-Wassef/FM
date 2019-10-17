import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Splash from './components/splash/splash';
import Slider from './components/slider/slider';
import Home from './components/home/home';
import Vegetables from './components/vegetables/vegetables';
import Fruits from './components/fruits/fruits';
import Meats from './components/meats/meats';
import Seafood from './components/seafood/seafood';
import Potatoes from './components/potatoes/potatoes';
import Onions from './components/onions/onions';
import Broccoli from './components/broccoli/broccoli';
import Tomatoes from './components/tomatoes/tomatoes';
import Apples from './components/apples/apples';
import Strawberry from './components/strawberry/strawberry';
import Cherries from './components/cherries/cherries';
import Mangos from './components/mangos/mangos';
import Chicken from './components/chicken/chicken';
import Turkey from './components/turkey/turkey';
import Lamb from './components/lamb/lamb';
import Beef from './components/beef/beef';
import Fish from './components/fish/fish';
import Crab from './components/crab/crab';
import Shrimp from './components/shrimp/shrimp';
import Oyster from './components/oyster/oyster';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Splash />
    <Slider />
    <Route exact path='/' component={Home} />
    <Route path='/Fruits' component={Fruits} />
    <Route path='/Vegetables' component={Vegetables} />
    <Route path='/Meats' component={Meats} />
    <Route path='/Seafood' component={Seafood} />
    <Route path='/Potatoes' component={Potatoes} />
    <Route path='/Onions' component={Onions} />
    <Route path='/Broccoli' component={Broccoli} />
    <Route path='/Tomatoes' component={Tomatoes} />
    <Route path='/Apples' component={Apples} />
    <Route path='/Strawberry' component={Strawberry} />
    <Route path='/Cherries' component={Cherries} />
    <Route path='/Mangos' component={Mangos} />
    <Route path='/Chicken' component={Chicken} />
    <Route path='/Turkey' component={Turkey} />
    <Route path='/Lamb' component={Lamb} />
    <Route path='/Beef' component={Beef} />
    <Route path='/Fish' component={Fish} />
    <Route path='/Crab' component={Crab} />
    <Route path='/Shrimp' component={Shrimp} />
    <Route path='/Oyster' component={Oyster} />

    </div>
    </BrowserRouter>
  );
}

export default App;
