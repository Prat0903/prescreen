import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[45vh] flex overflow-y-hidden mx-2.5">
      {data.length > 0 ? (
        data.map((data, index) => {
          return (
            <Link
              to={`/${data.media_type}/details/${data.id}`}
              key={index}
              className="min-w-[15%] bg-zinc-700 mr-5 mb-5 rounded-md"
            >
              <img
                className="h-[50%] w-full object-cover rounded-md"
                src={
                  data.backdrop_path || data.poster_path
                    ? `https://image.tmdb.org/t/p/original/${
                        data.backdrop_path || data.poster_path
                      }`
                    : noimage
                }
                alt=""
              />
              <div className="w-full h-[50%] p-2 text-white">
                <h1 className="movie font-bold leading-tight">
                  {data.original_title || data.name}
                </h1>
                <p className="mt-3 leading-tight text-sm">
                  {data.overview.slice(0, 60)} ...
                  <span className="text-blue-500">more</span>
                </p>
              </div>
            </Link>
          );
        })
      ) : (
        <h1 className="text-4xl text-white font-bold flex items-center justify-center">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
