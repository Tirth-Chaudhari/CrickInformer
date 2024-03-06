import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../Context/globalcontext";
import { useEffect, useState } from "react";


const Upcoming=()=>
{
    const {UpcomingMatch,getUpcomingMatches}=useGlobalContext();
    const [FilterData,setFilterData]=useState([]);
    useEffect(()=>
    {
        getUpcomingMatches();
    },[])
    useEffect(()=>
    {   
        
        let updatedFilterData = {};

            UpcomingMatch.forEach(match => {
                
                if (updatedFilterData[match[0]]) {
                    updatedFilterData[match[0]].upcoming.push({
                        teamName:match[1],
                        matchNo:match[2],
                        location:match[3],

                    })
                } else {
                    updatedFilterData[match[0]] = 
                    {
                        teamTitle:match[0],
                        upcoming:
                        [{
                        teamName:match[1],
                        matchNo:match[2],
                        location:match[3],}]
                    };
                }
            });
            console.log(updatedFilterData);
            setFilterData(updatedFilterData);
        

    },[UpcomingMatch],[])
    return(
        <div className='w-full lg:w-8/12 xl:w-8/12 mx-auto h-full bg-white-200 shadow-2xl mt-8 bg-gray-100 mb-8'>
         <div className='flex justify-center text-3xl m-6 text-blue-700 text'> <h1>Upcoming Matches</h1></div>
        <div className="m-4">
        {FilterData && Object.keys(FilterData).map((match) => {
            // Access each inning data
            const matchData = FilterData[match];
            
            return (
                <div  className="">
                
                    <table className="table-auto min-w-full divide-y divide-black-200 mb-4">
                                <thead className="bg-blue-400 opacity-70  ">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left  font-medium text-white tracking-wider text-lg">
                                         {match} 
                                    </th>

                                </tr>
                                </thead>
                    </table>
                    {
                        matchData.upcoming.map((data)=>
                        {
                            return(
                            <div className="shadow-lg text-lg border-b border-gray-300 mb-8 flex-col items-center justify-center bg-gray-300 ">
                                <div className="ml-8 mb-2 font-medium">{data.teamName}</div>
                                <div className="ml-8 mb-2 ">{data.matchNo}</div>
                                <div className="ml-8 mb-2 ">{data.location}</div>
                            </div>)
                        })
                    }

                </div>
        )
        })}
    </div>
    </div>
    )
    
}

export default Upcoming;
