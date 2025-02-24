import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const Tvshow = () => {
  document.title = "Prescreen | TV Shows";

  const [category, setCategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getTv = async () => {
    try {
      const { data } = await axios.get(`tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPage(page + 1);
        settv((prevState) => [...prevState, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (tv.length === 0) getTv();
    else {
      setPage(1);
      settv([]);
      getTv();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen px-[3%] py-[1%] overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-300">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          TV Shows
        </h1>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_toady"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={getTv()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshow;
