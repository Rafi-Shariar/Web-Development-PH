import { useState } from "react"

export default function Batsman(){

    const [runs,setRuns] = useState(0);
    const [single,setSingle] = useState(0);
    const [six,setSix] = useState(0);

    const handleSingles = () =>{
        const updatedRuns = runs + 1;
        const updatedSingle = single + 1;
        setRuns(updatedRuns);
        setSingle(updatedSingle);
    }

    const handleSixes = () =>{
        const updatedRuns = runs + 6;
        const updatedSix = six + 1;
        setRuns(updatedRuns);
        setSix(updatedSix);
    }


    return(
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h4>Score: {runs}</h4>
            <p>Singles: {single} | Sixes: {six}</p>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleSixes}>Six</button>
        </div>
    )
}