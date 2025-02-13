import { useEffect, useState } from "react";
import Header from "./partials/Header";
import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";

const Home = () => {
  document.title = "PreScreen | Home";
  const [wallpaper, setWallpaper] = useState();

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

  useEffect(() => {
    !wallpaper && getHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};

export default Home;
