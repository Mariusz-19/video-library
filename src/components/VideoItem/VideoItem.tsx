import { useNavigate } from "react-router-dom";
import AddToFavorite from "../AddToFavorite/AddToFavorite";
import "./VideoItem.scss";

type VideoItemsProps = {
  itemId: string;
  itemImg: string;
};

function VideoItem({ itemId, itemImg }: VideoItemsProps) {
  const navigate = useNavigate();
  return (
    <div className="video-item" onClick={() => navigate(`/movie/${ itemId }`)}>
      <img alt="" src={itemImg}></img>
      <div><AddToFavorite /></div>
    </div>
      

  );
}

export default VideoItem;
