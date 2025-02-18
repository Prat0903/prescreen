import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  return (
    <div className="w-full h-full flex flex-wrap p-[2%]">
      {data.map((card, index) => (
        <Link className="w-[25vh] mb-10 ml-10" key={index}>
          <img
            className="shadow-xl w-60 h-60 object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.poster_path || card.backdrop_path
            })`}
            alt=""
          />
          <h1 className="mt-3 text-lg text-zinc-300 font-semibold">{card.original_title || card.name}</h1>
        </Link>
      ))}
      ;
    </div>
  );
};

export default Cards;
