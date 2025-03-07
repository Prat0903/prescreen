import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pagenotfound from "../Pagenotfound";
const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const trailer = useSelector((state) => state[category].info.videos);
  console.log(trailer);

  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,.85)] flex items-center justify-center">
      <Link
        onClick={() => navigate(-1)}
        className="ri-close-fill absolute top-10 right-40 hover:text-[#6556CD] text-3xl text-white"
      ></Link>
      {trailer ? (
        <ReactPlayer
          controls
          height={650}
          width={1120}
          url={`https://www.youtube.com/watch?v=${trailer.key}`}
        />
      ) : (
        <Pagenotfound />
      )}
    </div>
  );
};

export default Trailer;
