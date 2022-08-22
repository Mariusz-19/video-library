import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToFavorite } from "../../components";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";
import { getVideoById } from "../../core/api";
import { VideoItemType } from "../../core/types/video-item";
import "./VideoDetails.scss";

function VideoDetails() {
  const [videoItem, setVideoItem] = useState<VideoItemType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  let { id } = useParams();

  useEffect(() => {
    const getVideoItems = async () => {
      if (!id) return;
      setLoading(true);
      const resullt = await getVideoById(id);
      setVideoItem(resullt.items[0]);

      setLoading(false);
    };
    getVideoItems();
  }, [id]);

  if (loading) return <LoadingCircle />;
  if (!videoItem) return null;

  return (
    <div>
      <div
        className="player"
        dangerouslySetInnerHTML={{
          __html: videoItem?.player?.embedHtml,
        }}
      />
      <AddToFavorite />
    </div>
  );
}

export default VideoDetails;
