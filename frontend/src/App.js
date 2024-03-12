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
import Rankings from "./Component/Rankings/Ranking";
import Bowling from "./Component/Rankings/Bowling";
import AllRounders from "./Component/Rankings/AllRouders";
import Teams from "./Component/Rankings/Teams";
import Batting from "./Component/Rankings/Batting";
import Ranking from "./Component/Rankings/Ranking";
import AllRouders from "./Component/Rankings/AllRouders";
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
             <Route path="rankings" element={<Ranking/>}>  
                    <Route  index  path="batting" element={<Batting/>}/>
                    <Route path="bowling" element={<Bowling />}/>
                    <Route path="all-rounders" element={<AllRouders/>}/>
                    <Route path="teams" element={<Teams/>}/>

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