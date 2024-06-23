import { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Header from "./partials/Header";

const Home = () => {
  document.title = "SCSDB | Homepage";

  const [wallpaper, setwallpaper] = useState(null);

  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending//all/day`);

      let randondata =
        data.results[(Math.random() * data.results.length).toFixed()];
      setwallpaper(randondata);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    !wallpaper && GetHeaderWallpaper();
  }, []);

  return wallpaper ? (
    <>
      <SideNav />

      <div className="w-[80%] h-full">
        <TopNav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : (
    <h1>Loading..</h1>
  );
};

export default Home;
