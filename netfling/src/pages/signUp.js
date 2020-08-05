import React from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";

function SignUp() {
    return (
        <form>
        <EmailInput />
        <PasswordInput />
        <FormBtn name="Sign-Up"/>
        </form>
    );
}

export default SignUp;