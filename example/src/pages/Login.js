import React, { useContext, useState } from 'react';
import Input from '../components/Input';
import { authContext } from '../context/authContext';
import { navContext } from '../context/navContext';
import useInput from '../hooks/useInput'
import classes from './Login.module.css'
import {IconLogin} from "@tabler/icons"


const Login = () => {
    const usernameValidator = useInput((inputVal) => inputVal.trim() != "");
    const passwordValidator = useInput((inputVal) => inputVal.trim().length > 6);

    const [isLogin, setIsLogin] = useState(true)

    const authCtx = useContext(authContext);
    const navCtx = useContext(navContext);

    const submiFormHandler = (e) => {
        e.preventDefault();

        if (!usernameValidator.isInputValid) return usernameValidator.inputBlurHandler();
        if (!passwordValidator.isInputValid) return passwordValidator.inputBlurHandler();

        const body = {
            email: usernameValidator.inputValue,
            password: passwordValidator.inputValue,
        }

        usernameValidator.reset();
        passwordValidator.reset();

        if (isLogin){
            authCtx.login({ token: 'dummyToken', expiresIn: 24 }, () => {
                navCtx.navigate('/')
            })
        }
        else {
            setIsLogin(true);
        }
        

        console.log(body)
    }

    return (
        <>
            <form className={classes.Form} onSubmit={submiFormHandler}>
                <h1>{isLogin ? 'Login' : 'Register'}</h1>
                <Input
                    label="Username"
                    id="username"
                    placeholder="Enter your username"
                    onChange={usernameValidator.valueChangeHandler}
                    value={usernameValidator.inputValue}
                    onBlur={usernameValidator.inputBlurHandler}
                    error={usernameValidator.hasError}
                    errorMessage="Enter a valid username"
                />
                <Input
                    label="Password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={passwordValidator.valueChangeHandler}
                    value={passwordValidator.inputValue}
                    onBlur={passwordValidator.inputBlurHandler}
                    error={passwordValidator.hasError}
                    errorMessage="Enter a valid password"
                />
                <button type="submit"><IconLogin />{isLogin ? 'Login' : 'Register'}</button>
                <p className={classes.MainText}>{isLogin ? 'Dont Have An Account?' : 'Already Have An Account?'}</p>
                <p className={classes.SubText} onClick={() => { setIsLogin(curr => !curr) }}>{isLogin ? 'Register' : 'Login'}</p>
            </form>
        </>
    );
};

export default Login;
