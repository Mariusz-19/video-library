import { ref, getDatabase, child, update, push, get } from "firebase/database";
import { useCallback, useContext } from "react";
import { useObject } from "react-firebase-hooks/database";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../components";
import app from "../../../core/modules/firebase";

const database = getDatabase(app);

const useFavorite = (userID?: string, videoID?: string) => {
    const [snapshot] = useObject(ref(database, "favorites"));

  
    const addToFavorites = useCallback(() => { 
      if (!snapshot?.exists() || !userID || !videoID) return;
      const db = getDatabase();
      const currentUserData = [...(snapshot?.val()[userID] || [])];
      if (currentUserData.some((id) => id === videoID)) return;

      return update(ref(db), {
        favorites: {
          ...snapshot?.val(),
          [userID]: [...currentUserData, videoID],
        },
      });
    }, [snapshot, userID, videoID])

    return { isFavorite: false, addToFavorites, removeFromFavorites: () => null }
}
export default useFavorite;