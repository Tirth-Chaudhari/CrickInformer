
import { useEffect } from 'react';
import { useGlobalContext } from '../../Context/globalcontext';
import './matches.css'
import { Link, useNavigate } from 'react-router-dom';
const LiveMatches=()=>
{

    const {getLiveMatch,Matches,SetMatchLink,getLiveTeamInformation} =useGlobalContext();
    
   
    useEffect(()=>
    {
            getLiveMatch();
    },[])
    return (
        <div className='w-full lg:w-8/12 xl:w-8/12 mx-auto h-full bg-white-200 shadow-2xl mt-8 bg-gray-100 mb-8'>
                   <div className='flex justify-center text-3xl m-6 text-blue-700 text'> <h1>Live Score</h1></div>
                <div className='w-full h-full overflow-auto flex justify-around flex-wrap  '>
                           
                           
                            {Matches.map((match,index)=>
                            {
                            return(
                                <div className=" rounded-xl  text-xl shadow-xl border-b-2 bg-white lg:w-5/12 m-6 p-8" >
                                        <div className=' m-2'>
                                            {match.teamHeading} 
                                        </div>
                                        <p className='m-2'>{match.matchNumberVenue}</p>
                                       <div className='mt-4 text-2xl text-black'> 
                                       <div className='m-2'>
                                        <span className='m-4'>{match.battingTeam}</span> {match.battingTeamScore}
                                        </div>
                                        <div className='m-2'>
                                         <span className='m-4'>{match.bowlTeam}</span> {match.bowlTeamScore}
                                        </div>
                                        </div>
                                        <div className='m-2 mt-4 text-blue-500'>{match.liveText ? match.liveText : match.textComplete}</div>
                                        <li onClick={()=>{
                                            getLiveTeamInformation(match.matchId);}}><Link to={`matchinfo`} className="hover:text-gray-300">More info</Link></li>

                                </div>
                    )
                     })
             }
                    
                </div>

                

        
      </div>
    )
}

export default LiveMatches;