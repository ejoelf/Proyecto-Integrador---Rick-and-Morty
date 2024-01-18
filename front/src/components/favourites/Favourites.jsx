import React from "react";
import { connect } from "react-redux";
import Card from "../card/Card";

function Favourites({ myFavorites }) {
  return (
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
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favourites);
