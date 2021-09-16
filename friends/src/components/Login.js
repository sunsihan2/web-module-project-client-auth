import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const initialValues={ username:'', password:''}
function Login(){
    const {push}= useHistory()
    const [formValues, setFormValues]= useState(initialValues)
    const handleChanges= e=> {
        setFormValues({...formValues, [e.target.name] : e.target.value})
    }
    const handleSubmit= e=> {
        e.preventDefault()
        axios.post("http://localhost:5000/api/login", formValues)
            .then(res => {
                //console.log(res)
                //set res.data.payload (token) to localStorage
                //route user to the home page (/friends)
                window.localStorage.setItem('token', res.data.payload )
                push("/friends") //redirect
            })
            .catch(err=> {
                console.log(err)
            })

    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"> username</label>
            <input 
                id="username"  
                name="username"
                value={formValues.username} 
                onChange={handleChanges}/>
            <label htmlFor="password" > password</label>
            <input 
                id="password"
                name="password"
                type="password"
                value={formValues.password} 
                onChange={handleChanges}/>
            <button>Login</button>
        </form>
    )
}
export default Login