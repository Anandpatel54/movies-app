import { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto  items-center    ">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-5 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i onClick={()=> setQuery("")} className="text-3xl text-zinc-400 cursor-pointer ri-close-line"></i>
      )}

      <div className="z-[100] absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[5%] overflow-auto">
       {/*<Link className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
          <img  className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg" src="" alt="" />
          <span>Hello Everyone</span>
        </Link>*/}
      </div>
    </div>
  );
};

export default TopNav;
