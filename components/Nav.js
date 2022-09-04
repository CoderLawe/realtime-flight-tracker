import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import SearchIcon from "@mui/icons-material/Search";
// import UserIcon from "@mui/icons-material/User";

const Nav = () => {
    return(
        <div className="bg-headerGray flex justify-between p-5">
            {/* Left side */}
            <div className="flex space-x-8">
                <p className="text-gray-400">Departures</p>
                <p className="text-gray-200">Arrivals</p>
                <p className="text-gray-200">Airport</p>


                
            </div>

            {/* Right Side   */}

            <div className="flex space-x-8">
                <SearchIcon className="text-gray-200"/>
                {/* <UserIcon className="text-gray-200"/> */}

                
            </div>
        </div>
    )
}

export default Nav