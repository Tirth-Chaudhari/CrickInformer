

import { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context/globalcontext";





const AllRouders=()=>
{
    const {Rankings}=useGlobalContext();
    const [FilterData,setFilterData]=useState();
    useEffect(()=>
    {
        console.log("hello team");
        let updatedFilterData = {};
        Rankings.forEach(player => {
           if(player[4]=="AllRounder"){ 
            if (updatedFilterData[player[4]]) {
                updatedFilterData[player[4]].player.push({
                    img:player[0],
                    name:player[1],
                    team:player[2],
                    rating:player[3]

                })
            } else {
                updatedFilterData[player[4]] = 
                {
                    
                    player:
                    [{
                        img:player[0],
                        name:player[1],
                        team:player[2],
                        rating:player[3]

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
                          Player
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left font-medium text-white tracking-wider text-lg"
                        >
                          Rating
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {playerData.player.map((teamplayer, index) => {
                        return (
                          <tr key={index} className="border-b-2 border-gray-300 ">
                            <td>{index+1}</td>
                            <td>
                              <div className="flex items-center md:px-4 md:py-4 text-xl">
                                <div>
                                  <img
                                    src={teamplayer.img}
                                    alt="Player"
                                    className="h-10 w-10 rounded-full"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="font-semibold">{teamplayer.name}</div>
                                  <div className="text-sm text-gray-600">
                                    {teamplayer.team}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="">{teamplayer.rating}</td>
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

export default AllRouders;