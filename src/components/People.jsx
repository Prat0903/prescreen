import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Topnav from "./partials/Topnav";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const People = () => {
  document.title = "Prescreen | People";

  const [category, setCategory] = useState("popular");
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPage(page + 1);
        setPeople((prevState) => [...prevState, ...data.results]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (people.length === 0) getPeople();
    else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return people.length > 0 ? (
    <div className="w-screen h-screen px-[3%] py-[1%] overflow-hidden overflow-y-auto">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-300">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Person
        </h1>
        <div className="w-[80%] flex items-center">
          <Topnav />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople()}
        hasMore={hasMore}
        loader={<h1 className="text-white">Loading...</h1>}
      >
        <Cards data={people} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
