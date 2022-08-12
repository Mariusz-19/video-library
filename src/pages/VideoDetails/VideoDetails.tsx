import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideoById } from "../../core/api";
import { VideoItemType } from "../../core/types/video-item";

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

  if (!videoItem) return null;
  if (loading) return <span>Loading...</span>;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: videoItem?.player?.embedHtml,
      }}
    />
  );
}

export default VideoDetails;
