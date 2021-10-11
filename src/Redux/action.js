import axios from "axios";
 
export const getPokemonList =(page)=>async dispatch =>{
    try{

        dispatch({
            type:"POKEMON_LIST_LOADING"

        })
        const perpage=15;
        const offset=page *perpage-perpage;
       
        const res = await axios.
        get(` https://pokeapi.co/api/v2/pokemon?limit=${perpage}&offset=${offset} `)

        dispatch({
            type:"POKEMON_LIST_SUCCESS",
            payload: res.data
        })
    }catch (e){
        dispatch({
            type:'POKEMON_LIST_FAIL'
        })

    }
};

export const getPokemon=(pokemon)=>async dispatch =>{
    try{
        dispatch({
            type:"POKEMON_MUTLI_LOADING"

        });
        
        const res = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        dispatch({
            type:"POKEMON_MUTLI_SUCCESS",
            payload: res.data,
            pokemonName:pokemon
        })
    }catch (e){
        dispatch({
            type:'POKEMON_MUTLI_FAIL'
        })

    }
};