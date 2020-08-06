import React from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";
import axios from "axios"

function Login() {

    function sendData(event){
        event.preventDefault()
        console.log("sendData()")
        axios.post("/api/login", {isData: true}).then(
            response=>console.log(response)
        )
    }

    return (
        <form>
        <EmailInput />
        <PasswordInput />
        <FormBtn onClick={sendData} name="Login"/>
        </form>
    );
}

export default Login;