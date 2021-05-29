import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import BaseProviderForm from "./BaseProviderForm";
import EmailProviderForm from "./EmailProviderForm";
import UrlProviderForm from "./UrlProviderForm";
import {connect} from "react-redux";
import {saveProviderRequest, loadProvidersRequest} from "../../redux/actions/providerActions";

function ProviderEditPage({saveProviderRequest, loadProvidersRequest, inProgress, providers}) {

    const {id} = useParams();
    const history = useHistory();
    const [saving, setSaving] = useState(false);
    const [provider, setProvider] = useState({
        name: '',
        internalId: '',
        type: 'email',
        description: '',
        fileName: '',
        email: '',
        url: '',
        loginUrl: '',
        login: '',
        password: ''
    });

    useEffect(() => {
        if (!providers) {
            loadProvidersRequest();
        }
    }, [providers, loadProvidersRequest]);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (saving && !inProgress) {
            history.push('/providers');
        }
    }, [inProgress, saving, history]);

    useEffect(() => {
        if (id && providers) {
            const selected = providers.find(x => x.id === id);
            setProvider({
                id: id.toString(),
                name: selected.name,
                internalId: selected.internalId,
                type: selected.type,
                description: selected.description,
                fileName: selected.fileName,
                email: selected.email,
                url: selected.url,
                loginUrl: selected.loginUrl,
                login: selected.login,
                password: selected.password
            })
        }
    }, [id, providers, setProvider]);

    const goBack = () => {
        history.push('/providers');
    };

    const saveProvider = (event) => {
        event.preventDefault();
        if (!isProviderFormValid()) return;
        setSaving(true);
        saveProviderRequest(provider);
    };

    const isProviderFormValid = () => {
        const {name, internalId} = provider;
        const errors = {};

        if (!name) {
            errors.name = "Це поле обовязкове для заповнення";
        }

        if (!internalId) {
            errors.internalId = "Це поле обовязкове для заповнення";
        }

        setErrors(errors);
        // Form is valid if the errors object still has no properties
        return Object.keys(errors).length === 0;

    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProvider(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <React.Fragment>
            <div id="heading">
                <h1>{id ? provider.name : 'Створити провайдера'}</h1>
            </div>
            <section id="main" className="wrapper">
                <div className="inner">
                    <div className="content">

                        <form onSubmit={saveProvider}>
                            <div className="row gtr-uniform">
                                <BaseProviderForm
                                    isExistingProvider={!!id}
                                    name={provider.name}
                                    internalId={provider.internalId}
                                    type={provider.type}
                                    description={provider.description}
                                    onChange={handleChange}
                                    errors={errors}
                                />
                                {
                                    provider.type === "email" ?
                                        <EmailProviderForm
                                            fileName={provider.fileName}
                                            email={provider.email}
                                            onChange={handleChange}
                                        /> :
                                        <UrlProviderForm
                                            login={provider.login}
                                            password={provider.password}
                                            url={provider.url}
                                            loginUrl={provider.loginUrl}
                                            onChange={handleChange}
                                        />
                                }

                                {providers ? <div className="col-12">
                                    <ul className="actions">
                                        <li><input type="submit" value={inProgress ? "Збереження..." : "Зберегти"}
                                                   className="primary" disabled={inProgress}/></li>
                                        <li><input type="button" value="Відміна" onClick={goBack}/></li>
                                    </ul>
                                </div> : <div className="col-12">Триває завантаження...</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}


function mapStateToProps(state) {
    return {
        providers: state.providers,
        inProgress: state.apiCallsInProgress
    }
}

// noinspection JSUnusedGlobalSymbols
const mapDispatchToProps = {
    saveProviderRequest,
    loadProvidersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderEditPage);