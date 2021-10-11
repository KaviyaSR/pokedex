const initialState = {
    loading: false,
    data: {},
    errorMsg: "",
    
  };

  
  const pokemonMultiReducers =(state= initialState , action)=>{
  switch (action.type) {
      case "POKEMON_MUTLI_LOADING":
          return{
              ...state,
              loading:true,
              errorMsg:" "
          };

          case "POKEMON_MUTLI_FAIL":
            return{
                ...state,
                loading:false,
                errorMsg:"Unable to find Pokemon"
            };
          case "POKEMON_MUTLI_SUCCESS":
          return{
              ...state,
              loading:false,
              errorMsg:"",
              data:{
                  ...state.data,
                  [action.pokemonName]:action.payload
              }
          };
  
      default:
          return state
  }



  }

  export default pokemonMultiReducers;