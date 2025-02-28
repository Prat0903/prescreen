import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLoadMovieDetail,
  removeMovieDetail,
} from "../store/actions/movieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncLoadMovieDetail(id));
    return () => {
      dispatch(removeMovieDetail());
    };
  }, []);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 15%",
      }}
      className="w-screen h-screen px-[8%]"
    >
      <nav className="w-full h-[6vh] text-zinc-300 flex items-center gap-6 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
        <a href={info.detail.homepage} target="_blank">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
          target="_blank"
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
          target="_blank"
        >
          imdb
        </a>
      </nav>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
