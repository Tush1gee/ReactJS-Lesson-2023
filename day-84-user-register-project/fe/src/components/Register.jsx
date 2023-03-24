import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Register() {
    const ROLE_URL = 'http://localhost:8081/role/list'
    const REGISTER_URL = "http://localhost:8081/role/register"
    const [ roles, setRoles] = useState([])

    useEffect(()=> {
        fetchRoles();
    }, [])
    
    const fetchRoles = async ( ) => {
        const FETCHED_DATA = await fetch(ROLE_URL)
        const FETCHED_JSON = await FETCHED_DATA.json()
        setRoles(FETCHED_JSON.data)
    }


    const handleSubmit =  async (e) => {
        e.preventDefault()
        console.log(e.target)
        
        const dataForm = new FormData(e.target)
        
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataForm),
    };
    const FETCHED_DATA = await fetch(REGISTER_URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    console.log(FETCHED_JSON)
    }


  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Firstname :
            <input name="firstname" type="text"/>
            </label>
          <br />
          <label>
            Lastname:
            <input name="lastname" type="text"/>
          </label>
          <br />
          <label>
            Email:
          <input name="email" type="email"/>
          </label>
          <br/>
          <label>
            Password:
          <input name="password" type="password"/>
          </label>
          <br/>
          <label>
            Phone:
          <input name="phone" type="number"/>
          </label>
          <br/>
          <lable>
            Roles:
            <select name="roles">
                {
                roles && roles.map((role)=> 
                    <option id={role._id}>
                        {role.name}
                    </option>)
                }
            </select>
          </lable>
          <br/>
          <label>
            Address:
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
          <br/>
          <button>Submit</button>
        </form>
    </div>
  )
}
