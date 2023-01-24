import { Button } from "@mui/material";

export default function TimerActionButton({
  isTimerRunning,
  onStartClick,
  onStopClick,
  handleStart
}) {
  return (
    <div>
      {isTimerRunning ? (
        <Button
          color={"error"}
          fullWidth={true}
          variant={"outlined"}
          onClick={handleStart}
        >
          Stop
        </Button>
      ) : (
        <Button
          color={"success"}
          fullWidth={true}
          variant={"outlined"}
          onClick={onStartClick}
        >
          Start
        </Button>
      )}
    </div>
  );
}
