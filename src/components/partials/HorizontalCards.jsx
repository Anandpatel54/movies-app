import { Link } from "react-router-dom";

const HorizontalCards = ({ data, title }) => {
  return (
    <div className="w-full h-[40vh] p-5 mb-5">
      <div className="w-[100%] h-[40vh] text-white flex overflow-y-hidden">
        {data.map((d, i) => (
          <div key={i} className="min-w-[20%] mr-5 mb-5">
            <img
              className="w-full h-[55%] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`}
              alt=""
            />
            <div className="text-white p-3 h-[45%]">
              <h1 className="mt-3 text-lg font-black cursor-pointer">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mt-3 mb-3 text-[12px] text-white">
                {d.overview.slice(0, 50)}...
                <Link className="text-blue-400">more</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
