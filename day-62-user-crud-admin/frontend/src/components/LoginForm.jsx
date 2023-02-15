import { Button, TextField } from "@mui/material";
import React from "react";
import {ToastContainer, toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

export default function LoginForm() {
    const URL = "http://localhost:8080/login"

    const navigate = useNavigate()

    async function handleSubmit (e) {
        e.preventDefault()
        const data = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const FETCHED_DATA = await fetch(URL, options)
        const FETCHED_JSON = await FETCHED_DATA.json()

        if(FETCHED_JSON.status === "success") {
            toast("Хэрэглэгч амжилттай нэвтэрлээ 🟢");
            navigate("/users");
        } else {
            toast(FETCHED_JSON.status);
        }

        console.log(FETCHED_JSON);
    }

  return (
    <div>
        <h1>Login Form Page</h1>
        <form onSubmit={handleSubmit}>
            <TextField id="email" variant="filled" name="email" size="small" label="email" type="email"/>
            
            <br/>
            <TextField id="password" variant="filled" name="password" size="small" label="password" type="password"/>
            <br/>
            <Button type="submit" variant="outlined">Submit</Button>
        </form>
        <ToastContainer/>
    </div>
  )
}
