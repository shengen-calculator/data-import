import React from 'react';

export default function UrlProviderForm({login, password, onChange}) {
    return (
        <React.Fragment>
            <div className="col-6 col-12-xsmall">
                <input type="text"
                       name="login"
                       value={login}
                       placeholder="Логін"
                       onChange={onChange}/>
            </div>
            <div className="col-6 col-12-xsmall">
                <input type="text"
                       name="password"
                       value={password}
                       placeholder="Пароль"
                       onChange={onChange}/>
            </div>
        </React.Fragment>
    );
}