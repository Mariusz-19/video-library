import { ref, getDatabase } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import app from "../../core/modules/firebase";

const database = getDatabase(app);

const Favorites = () => {
  //   const [snapshots, loading, error] = useList(ref(database, "favorites"));
  const [snapshot] = useObject(ref(database, "favorites"));
  const addFavorite = (userID: string, videoID: string) => {
  
}
  console.log(snapshot?.val());
  return <div>Fav</div>;
};
export default Favorites;
