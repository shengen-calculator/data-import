import React, {useEffect} from 'react';
import banner from "../../images/banner.mp4";
import { Link } from "react-router-dom";
import {connect} from "react-redux";
import {loadProvidersRequest} from "../../redux/actions/providerActions";

function HomePage({providers, inProgress, loadProvidersRequest}) {

    useEffect(() => {
        if(!providers) {
            loadProvidersRequest();
        }
    }, [providers, loadProvidersRequest]);


    return (
        <React.Fragment>
            <section id="banner">
                <div className="inner">
                    <h1>Data import tool</h1>
                </div>
                <video autoPlay loop muted playsInline src={banner}/>
            </section>

            <section className="wrapper">
                <div className="inner">
                    <header className="special">
                    </header>
                    <div className="highlights">
                        <section>
                            <div className="content">
                                <header>
                                    <Link to="/imported" className="icon">15</Link>
                                    <h3>Оброблено файлів</h3>
                                </header>
                                <p>Файли що оброблені та готові до трансферу на прод</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <Link to="/log" className="icon">1</Link>
                                    <h3>Помилки імпорту</h3>
                                </header>
                                <p>Список логів за останні три дні</p>
                            </div>
                        </section>
                        <section>
                            <div className="content">
                                <header>
                                    <Link to="/providers" className="icon">
                                        {providers ?
                                            providers.length :
                                            '...'}
                                    </Link>
                                    <h3>Провайдери</h3>
                                </header>
                                <p>Джерела отримання файлів</p>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section id="cta" className="wrapper">
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);