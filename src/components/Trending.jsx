import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";

const Trending = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen p-[3%]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-300">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Trending
        </h1>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <Dropdown title="Category" options={["All", "Movie", "Tv"]} func="" />
          <div className="w-[2%]"></div>
          <Dropdown title="Duration" options={["Week", "Day"]} func="" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
