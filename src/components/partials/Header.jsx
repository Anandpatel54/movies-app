import { Link } from "react-router-dom";

const Header = ({ data }) => {
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
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[4%]"
    >
      <h1 className="w-[70%] mt-3 text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-sm text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400">more</Link>
      </p>
      <p className="text-white mt-4">
        <i className="text-yellow-500 cursor-pointer ri-megaphone-fill"></i>
        {data.release_date || "No information"}
        <i className="ml-5 text-yellow-500 cursor-pointer ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-4 rounded-md font-semibold text-white bg-[#6556CD] mt-4">
        watct Trailer
      </Link>
    </div>
  );
};

export default Header;
