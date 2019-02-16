import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = props => {
    return (
        <LoginForm store={props.store} unsubs={props.unsubs} realtime={props.realtime} snack={props.snack}/>
    );
};

export default Login;