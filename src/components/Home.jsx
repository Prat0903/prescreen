import { useEffect, useState } from "react";
import Header from "./partials/Header";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import HorizontalCards from "./partials/HorizontalCards";

const Home = () => {
  document.title = "PreScreen | Home";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      let randomData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      setTrending(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
    !trending && getTrending();
  }, []);

  console.log(trending);

  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-x-hidden overflow-auto">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
