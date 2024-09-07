import { useContext } from "react";
import Sidebar from "../compenents/Sidebar";
import { VideoContext } from "../context/videoContext";
import Loader from "../compenents/Loader";
import ErrorDisplay from "../compenents/ErrorDisplay";
import VideoCard from "../compenents/VideoCard";

const Feed = () => {
  //* VideoContexte abone olup içerisinde tanımladığımız statelere eriştik.
  const { error, isLoading, videos } = useContext(VideoContext);

  
  return (
    <div className="flex">
      <Sidebar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorDisplay />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
