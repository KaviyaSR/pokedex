import {combineReducers} from 'redux';
import pokemonListReducer from './reducer';
import pokemonMultiReducers from './multiReducers'
const rootReducer=combineReducers({
    PokemonList:pokemonListReducer,
    Pokemon:pokemonMultiReducers
});
       
export default rootReducer;