import { useCallback, useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { getVideos } from "../../core/api";
import { VideoItemType, VideoResponse } from "../../core/types/video-item";
import PageButton from "../../components/PageButton/Pagebutton";
import VideoItemsBox from "../../components/VideoItemsBox/VideoItemsBox";
import "./Home.scss";
import LoadingCircle from "../../components/LoadingCircle/LoadingCircle";

export function VideoItemList() {
  const [videoItems, setVideoItems] = useState<VideoItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [actualPage, setActualPage] = useState<number>(1);
  const [pageMeta, setPageMeta] = useState<Pick<
    VideoResponse,
    "nextPageToken" | "pageInfo" | "prevPageToken"
  > | null>(null);

  const getVideoItems = async (pageToken: string) => {
    setLoading(true);
    const resullt = await getVideos(pageToken);
    if (resullt) {
      setPageMeta({
        nextPageToken: resullt?.nextPageToken,
        prevPageToken: resullt?.prevPageToken,
        pageInfo: resullt.pageInfo,
      });
      setVideoItems(resullt.items);
    }
    setLoading(false);
  };

  useEffect(() => {
    getVideoItems("");
  }, []);

  let pages = useMemo(() => {
    if (pageMeta && pageMeta?.pageInfo) {
      return (
        pageMeta?.pageInfo?.totalResults / pageMeta?.pageInfo.resultsPerPage
      );
    }
    return 0;
  }, [pageMeta]);

  console.log({ pageMeta, pages });

  const handlePageChange = ({ isNext, isPrevious, nextSelectedPage }: any) => {
    if (isNext) {
      getVideoItems(pageMeta?.nextPageToken || "");
    }
    if (isPrevious) {
      getVideoItems(pageMeta?.prevPageToken || "");
    }
    setActualPage(nextSelectedPage);
  };

  if (loading) return <LoadingCircle />;
  return (
    <div className="video-item-list">
      {videoItems &&
        videoItems &&
        videoItems?.map((item: VideoItemType) => (
          <VideoItemsBox
            key={item.id}
            itemId={item.id}
            itemImg={item.snippet.thumbnails.medium.url}
            snippet={item?.snippet}
          />
        ))}
      {pages && (
        <ReactPaginate
          breakLabel="..."
          className="paginate"
          nextLabel={<PageButton active>Next</PageButton>}
          onClick={handlePageChange}
          pageRangeDisplayed={1}
          pageCount={0}
          previousLabel={<PageButton active>Previous</PageButton>}
          nextClassName="next-class"
          previousClassName="previous-class"
        />
      )}
    </div>
  );
}

export default VideoItemList;
