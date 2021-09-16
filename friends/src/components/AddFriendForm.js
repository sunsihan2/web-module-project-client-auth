import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue= {
    name:"",
    age:'',
    email:'',
}
function AddFriendForm() {
    const {push}= useHistory()
    const [formValues, setFormValues]= useState(initialValue)
    const handleChanges=e=> {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }
    const handleSubmit= (e )=> {
        e.preventDefault()
        axiosWithAuth()
            .post("/api/friends", formValues)
            .then((res) =>  {
                push("/friends")
            })
            .catch((err) => console.log({err}))
    }
    return (
        <div>
            <h3>add new friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> name</label>
                < input id="name" name="name" value={formValues.name} onChange={handleChanges}/>
                <label htmlFor="age">age</label>
                < input id="age" name="age" value={formValues.age} onChange={handleChanges}/>
                <label htmlFor="email"> email</label>
                < input id="email" name="email" value={formValues.email} onChange={handleChanges}/>
                <button>add friend</button>
            </form>
        </div>
    )
}
export default AddFriendForm