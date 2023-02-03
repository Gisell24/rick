import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../src/redux/actions";

function Card({ name, gender, onClose, species, image, id }) {
  //props --> {name: '', species: '', gender: '', image: '', onClose: fn}
  const dispatch = useDispatch();

  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ name, gender, onClose, species, image, id }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <div>
        <img src={image} alt={name} />
      </div>

      <div>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
      </div>

      <div>
        <h2>{species}</h2>
        <h2>{gender}</h2>
      </div>

      <div>
        <button onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default Card;
