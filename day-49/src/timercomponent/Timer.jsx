import Container from "@mui/material/Container";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
import TimerActionButton from "./TimerActionButton";
import { useState } from "react";
import { renderEllapsedString } from "./Helpers";

export default function Timer({
  title,
  project,
  elapsed,
  runningSince,
  runningTimer,
}) {
  const [timerIsRunning, setTimerRunning] = useState(false);
  const timer = renderEllapsedString(elapsed, runningSince);
  const [startTime, setStartTime] = useState(null)
  const [now, setNow] = useState(null);

  function handleStart() {
    //Start countin
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      // update the curvent time every 10ms
      setNow(Date.now());
    }, 100);
  }

  let secondsPassed = 0;
if(startTime != null && now != null) {
  secondsPassed = (now - startTime) / 1000;
}

  console.log(timer);
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 345, margin: "0 auto", padding: "10px" }}>
        <Typography sx={{ fontSize: 28 }} color="text.secondary">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {project}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          <DeleteIcon />
          <CreateIcon />
        </Box>
        <TimerActionButton
          isTimerRunning={handleStart}
          onStartClick={() => {
            console.log("on start Click");
            setTimerRunning(true);
          }}
          handleStart={handleStart}
          onStopClick={() => {
            console.log("on stop Click !");
            setTimerRunning(false);
          }}
          
        />
      </Card>
    </Container>
  );
}
