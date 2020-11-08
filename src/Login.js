import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';


function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => { 
        // Sign In ..
        auth
        .signInWithPopup(provider)
        .then (result => { 

            dispatch({ 
                type: actionTypes.SET_USER,
                user: result.user,
            });

        })
        .catch(error => alert(error.message));
    } 

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-clipart-download-best-facebook-logo-0.png" alt=""/>
                <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-13.png" alt=""/>
            </div>
            <Button type="submit" onClick={signIn} >
                Sign In

            </Button>
        </div>
    )
}

export default Login;
