import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 15%",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start px-[2%] py-[1.5%]"
    >
      <h1 className="w-[60%] text-4xl text-white font-bold">
        {data.original_title || data.name}
      </h1>
      <p className="w-[50%] mt-1 mb-2 text-white">
        {data.overview.slice(0, 200)} ...
        <Link className="text-blue-500">more</Link>
      </p>
      <p className="text-white">
        <i className="ri-megaphone-fill text-amber-500"></i>
        {data.release_date}
        <i className="ri-album-fill text-amber-500 ml-4"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="text-white bg-[#6556CD] mt-4 p-3 rounded">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
