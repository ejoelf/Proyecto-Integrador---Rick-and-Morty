import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import "./card.css";

function Card({
  id,
  name,
  species,
  status,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) {
  const [isFav, setIsFav] = useState(false);
  const { pathname } = useLocation();

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, species, status, gender, origin, image });
    }
  }

  useEffect(() => {
    myFavorites.forEach((charFav) => {
      charFav.id === id && setIsFav(true);
    });
  }, []);

  return (
    <div className="card-container">
      <div className="fav-close">
        <div className="close">
          {pathname === "/Home" && (
            <button onClick={() => onClose(id)}>✖️</button>
          )}
        </div>
        <div className="fav">
          {isFav ? (
            <button onClick={handleFavorite}>💚</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </div>
      </div>
      <Link to={`/Detail/${id}`} className="link-name">
        {/* <Link to={`/Detail/${id}`} className="link-name"> */}
        <h2>
          {id} {name}
        </h2>
        {/* </Link> */}
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
      </Link>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
