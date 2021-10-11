import './App.css';
import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import PokemonList from'./Components/PokemonList';
import Pokemon from './Components/Pokemon';
function App() {


  return (
    <div className="app">
  <nav>
    <NavLink to={'/'}>Search</NavLink>
  </nav>

   <Switch>
     <Route path={"/"} exact component={PokemonList}/>
     <Route path={"/add/:pokemon"} y
     exact component={Pokemon}/>
     <Redirect to ={"/"}/>
   </Switch>
    </div>
  );
}

export default App;
