import React, { useRef } from "react";
import { EmailInput, PasswordInput, FormBtn } from "../components/Form";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_USER} from "../../utils/actions";
// import API from "../../utils/API";

function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [state, dispatch] = useStoreContext();

    return (
        <form>
        <EmailInput />
        <PasswordInput />
        <FormBtn name="Sign-Up"/>
        </form>
    );
}

export default SignUp;