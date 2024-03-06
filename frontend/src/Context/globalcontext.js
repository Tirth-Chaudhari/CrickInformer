
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from 'axios'
const GlobalContext=React.createContext();


export const GlobalProvider=({children})=>
{
    const [Matches,setMatch]=useState([]);
    const [TeamInfo,setInfo]=useState([]);
    const [BatsmanList,setBatsmanList]=useState([])
    const [BawlerList,setBawlerList]=useState([]);
    const [MatchSquad,setMatchSquad]=useState([]);
    const [UpcomingMatch,setUpcoming]=useState([]);
    const [HistoryMatch,setHistory]=useState([]);
    const getHistoryMatches=async()=>
    {
        await axios.get(`http://localhost:8081/match/history`).then((response)=>
        {
            if(response){
                   setHistory(response.data);
            }

       })
    }
    const getMatchSquad=async(id)=>
    {
        await axios.get(`http://localhost:8081/match/squad/${id}`).then((response)=>
        {
            if(response){
                    setMatchSquad(response.data);
            }

       })
    }
    const getLiveMatch=async()=>
    {
       await axios.get("http://localhost:8081/match/live").then((response)=>
        {
            if(response){
              setMatch(response.data);
            }

       })
    }
    const getBatsmanList=async(id)=>
    {
        await axios.get(`http://localhost:8081/match/batsman-bawler/getBatsmanList/${id}`).then((response)=>
        {
            if(response){
                    setBatsmanList(response.data);
            }

       })
    }
    const getBawlerList=async(id)=>
    {
        await axios.get(`http://localhost:8081/match/batsman-bawler/getBawlerList/${id}`).then((response)=>
        {
            if(response){
                     setBawlerList(response.data);      
            }

       })
    }
    const getLiveTeamInformation=async(id)=>
    {
        await axios.get(`http://localhost:8081/match/batsman-bawler/live/${id}`).then((response)=>
        {
            if(response){
                 getBatsmanList(id);
                 getBawlerList(id);
                getMatchSquad(id);
            }

       })
    }
    const getUpcomingMatches=async()=>
    {
        await axios.get(`http://localhost:8081/match/upcoming`).then((response)=>
        {
            if(response){
                setUpcoming(response.data);
            }

       })
    }
    // const SetMatchLink=(id)=>
    // {
    //     MatchId.current=link;
    // }
   

    return(
        <GlobalContext.Provider value={{getLiveMatch,Matches,getLiveTeamInformation,TeamInfo,BatsmanList,BawlerList,MatchSquad,
                                        getUpcomingMatches,UpcomingMatch,
                                        getHistoryMatches,HistoryMatch}}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext=()=>
{
    return useContext(GlobalContext);
}

