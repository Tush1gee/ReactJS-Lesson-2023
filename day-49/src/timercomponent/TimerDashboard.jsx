import { useEffect, useState } from "react";
import TimerData from "./Data/TimerData";
import EditTableTimerList from "./EditTableTimerList";

export default function TimerDashboard() {
  const [timers, setTimers] = useState({ timers: [] });

  useEffect(() => {
    //use effect ashiglan timers datag oruulj irsen.
    setInterval(() => setTimers({ timers: TimerData }), 1000);
  }, []);

  function handleStartClick(timerId) {
    startTimer(timerId);
  }

  function startTimer(timerId) {
    const now = Date.now();

    setTimers({
      timer: timers.timers.map((timer) => {
        if (timer.id === timerId) {
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  function handleTrashClick(timerId) {
    deleteTimer(timerId);
  }

  function deleteTimer(timerId) {
    setTimers({
      timers: timers.timers.filter((t) => t.id !== timerId),
    });
  }

  return (
    <div>
      <h1>Timers dashboard</h1>
      {timers.timers && (
        <div>
          <EditTableTimerList
            timers={timers.timers}
            onTrashClick={handleTrashClick}
            onStartClick={handleStartClick}
          />
        </div>
      )}
    </div>
  );
}
