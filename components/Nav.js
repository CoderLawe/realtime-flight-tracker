import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import SearchIcon from "@mui/icons-material/Search";
// import UserIcon from "@mui/icons-material/User";

const Nav = () => {
  return (
    <div className="h-[52px]  max-w-8xl bg-black flex items-center  px-[20px] py-[6px] mx-[30px] relative z-30">
      <p className="text-gray-200 text-[32px]">
        November<span className="text-yellow-300">Romeo</span>
      </p>

      <div className="flex items-center space-x-12 ml-[40px]">
        <p className="text-[14px] text-gray-400">Apps</p>
        <p className="text-[14px] text-gray-400">Add coverage</p>
        <p className="text-[14px] text-gray-400">Data/History</p>
        <p className="text-[14px] text-gray-400">Subscription Plans</p>
        <p className="text-[14px] text-gray-400">Login</p>
      </div>
    </div>
  );
};

export default Nav;
