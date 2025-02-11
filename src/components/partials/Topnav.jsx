import { Link } from "react-router-dom";

const Topnav = () => {
  return (
    <div className="w-full h-[10vh] relative flex justify-center items-center gap-4">
      <i className="text-zinc-400 text-2xl ri-search-line"></i>
      <input
        className="text-zinc-200 w-[50%] outline-none border-none text-lg p-3 mx-5"
        type="text"
        placeholder="search anything..."
      />
      <i className="text-zinc-400 text-2xl ri-close-fill"></i>

      <div className="w-[50%] h-[50vh] absolute top-[100%] bg-zinc-200 overflow-auto">
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
        <Link className="flex bg-zinc-100 p-5 justify-start items-center text-zinc-600 border-b-2 border-zinc-100 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>One Piece</span>
        </Link>
      </div>
    </div>
  );
};

export default Topnav;
