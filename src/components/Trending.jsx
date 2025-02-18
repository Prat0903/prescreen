import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState(null);
  const navigate = useNavigate();

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/${duration}`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(trending);

  useEffect(() => {
    getTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen px-[3%] py-[1%] overflow-hidden overflow-y-auto">
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
          <Dropdown
            title="Category"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <Cards data={trending} title={category} />
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
