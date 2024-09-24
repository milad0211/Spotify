import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="" />
            <img className="w-5" src={assets.plus_icon} alt="" />
          </div>
        </div>

        <div
          className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col
        items-start justify-start gap-1 pl-4 "
        >
          <h1>Create Your First Playlist</h1>
          <p className="font-light">It's Easy We Will Help You</p>
          <button className="bg-white px-4 py-1.5 text-black text-[15px] rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        <div
          className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col
        items-start justify-start gap-1 pl-4 mt-4"
        >
          <h1>Let's Find Some Podcast Follow</h1>
          <p className="font-light">We'll Keep You Update On New Episodes</p>
          <button className="bg-white px-4 py-1.5 text-black text-[15px] rounded-full mt-4">
            {" "}
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
