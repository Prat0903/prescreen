import SideNav from "./partials/SideNav";
import Topnav from "./partials/Topnav";

const Home = () => {
  document.title = "PreScreen | Home";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full ">
        <Topnav />
      </div>
    </>
  );
};

export default Home;
