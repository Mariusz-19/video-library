import "./VideoItemsBox.scss";
import { Snippet } from "../../core/types/video-item";
import VideoItem from "../VideoItem/VideoItem";

type VideoItemsBoxProps = {
  itemId: string;
  itemImg: string;
  snippet: Snippet;
}

function VideoItemsBox({ itemId, itemImg, snippet }: VideoItemsBoxProps) {
  const descCut =
    snippet?.description?.length > 20
      ? `${snippet?.description.slice(0, 20)}...`
      : snippet?.description;

  return (
    <div className="video-item-box">
      <VideoItem itemId={itemId} itemImg={itemImg} />
      <h4>{snippet?.title}</h4>
      <p>{descCut}</p>
    </div>
  );
}

export default VideoItemsBox;
