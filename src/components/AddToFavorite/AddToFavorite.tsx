import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "..";
import "./AddToFavorite.scss";
import useFavorite from "./Hooks/UseFavorite";

function AddToFavorite() {
  const { user } = useContext(AuthContext);
  let { id } = useParams();
  const { isFavorite, addToFavorites } = useFavorite(user?.uid, id);

  if (!isFavorite) {
    return (
      <button className="add-button" onClick={addToFavorites}>
        Add to favorite
      </button>
    );
  }
  return <button className="del-button">Remove from favorite</button>;
}
export default AddToFavorite;
