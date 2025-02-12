import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center gap-4 ml-[17%]">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        className="text-zinc-200 w-[50%] outline-none border-none text-lg p-3 mx-5"
        type="text"
        value={query}
        placeholder="search anything..."
      />

      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] absolute top-[100%] bg-zinc-200 overflow-auto rounded">
        {searches.map((search, index) => (
          <Link
            key={index}
            className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300"
          >
            <img src="" alt="" />
            <span>{search.original_title || search.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
