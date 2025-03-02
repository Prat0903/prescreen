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
        background: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75),rgba(0,0,0,.95)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 15%",
      }}
      className="w-screen h-screen px-[8%]"
    >
      <div></div>
      <nav className="w-full h-[6vh] text-zinc-300 flex items-center gap-6 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line text-2xl"
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

      <div className="w-full flex">
        <img
          className="shadow-xl h-72 object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          })`}
          alt=""
        />

        <div className="content ml-5">
          <h1 className="text-5xl font-bold text-zinc-300">
            {info.detail.original_title || info.detail.name}
          </h1>

          <div className="flex text-white items-center gap-x-3 mt-2">
            <h1 className="text-lg font-semibold">User Score</h1>
            <span className="text-white w-[6vh] h-[6vh] bg-amber-500 rounded-full flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1>{info.detail.release_date}</h1>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1 className="text-lg font-medium">
              {info.detail.genres.map((genre) => genre.name).join(", ")}
            </h1>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1>{info.detail.runtime} min</h1>
          </div>
        </div>
      </div>

      {/* Available on */}
      <div className="w-3/4 mt-8">
        {info.watchProviders && info.watchProviders.buy && (
          <div className="flex gap-x-5 items-center text-white mb-5">
            <h1 className="text-lg font-semoibold">Available to Buy</h1>
            {info.watchProviders.buy.map((watchProvider, index) => (
              <img
                title={watchProvider.provider_name}
                key={index}
                className="shadow-xl h-[5vh] w-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path})`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProviders && info.watchProviders.flatrate && (
          <div className="flex gap-x-5 items-center text-white mb-5">
            <h1 className="text-lg font-semibold">Available on Platforms</h1>
            {info.watchProviders.flatrate.map((watchProvider, index) => (
              <img
                title={watchProvider.provider_name}
                key={index}
                className="shadow-xl h-[5vh] w-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path})`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchProviders && info.watchProviders.rent && (
          <div className="flex gap-x-5 items-center text-white">
            <h1 className="text-lg font-semibold">Available on Rent</h1>
            {info.watchProviders.rent.map((watchProvider, index) => (
              <img
                title={watchProvider.provider_name}
                key={index}
                className="shadow-xl h-[5vh] w-[5vh] object-cover"
                src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path})`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
