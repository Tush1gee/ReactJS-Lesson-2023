import { newTimer } from "./Helpers";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm.jsx";
import React from "react";

class TimersDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timers: []}
    this.URL = "http://localhost:8080/timers"
    this.createTimer = this.createTimer.bind(this)
    this.updateTimer = this.updateTimer.bind(this)
    this.deleteTimer = this.deleteTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  // useEffect(() => {
  //   fetchTimersData();
  // }, []);

  // useEffect(() => {
  //   setInterval(() => setTimers({ timers: projects }), 1000);
  // }, []);

  // fetchTimersData() {
  //   FETCHED_DATA = this.fetch(URL);
  //   FETCHED_JSON = this.FETCHED_DATA.json();
  //   console.log(FETCHED_JSON);
  //   setTimers({ timers: FETCHED_JSON.data });
  // }

  handleCreateFormSubmit(timer) {
    this.createTimer(timer);
  }

  handleEditFormSubmit(attrs) {
    this.updateTimer(attrs);
  }

  handleTrashClick(timerId) {
    this.deleteTimer(timerId);
  }

  handleStartClick(timerId) {
    this.startTimer(timerId);
  }

  handleStopClick(timerId) {
    this.stopTimer(timerId);
  }

  createTimer(timer) {
    newTimer(timer);
    this.setTimers({ timers: this.state.timers.concat(this) });
  }

  startTimer(timerId) {
    const now = Date.now();
    this.setTimers({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          console.log(timer);
          timer.runningSince = now;
          return timer;
        } else {
          return timer;
        }
      }),
    });
  }

  stopTimer(timerId) {
    const now = Date.now();

    this.setTimers({
      timers: this.state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          timer.elapsed = timer.elapsed + lastElapsed;
          timer.runningSince = null;
        }
        return timer;
      }),
    });
  }

  updateTimer(attrs) {
    this.setTimers({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          timer.title = attrs.title;
          timer.project = attrs.project;
        }
        return timer;
      }),
    });
  }

  deleteTimer(timerId) {
    this.setTimers({
      timers: this.state.timers.filter((t) => t.id !== timerId),
    });
  }

  render() {
    return (
      <div>
        <h1>Timers</h1>
        {this.state.timers && (
          <div>
            <EditableTimerList
              timers={this.timers}
              onFormSubmit={this.handleEditFormSubmit}
              onTrashClick={this.handleTrashClick}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
            <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
          </div>
        )}
      </div>
    );
  }
}
export {TimersDashboard}
