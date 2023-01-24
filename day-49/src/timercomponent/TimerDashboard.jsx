import { useEffect, useState } from "react";
import TimerData from "./Data/TimerData"
import Timer from "./Timer"
import TimerForm from "./TimerForm";


export default function TimerDashboard() {
const [timers, setTimers] = useState([]);
const [runningTime, setRunningTime] = useState(0);


useEffect(()=> { //use effect ashiglan timers datag oruulj irsen.
    setTimers(TimerData)
}, [timers]);


    return (
        <div>
            {TimerData && 
            TimerData.map((data, index)=> {
                return (
                    <Timer 
                    key={index}
                    title={data.title}
                    project={data.project}
                    elapsed={data.elapsed}
                    runningSince={data.runningSince}
                    runningTime={runningTime}
                    />
                )
            })}
            <TimerForm title={"Title"} project={"Project"}/>
        </div>
    )
}