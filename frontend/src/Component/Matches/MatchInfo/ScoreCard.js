import { useEffect, useState } from "react";
import { useGlobalContext } from "../../../Context/globalcontext";


const ScoreCard=()=>
{
    const {BatsmanList,BawlerList}=useGlobalContext();
    const [FilterData, setFilterData] = useState({});

useEffect(() => {
    if (BatsmanList || BawlerList) {
        // Clone the FilterData object
        let updatedFilterData = {};

        if (BatsmanList) {
            BatsmanList.forEach(batsman => {
                if(batsman.name && batsman.wicketDetail && batsman.run){
                if (updatedFilterData[batsman.inning]) {
                    updatedFilterData[batsman.inning].batsman.push(batsman);
                } else {
                    updatedFilterData[batsman.inning] = {
                        InningName: batsman.inning,
                        batsman: [batsman],
                        bawler: []
                    };
                }}
            });
        }

        if (BawlerList) {
            BawlerList.forEach(bawler => {
                if (updatedFilterData[bawler.inning]) {
                    updatedFilterData[bawler.inning].bawler.push(bawler);
                } else {
                    updatedFilterData[bawler.inning] = {
                        InningName: bawler.inning,
                        batsman: [],
                        bawler: [bawler]
                    };
                }
            });
        }

        // Update FilterData after processing both BatsmanList and BawlerList
        setFilterData(updatedFilterData);
    }
}, [BatsmanList, BawlerList]);

    
    
    
    
    
    return (
        <div className="m-4">
        {FilterData && Object.keys(FilterData).map((inning) => {
            // Access each inning data
            const inningData = FilterData[inning];
            
            return (
               
               
            
               
                <div key={inning} className="">
                
                    <table className="table-auto min-w-full divide-y divide-black-200">
                                <thead className="bg-black opacity-70 ">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left  font-medium text-white tracking-wider text-lg">
                                         {inningData.InningName} 
                                    </th>

                                </tr>
                                </thead>
                    </table>
                    <table className="table-auto min-w-full divide-y divide-black-200 w-full lg:w-8/12 xl:w-8/12 ">
                        <thead className="bg-black opacity-40 ">
                                <tr className="text-white">
                                        <th>
                                            Batter 
                                        </th>
                                        <th>
                                            WicketDetail
                                        </th>
                                    
                                            <th>
                                                R 
                                            </th>
                                            <th>
                                                B 
                                            </th>
                                            <th>
                                                4s
                                            </th>
                                            <th>
                                                6s
                                            </th>
                                            <th>
                                                SR
                                            </th>

                                </tr>
                                </thead>
                                <tbody>
                                                {inningData.batsman.map((batsman) => (
                                                <tr key={batsman.name} className="md:text-lg">
                                                    <td className="md:px-6 py-4  text-blue-500">
                                                    {batsman.name}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.wicketDetail}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.run}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.ball}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.fours}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.six}
                                                    </td>
                                                    <td className="md:px-6 py-4  text-gray-600">
                                                    {batsman.sr}
                                                    </td>
                                                </tr>
                                                ))}
                                 </tbody>
                     </table>
                     <table className="table-auto min-w-full divide-y divide-black-200">
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
                    
                 
                 
                   
    
                  
                    
                </div>
            );
        })}
        </div>
    
            // Iterate over batsmen in this inning
         

    )
}

export default ScoreCard;