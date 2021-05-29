import React from 'react';

export default function LoginPage({email, password, errors, onChange, onLogin, inProgress}) {
    return (
        <form onSubmit={onLogin}>
            <div className="row gtr-uniform">
                <div className="col-12">
                    <div className="row">
                        <div className="col-3 col-0-small"/>
                        <div className="col-6 col-12-small">
                            <input type="email"
                                   name="email"
                                   value={email}
                                   onChange={onChange}
                                   placeholder="Email"/>
                            {errors.email && <span>{errors.email}</span>}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-3 col-0-small"/>
                        <div className="col-6 col-12-small">
                            <input type="password"
                                   name="password"
                                   value={password}
                                   onChange={onChange}
                                   placeholder="Password"/>
                            {errors.password && <span>{errors.password}</span>}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-3 col-0-small"/>
                        <div className="col-6 col-12-small">
                            <ul className="actions">
                                <li>
                                    <input
                                        type="submit"
                                        value={inProgress ? "Logging..." : "Login"}
                                        className="primary"
                                        disabled={inProgress}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}