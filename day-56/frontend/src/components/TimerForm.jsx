import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function TimerForm({ title, project, id, onFormClose, onFormSubmit, setTimers }) {
    const UPDATE_URL = "http://localhost:8080/data";

    async function sendPutRequest (timerId) {
        handleSubmit(timerId);
    }

    async function handleSubmit(timerId) {
       const FETCHED_DATA = await axios ({
        url: UPDATE_URL,
        method: "PUT",
        data: {
            timerId: timerId
        },
       });
       setTimers({
        timers: FETCHED_DATA.data.data
       })
      }
    

  console.log(id);
  const [timer, setTimer] = useState({
    title: title || "",
    project: project || "",
  });

  const submitText = id ? "Update" : "Create";

  function handleTitleChange(e) {
    setTimer({
      ...timer,
      title: e.target.value,
    });
  }

  function handleProjectChange(e) {
    setTimer({
      ...timer,
      project: e.target.value,
    });
  }

  return (
    <Grid>
      <Card style={{ maxWidth: 345, margin: "0 auto" }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder={timer.title}
                  label={"Title"}
                  value={timer.title}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleTitleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  placeholder={timer.project}
                  label={"Project"}
                  value={timer.project}
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleProjectChange}
                />
              </Grid>

              <Grid item xs={12}>
                <Button color={"success"} variant={"outlined"} onClick={sendPutRequest}>
                     {" "} {submitText}{" "}
                </Button>
                <Button color={"error"} variant={"outlined"} onClick={onFormClose}>
                  Cancel{" "}
                </Button>
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
