import "./AddToFavorite.scss";
function AddToFavorite({ isFavorite }: { isFavorite: boolean }) {
  if (isFavorite) {
    return <button className="add-button">Add to favorite</button>;
  }
  return <button className="del-button">Remove from favorite</button>;
}
export default AddToFavorite;
