const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full h-[40vh] p-5">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-zinc-300">Trending</h1>
      </div>

      <div className="w-full h-[40vh] flex overflow-y-hidden">
        {data.map((data, index) => {
          return (
            <div
              key={index}
              className="min-w-[15%] bg-zinc-700 mr-5 mb-5 rounded-md"
            >
                <img
                  className="h-[50%] w-full object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
                  alt=""
                />
              <div className="w-full h-[50%] p-2 text-white">
                <h1 className="movie font-bold leading-tight">
                  {data.original_title || data.name}
                </h1>
                <p className="mt-3 leading-tight text-sm">
                  {data.overview.slice(0, 60)} ...
                  <span className="text-blue-500">more</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCards;
