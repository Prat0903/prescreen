import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full h-full flex flex-wrap p-[2%]">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          className="relative w-[25vh] mb-10 ml-10"
          key={index}
        >
          <img
            className="shadow-xl w-60 h-60 object-cover"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  })`
                : noimage
            }
            alt=""
          />
          <h1 className="mt-3 text-lg text-zinc-300 font-semibold">
            {card.original_title || card.name}
          </h1>

          {card.vote_average && (
            <div className=" absolute top-[50%] -right-[10%] text-white w-[6vh] h-[6vh] bg-amber-500 rounded-full flex justify-center items-center">
              {(card.vote_average * 10).toFixed()} <sup>%</sup>
            </div>
          )}
        </Link>
      ))}
      ;
    </div>
  );
};

export default Cards;
