import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/globalcontext";





const Batting=()=>
{
    const {Rankings,getRankings}=useGlobalContext();
    const [FilterData,setFilterData]=useState();
    useEffect(()=>
    {
        getRankings();
        console.log("hello team");
        let updatedFilterData = {};
        console.log(Rankings);
        Rankings.forEach(player => {
           if(player[3]=="Teams"){ 
            if (updatedFilterData[player[3]]) {
                updatedFilterData[player[3]].player.push({
                    
                    name:player[0],
                    rating:player[1],
                    points:player[2]    

                })
            } else {
                updatedFilterData[player[3]] = 
                {
                    
                    player:
                    [{
                        name:player[0],
                        rating:player[1],
                        points:player[2]  

                    }]
                };
            }
            }
        });

        setFilterData(updatedFilterData);
    },[])


    return (
        <div className="m-4">
        {FilterData &&
          Object.keys(FilterData).map((player) => {
            // Access each inning data
            const playerData = FilterData[player];
      
            return (
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table-auto min-w-full divide-y divide-black-200 mb-4">
                    <thead className="bg-blue-400 opacity-70">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left font-medium text-white tracking-wider text-lg"
                        >
                          Position
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left font-medium text-white tracking-wider text-lg"
                        >
                          Team
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left font-medium text-white tracking-wider text-lg"
                        >
                          Rating
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left font-medium text-white tracking-wider text-lg"
                        >
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {playerData.player.map((teamplayer, index) => {
                        
                        return (
                          <tr key={index} className="border-b-2 border-gray-300 text-xl ">
                            <td>{index+1}</td>
                            <td className="md:px-4 py-4">
                                {teamplayer.name}
                            </td>
                            <td className="">{teamplayer.rating}</td>
                            <td>{teamplayer.points}</td>
                          </tr>
                          
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
      </div>
      
    
    
    
        )
}

export default Batting;