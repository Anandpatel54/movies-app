import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import DropDown from "./partials/DropDown";
import { useEffect, useState } from "react";
import axios from "../utils/axios";
import Cart from "./partials/Cart";
import Loading from "./Loading";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("All");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}`);
      settrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  }
  console.log(trending)
  useEffect(() => {
    GetTrending();
  }, [category, duration]);

  return trending ? (
    <div className="w-screen h-screen px-[3%]">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] font-semibold cursor-pointer ri-arrow-left-s-line"
          ></i>
          Trending
        </h1>
        <div className="flex items-center">
          <TopNav />
          <DropDown
            title="Category"
            options={["movies", "TV", "All"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <DropDown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <Cart data={trending} title={category} />
    </div>
  ):(
    <Loading />
  )
};

export default Trending;
