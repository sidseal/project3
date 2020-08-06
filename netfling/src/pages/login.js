import React from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";

function Login() {
    return (
        <form>
        <EmailInput />
        <PasswordInput />
        <FormBtn>Login</FormBtn>
        </form>
    );
}

export default Login;