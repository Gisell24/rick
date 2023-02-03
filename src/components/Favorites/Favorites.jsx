import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Favorites.module.css";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      {myFavorites.map((character) => {
        return (
          <div className={style.card}>
            <div className={style.front}>
              <img src={character.image} alt={character.name} />
            </div>

            <div className={style.back}>
              <div>
                <Link to={`/detail/${character.id}`}>
                  <h2>{character.name}</h2>
                </Link>
              </div>

              <div className={style.species}>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
