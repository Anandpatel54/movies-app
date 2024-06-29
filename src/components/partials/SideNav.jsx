import { Link } from "react-router-dom";

const SideNav = () => {
  
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556CD] ri-tv-fill text-2xl mr-2"></i>
        <span className="">SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-[16px] leading-[7px]">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New Feeds
        </h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-1 ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-2 ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className=" mr-2 ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-2 ri-user-fill"></i> Peoples
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-2" />
      <nav className="flex flex-col text-zinc-400 text-[16px] leading-[7px]">
        <h1 className="text-white font-semibold text-[17px] mt-4 mb-5">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-1 ri-information-2-fill"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-5">
        <i className="mr-1 ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
