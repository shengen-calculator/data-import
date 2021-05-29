import React, {useState, useEffect} from 'react';
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import {authenticationRequest} from "../../redux/actions/authenticationActions";

function LoginPage({inProgress, authenticationRequest, auth}) {

    const history = useHistory();
    const [authentication, setAuthentication] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (auth.error) {
            setAuthentication({
                email: authentication.email,
                password: ''
            });
        } else if(auth.userId) {
            if(history.location.state) {
                history.push(history.location.state.from.pathname);
            } else {
                history.push('/');
            }
        }
    }, [auth.error, auth.userId, history, authentication.email]);

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setAuthentication(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const isFormValid = () => {
        const { email, password } = authentication;
        const errors = {};

        if (!email) {
            errors.email = "Це поле обовязкове для заповнення";
        }

        if (!password) {
            errors.password = "Це поле обовязкове для заповнення";
        }

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;

    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (!isFormValid()) return;
        const { email, password } = authentication;
        authenticationRequest({
            email: email,
            password: password
        });
    };

    return (
        <React.Fragment>
            <div id="heading">
                <h1>Введіть логін та пароль</h1>
            </div>
            <section id="main" className="wrapper">z
                <div className="inner">
                    <div className="content">
                        <LoginForm
                            onChange={handleChange}
                            onLogin={handleLogin}
                            email={authentication.email}
                            password={authentication.password}
                            inProgress={inProgress}
                            errors={errors}
                        />
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {
        auth: state.authentication,
        inProgress: state.apiCallsInProgress
    }
}

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
    authenticationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
