import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import ProviderRow from "./ProviderRow";
import {loadProvidersRequest} from "../../redux/actions/providerActions";
import {connect} from "react-redux";

function ProviderListPage({providers, loadProvidersRequest}) {
    const history = useHistory();

    useEffect(() => {
        if(!providers) {
            loadProvidersRequest();
        }
    }, [providers, loadProvidersRequest]);

    const handleNewVendor = (event) => {
        event.preventDefault();
        history.push('/provider');
    };
    return (
        <React.Fragment>


            <div id="heading">
                <h1>Список провайдерів</h1>
            </div>

            <section id="main" className="wrapper">
                <div className="inner">
                    <div className="content">
                        <div className="col-12">
                            <ul className="actions">
                                <form onSubmit={handleNewVendor}>
                                    <li><input type="submit" value="Створити Нового" className="primary"/></li>
                                </form>
                            </ul>
                        </div>
                        <div className="table-wrapper">
                            {providers ? <table>
                                <thead>
                                <tr>
                                    <th>Назва</th>
                                    <th>Дата імпорту</th>
                                    <th>Кількість</th>
                                    <th></th>
                                    <th>Активний</th>
                                </tr>
                                </thead>
                                <tbody>

                                {
                                    providers.map(x =>
                                        <ProviderRow
                                            key={x.id}
                                            name={x.name}
                                            quantity={x.quantity}
                                            date={x.date}
                                            isActive={x.isActive}
                                            id={x.id}
                                        />
                                    )
                                }

                                </tbody>
                            </table> : 'Зачекайте хвилину. Триває завантаження...'}
                        </div>
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
    loadProvidersRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderListPage);