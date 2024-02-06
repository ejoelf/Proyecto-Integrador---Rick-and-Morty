import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import { filterCards, orderCards } from "../../redux/action";
import "./favourite.css";

function Favourites({ myFavorites }) {
  const dispatch = useDispatch();

  const handleOrder = (evento) => {
    dispatch(orderCards(evento.target.value));
  };

  const handleFilter = (evento) => {
    dispatch(filterCards(evento.target.value));
  };

  return (
    <div className="containerFavorite">
      <div className="barraFavoritos">
        <select
          name="order"
          defaultValue="orderCharacter"
          onChange={handleOrder}
        >
          <option value="orderCharacter" disabled="disabled">
            Order...
          </option>
          <option value="ascendente">Upward</option>
          <option value="descendente">Falling</option>
        </select>
        <select name="filter" defaultValue="All" onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        {myFavorites.map((char) => (
          <Card
            key={char.id}
            id={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin}
            image={char.image}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favourites);
