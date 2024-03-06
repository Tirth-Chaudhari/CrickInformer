import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./Component/NavBar";

import {Routes,Route,Switch,BrowserRouter, Navigate} from  "react-router-dom"
import LiveMatches from "./Component/Matches/LiveMatches";
import Recent from "./Component/Recent/Recent";
import Upcoming from "./Component/Upcoming/Upcoming";
import MatchInfo from "./Component/Matches/MatchInfo/MatchInfo";
import ScoreCard from "./Component/Matches/MatchInfo/ScoreCard";
import MatchSquad from "./Component/Matches/MatchInfo/MatchSquad";
const App=()=>
{
  

    return( 
      <div>
        <NavBar/>
        
        <Routes>
            <Route path="/livematches" element={<LiveMatches/>}> 
            </Route>
            <Route path="/history" element={<Recent/>}/>
            <Route path="/upcoming" element={<Upcoming/>}/>
            <Route path="livematches/matchinfo" element={<MatchInfo/>}>           
                    <Route  index  element={<ScoreCard/>}/>
                    <Route path="squad" element={<MatchSquad/>}/>
             </Route>
             <Route path="history/matchinfo" element={<MatchInfo/>}>           
                    <Route  index  element={<ScoreCard/>}/>
                    <Route path="squad" element={<MatchSquad/>}/>
             </Route>
             <Route index element={<Navigate to="/livematches" replace />} />

        </Routes>
      </div>  

    )

    // const [liveMatch,setMatch]=useState([]);
    // useEffect(()=>
    // {
    //     try
    //     {
    //       axios.get("http://localhost:8081/match/live").then((response)=>
    //       {
    //         if(response){
    //           setMatch(response.data);
    //         }

    //       })
    //     }
    // },[])

    //   return(

    //       <div className="m-16 w-100 h-100 flex">
    //         {liveMatch.map((match,index)=>
    //         {
    //           return(
    //               <div className="m-4 bg-blue-300 shadow-lg border-b-2 border-gray-400">
    //                     <div>
    //                         {match.teamHeading} {match.matchNumberVenue}
    //                     </div>
    //                     <div>
    //                     {match.battingTeam} {match.battingTeamScore}
    //                     </div>
    //                     <div>
    //                       {match.bowlTeam} {match.bowlTeamScore}
    //                     </div>
    //               </div>
    //           )
    //         })
    //         }
    //       </div>
        
      //)

}

export default App;