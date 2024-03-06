import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MatchInfo=()=> {
    const location = useLocation(); 
    const [path, setPath] = useState();

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname])

    return (
        <div className='w-full lg:w-8/12 xl:w-8/12 mx-auto h-full bg-white-200 shadow-2xl mt-8 bg-gray-100 mb-8'>
            <header className="flex w-full justify-evenly text-2xl border-b-2 border-gray-400">
                <div className="relative">
                    <Link to={path === "/livematches/matchinfo" || path==="/livematches/matchinfo/squad" ? "/livematches/matchinfo" : "/history/matchinfo"} className={location.pathname === "/livematches/matchinfo" || location.pathname === "/history/matchinfo" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        Scorecard
                        {location.pathname === "/livematches/matchinfo" || location.pathname === "/history/matchinfo" ? <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>:null}
                    </Link>
                </div>
                <div className="relative">
                    <Link to={path === "/livematches/matchinfo" ? "/livematches/matchinfo/squad" : "/history/matchinfo/squad"} className={location.pathname === "/livematches/matchinfo/squad" || location.pathname === "/history/matchinfo/squad" ? "hover:text-gray-300 text-blue-800" : "hover:text-gray-300"}>
                        Squads  
                        {location.pathname === "/livematches/matchinfo/squad" || location.pathname === "/history/matchinfo/squad" ? <div className="bg-blue-800 h-1 w-full absolute bottom-0 left-0"></div>:null}
                    </Link>
                </div>
            </header>
            <div className=''></div>
            <Outlet/>   
        </div>
    );
}

export default MatchInfo;
