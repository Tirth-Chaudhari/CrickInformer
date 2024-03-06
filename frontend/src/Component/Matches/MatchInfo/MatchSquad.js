import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Context/globalcontext";


const MatchSquad=()=>
{
    const {MatchSquad}=useGlobalContext();
    const [FilterData, setFilterData] = useState({});
        useEffect(()=>
        {
            let updatedFilterData = {};
                                MatchSquad.forEach(matchsquad => {
                                    if (updatedFilterData[matchsquad.teamName]) {
                                        updatedFilterData[matchsquad.teamName].squad.push(matchsquad);
                                    } else {
                                        updatedFilterData[matchsquad.teamName] = {
                                                teamName:matchsquad.teamName,
                                                squad:[matchsquad]

                                        };
                                    }}

                                  );
            setFilterData(updatedFilterData);
            console.log(MatchSquad);
        },[MatchSquad],[])
    return(
        <div className="m-4">
        {FilterData && Object.keys(FilterData).map((teamName) => {
            // Access each inning data
            const Squad = FilterData[teamName];
            
            return (
               
               
            
               
                <div key={teamName} className="">
                
                    <table className="table-auto min-w-full divide-y divide-black-200">
                                <thead className="bg-blue-400 opacity-70 ">
                                <tr>
                                    <th scope="col" className="flex justify-center  px-6 py-3 text-left  font-medium text-white tracking-wider text-lg">
                                         <div className="m-2 mr-8">{Squad.teamName}</div>
                                         <div><img src={Squad.squad[0].teamImg} alt="Player" /></div>
                                    </th>

                                </tr>
                                </thead>
                    </table>

                     <table className="table-auto min-w-full divide-y divide-black-200 w-full lg:w-8/12 xl:w-8/12 ">

                                <tbody>
                                                {Squad.squad.map((team) => (
                                                <tr  className="  md:text-lg border-b border-gray-300 mb-8">
                                                    <td><img src={team.playerImg} alt="Player" /></td>
                                                    <div className="mb-8"><td>{team.playerRole}</td></div>
                                                    <td>{team.playerName}</td>
                                                </tr>
                                                ))}
                                 </tbody>
                     </table>
                     {/* <table className="table-auto min-w-full divide-y divide-black-200">
                        <thead className="bg-black opacity-40 ">
                                <tr className="text-white">
                                        <th>
                                            Bowler
                                        </th>
                                        <th>
                                            O
                                        </th>
                                    
                                            <th>
                                                M
                                            </th>
                                            <th>
                                                R
                                            </th>
                                            <th>
                                                W
                                            </th>
                                            <th>
                                                NB
                                            </th>
                                            <th>
                                                WD
                                            </th>
                                            <th>
                                                ECO
                                            </th>

                                </tr>
                                </thead>
                                <tbody>
                                                {inningData.bawler.map((bawler) => (
                                                <tr key={bawler.name} className="md:text-lg">
                                                    <td className="md:px-6  py-4  text-blue-500">
                                                    {bawler.name}
                                                    </td>
                                                    <td className="md:px-6 py-4    text-gray-600">
                                                    {bawler.over}
                                                    </td>
                                                    <td className="md:px-6 py-4 text-gray-600">
                                                    {bawler.maiden}
                                                    </td>
                                                    <td className="md:px-6 py-4    text-gray-600">
                                                    {bawler.run}
                                                    </td>
                                                    <td className="md:px-6 py-4    text-gray-600">
                                                    {bawler.wicket}
                                                    </td>
                                                    <td className="md:px-6 py-4    text-gray-600">
                                                    {bawler.noBall}
                                                    </td>
                                                    <td className="md:px-6 py-4    text-gray-600">
                                                    {bawler.wide}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                       {bawler.eco}
                                                    </td>
                                                </tr>
                                                ))}
                                 </tbody>
                     </table>
                     */}
                  
                 
                   
    
                  
                    
                </div>
            );
        })}
        </div>
    
            // Iterate over batsmen in this inning
         

     )
}

export default MatchSquad;