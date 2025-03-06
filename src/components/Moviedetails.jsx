import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncLoadMovieDetail,
  removeMovieDetail,
} from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const Moviedetails = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncLoadMovieDetail(id));
    return () => {
      dispatch(removeMovieDetail());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75),rgba(0,0,0,.95)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 15%",
      }}
      className="w-screen h-[140vh] px-[7%] relative"
    >
      {/* Navigation */}
      <nav className="w-full h-[6vh] text-zinc-300 flex items-center gap-6 text-xl mt-1 ml-2">
        <Link
          to="/"
          className="ri-home-2-line hover:text-[#6556CD] text-xl"
        ></Link>
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line text-xl"
        ></Link>
        <a href={info.detail.homepage} target="_blank">
          <i className="ri-external-link-fill text-xl"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
          target="_blank"
        >
          <i className="ri-earth-fill text-xl"></i>
        </a>
        <a
          href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
          target="_blank"
          className="text-xl"
        >
          imdb
        </a>
      </nav>

      {/* Banner & Details */}
      <div className="w-full flex mt-2">
        <img
          className="shadow-xl h-[51vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          })`}
          alt=""
        />

        <div className="content ml-7 text-white">
          <h1 className="movie-title text-4xl font-bold text-zinc-300">
            {info.detail.original_title || info.detail.name}
          </h1>

          <h1 className="text-white italic font-semibold">
            {info.detail.tagline}
          </h1>

          <div className="flex text-white items-center gap-x-3 mt-1">
            <h1 className="font-semibold">User Score</h1>
            <span className="w-[5.5vh] h-[5.5vh] bg-amber-500 rounded-full flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
            </span>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1 className="text-sm">{info.detail.release_date}</h1>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1 className="font-medium">
              {info.detail.genres.map((genre) => genre.name).join(", ")}
            </h1>
            <span className="text-[6px]">
              <i className="ri-circle-fill"></i>
            </span>
            <h1 className="text-sm">{info.detail.runtime} min</h1>
          </div>
          <h1 className="text-[#ffa640] text-xl mt-1 mb-0.5 font-medium">
            Overview
          </h1>
          <p className="text-[15px]">{info.detail.overview}</p>
          <h1 className="text-[#ffa640] text-xl mt-2 mb-0.5 font-medium">
            Translated in
          </h1>
          <p className="text-[15px] mb-6">{info.translations.join(", ")}</p>
          <Link
            to={`${pathname}/trailer`}
            className="bg-[#6556CD] p-3 rounded-lg"
          >
            <i className="ri-play-fill mr-1.5"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* Available on */}
      <div className="w-3/4 mt-8 mb-10">
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

      {/* Recommendation */}
      <hr className="border-gray-400 mb-5 h-[2px]" />
      <h1 className="text-3xl text-white font-bold ml-3 mb-2">
        More like this
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;
