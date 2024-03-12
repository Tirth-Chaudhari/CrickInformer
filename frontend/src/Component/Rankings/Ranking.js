import { Link, Outlet, useLocation } from "react-router-dom";

const Ranking = () => {
    console.log("hello Rankings");
    const location = useLocation();
    
    return (
        <div className='w-full lg:w-8/12 xl:w-8/12 mx-auto h-full bg-white-200 shadow-2xl mt-8 bg-gray-100 mb-8'>
            <header className="flex w-full justify-evenly text-2xl border-b-2 border-gray-400">
                <div className="relative">
                    <Link to="batting"  className={location.pathname === "/rankings/batting" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        Batting
                        {location.pathname === "/rankings/batting" && <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>}
                    </Link>
                </div>
                <div className="relative">
                    <Link to="bowling" className={location.pathname === "/rankings/bowling" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        Bowling
                        {location.pathname === "/rankings/bowling" && <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>}
                    </Link>
                </div>
                <div className="relative">
                    <Link to="all-rounders" className={location.pathname === "/rankings/all-rounders" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        All-Rounders
                        {location.pathname === "/rankings/all-rounders" && <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>}
                    </Link>
                </div>
                <div className="relative">
                    <Link to="teams" className={location.pathname === "/rankings/teams" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        Teams
                        {location.pathname === "/rankings/teams" && <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>}
                    </Link>
                </div>
            </header>
            <div className=''></div>
            <Outlet />
        </div>
    )
}

export default Ranking;
