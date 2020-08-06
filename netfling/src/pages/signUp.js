import React from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";

function SignUp() {
    return (
        <form>
        <EmailInput />
        <PasswordInput />
        <FormBtn>SignUp</FormBtn>
        </form>
    );
}

export default SignUp;