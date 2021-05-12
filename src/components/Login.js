import React from 'react';
import "./styles/Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "../firebase";
import {useStateValue} from "../StateProvider";
import {actionTypes} from "../reducer";

const Login = () => {

    const [{}, dispatch] = useStateValue();

    const signIn = () => {
    //    clicked
    //    sign in with popup and provider from firebase config
    auth.signInWithPopup(provider).then(result => {
        dispatch({
            // dispatching the user to the data layer, with action type
            type: actionTypes.SET_USER,
            // and here the user object, from the result.user to access it
            user: result.user,
        })
    }).catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className='login__logo'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
                    alt=''
                />

                <img
                    src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
                    alt=''
                />
            </div>

            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;
