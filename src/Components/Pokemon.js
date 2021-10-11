import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { getPokemon } from "../Redux/action";


const Pokemon = (props) => {


  const pokemonName = props.match.params.pokemon;
  const dispatch = useDispatch();
  const pokemonState = useSelector(state => state.Pokemon);
  console.log(pokemonName)

  React.useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);
  const ShowData = () => {

     if (pokemonState.loading) {
      return <p>Loading...</p>;
    }
    if (!_.isEmpty(pokemonState.data[pokemonName])) {
      const pokeData = pokemonState.data[pokemonName];
      return (
        <div>
          <h1>Sprites</h1>
            <img src={pokeData.sprites.front_default} alt=""/>
            <img src={pokeData.sprites.back_default} alt=""/>
            <img src={pokeData.sprites.front_shiny} alt=""/>
            <img src={pokeData.sprites.back_shiny} alt=""/>
          <div>
            <h1>Stats</h1>
            { pokeData.stats.map((el) => {
              return <p>{el.stat.name} {el.base_stat}</p>
             
            })}
          </div>
          <div>
            <h1>Abilities</h1>
            { pokeData.abilities.map(el => {
              return <p>{el.ability.name}</p>;
            })}
          </div>
        </div>
      );
    }
    if (pokemonState.errorMsg !== "") {
      return <p>{pokemonState.errorMsg}</p>;
    }

    return <p>error getting pokemon</p>;
  };

  return (
    <div>
      <div>
        <h1>{pokemonName}</h1>
        {ShowData()}
      </div>
    </div>
  );
};

export default Pokemon;
