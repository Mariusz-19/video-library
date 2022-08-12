import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getSearching } from "../../core/api";
import VideoItemsBox from "../../components/VideoItemsBox/VideoItemsBox";

function SearchContent() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const searchValue = searchParams.get("q");
  const [videoItems, setVideoItems] = useState<any>(null);

  useEffect(() => {
    const getVideoItems = async () => {
      if (!searchValue) return;
      setLoading(true);
      const resullt = await getSearching(searchValue);
      setVideoItems(resullt.items);

      setLoading(false);
    };
    getVideoItems();
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue) {
      navigate("/");
    }
  }, [navigate, searchValue]);

  if (loading) return <span>Loading...</span>;

  return (
    <div>
      {videoItems &&
        videoItems &&
        videoItems?.map((item: any) => (
          <VideoItemsBox key={item.etag}
            itemId={ item.id.videoId}
            itemImg={item.snippet.thumbnails.medium.url}
            snippet={item?.snippet} />
        ))}
    </div>
  );
}

export default SearchContent;
