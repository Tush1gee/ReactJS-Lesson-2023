import React from "react";
import TextField from "@mui/material/TextField";
import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const ROLE_URL = "http://localhost:8080/users/roles";

  const [roles, setRoles] = useState([]);
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    fetchRoles();
  }, []);

  async function fetchRoles() {
    const FETCHED_DATA = await fetch(ROLE_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setRoles(FETCHED_JSON.data);
    console.log(roles);
  }

  function handleSelectChange(e) {
    setCurrentRole(e.target.value);
  }

  const navigate = useNavigate(); // shuud navigate aar register page luu orno
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    
    const data = {
      // data gaa beldsen
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
      role: currentRole,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON.data);

    if (FETCHED_JSON) {
      navigate("/users");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              variant="filled"
              name="firstname"
              size="small"
              defaultValue=""
              label="First name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              variant="filled"
              name="lastname"
              size="small"
              defaultValue=""
              label="Last name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              variant="filled"
              name="email"
              size="small"
              defaultValue=""
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              variant="filled"
              name="password"
              size="small"
              defaultValue=""
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirm-password"
              variant="filled"
              name="confirm-password"
              size="small"
              defaultValue=""
              label="confirm-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              variant="filled"
              name="address"
              size="small"
              defaultValue=""
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <InputLabel>User Roles</InputLabel>
            <Select
              id="role-selector"
              value={currentRole}
              label="Roles"
              onChange={handleSelectChange}
            >
              {roles &&
                roles.map((role, khuslen) => {
                  return (
                    <MenuItem key={khuslen} value={role.id}>
                      {role.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
