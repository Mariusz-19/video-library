import { ref, getDatabase } from "firebase/database";
import { useList, useObject } from "react-firebase-hooks/database";
import app from "../../core/modules/firebase";

const database = getDatabase(app);

const Favorites = () => {
  //   const [snapshots, loading, error] = useList(ref(database, "favorites"));
  const [snapshot, loading, error] = useObject(ref(database, "favorites"));

  console.log(snapshot?.val());
  return <div>Fav</div>;
};
export default Favorites;
