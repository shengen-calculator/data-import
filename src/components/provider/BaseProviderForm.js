import React from 'react';

export default function BaseProviderForm({name, internalId, errors, type, description, onChange, isExistingProvider}) {
    return (
        <React.Fragment>
            <div className="col-6 col-12-xsmall">
                <input type="text" name="name"
                       value={name}
                       placeholder="Назва"
                       disabled={isExistingProvider}
                       onChange={onChange}/>
                {errors.name && <span>{errors.name}</span>}
            </div>
            <div className="col-6 col-12-xsmall">
                <input type="text"
                       name="internalId"
                       value={internalId}
                       disabled={isExistingProvider}
                       placeholder="Внутрішній Id"
                       onChange={onChange}/>
                {errors.internalId && <span>{errors.internalId}</span>}
            </div>
            <div className="col-12">
                <textarea name="description"
                          placeholder="Додаткова інформація"
                          value={description}
                          onChange={onChange}
                          rows="6"/>
            </div>

            <div className="col-12">
                <select name="type" value={type} onChange={onChange}>
                    <option value="email">Email</option>
                    <option value="url">Url</option>
                </select>
            </div>



        </React.Fragment>
    );
}