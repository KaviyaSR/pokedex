import _ from "lodash";
import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../Redux/action";
import { Link } from "react-router-dom";
import "./PokemonList.css";
import ReactPaginate from "react-paginate";

const PokemonList = (props) => {
    const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);
  React.useEffect(() => {
    FetchData(1);
  }, []);

  const FetchData = (page = 1) => {
    dispatch(getPokemonList(page))
  };
  const showData = () => {
    if (pokemonList.loading) {
      return <h1>Loading...</h1>;
    }

    if (!_.isEmpty(pokemonList.data)) {
      return (
        <div className="wrapper">
          {pokemonList.data.map((el) => {
            return (
              <div className="list">
                {el.name}
                <Link to={`/add/${el.name}`}>View</Link>
              </div>
            );
          })}
        </div>
      )
    }

    if (pokemonList.errorMsg !== "") {
      return <p>{pokemonList.errorMsg}</p>;
    }
    return <p>Unable to get Data</p>;
  };
  return (
    <div>
      <div >
        <p>Search: </p>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => props.history.push(`/poke/${search}`)}>
          Search
        </button>
      </div>
      {showData()}
      {!_.isEmpty(pokemonList.data) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 15)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => FetchData(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  )
};

export default PokemonList;
