import notfound from "/notfound.gif";

const Pagenotfound = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[70%] object-cover" src={notfound} alt="" />
    </div>
  );
};

export default Pagenotfound;
