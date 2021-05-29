import React from 'react';

export default function EmailProviderForm({fileName, email, onChange}) {
    return (
        <React.Fragment>


            <div className="col-6 col-12-xsmall">
                <input type="text"
                       name="fileName"
                       value={fileName}
                       placeholder="Назва файлу даних (початкова незмінна частина)"
                       onChange={onChange}/>
            </div>
            <div className="col-6 col-12-xsmall">
                <input type="email"
                       name="email"
                       value={email}
                       placeholder="Email відправника"
                       onChange={onChange}/>
            </div>


        </React.Fragment>
    );
}