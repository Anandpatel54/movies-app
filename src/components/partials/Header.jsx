import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[60vh] flex flex-col justify-end p-[10%]"
    >
      <h1 className="w-[70%] mt-3 text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-sm text-white">{data.overview.slice(0,200)}...<Link className="text-blue-400">more</Link></p>
    </div>
  );
};

export default Header;
