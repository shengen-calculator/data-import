import React from 'react';
import { useHistory } from "react-router-dom";
import toastr from "toastr";

export default function ReadyToTransferPage() {
    const history = useHistory();
    const handleStartTransfer = (event) => {
        event.preventDefault();
        toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')

    };
    const handleTransferLogClick = (event) => {
        event.preventDefault();
        history.push('/transfers');
    };

    const goBack = () => {
        history.goBack();
    };

    return (
        <React.Fragment>


            <div id="heading">
                <h1>Готові до трансферу</h1>
            </div>

            <section id="main" className="wrapper">
                <div className="inner">
                    <div className="content">
                        <form onSubmit={handleStartTransfer}>
                            <div className="col-12">
                                <ul className="actions">
                                    <li><input type="button" value="<< Go Back" onClick={goBack} className="primary"/></li>
                                    <li><input type="submit" value="Start Transfer" className="primary"/></li>
                                    <li><input type="button" value="Transfer Log" onClick={handleTransferLogClick}/></li>
                                </ul>
                            </div>
                        </form>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                <tr>
                                    <th>Назва</th>
                                    <th>Кількість</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>AVZ</td>
                                    <td>400 000</td>
                                </tr>
                                <tr>
                                    <td>Elit</td>
                                    <td>110 000</td>
                                </tr>
                                <tr>
                                    <td>Exist</td>
                                    <td>1 170 000</td>
                                </tr>
                                <tr>
                                    <td>Vavilon</td>
                                    <td>1 400 000</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    );
}