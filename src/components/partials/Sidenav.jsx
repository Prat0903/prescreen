import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-6">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>PreScreen</span>
      </h1>

      <nav className="flex flex-col text-zinc-300 text-lg gap-3">
        <h1 className="mt-6 mb-2 text-white font-semibold">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4"
        >
          <i className="mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4"
        >
          <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4">
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4">
          <i className="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>

      <hr className="bg-zinc-300 border-none h-[1px] mt-2" />

      <nav className="flex flex-col text-zinc-300 text-lg gap-3">
        <h1 className="mt-7 mb-2 text-white font-semibold">More Information</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4">
          <i className="ri-information-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-md px-3 py-4">
          <i className="ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
