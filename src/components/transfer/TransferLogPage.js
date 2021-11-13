import React from 'react';
import {useHistory} from "react-router-dom";

export default function TransferLogPage() {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    return (
        <React.Fragment>


            <div id="heading">
                <h1>Історія трансферів</h1>
            </div>

            <section id="main" className="wrapper">
                <div className="inner">
                    <div className="content">
                        <div className="col-12">
                            <ul className="actions">
                                <li><input type="button" value="<<" onClick={goBack} className="primary"/></li>
                            </ul>
                        </div>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                <tr>
                                    <th>Дата трансферу</th>
                                    <th>Час трансферу</th>
                                    <th>Кількість файлів</th>
                                    <th>Кількість записів</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>19-02-2021</td>
                                    <td>08:02AM</td>
                                    <td>19</td>
                                    <td>3 400 000</td>
                                </tr>
                                <tr>
                                    <td>18-02-2021</td>
                                    <td>11:10AM</td>
                                    <td>17</td>
                                    <td>2 110 000</td>
                                </tr>
                                <tr>
                                    <td>17-02-2021</td>
                                    <td>06:20PM</td>
                                    <td>22</td>
                                    <td>8 170 000</td>
                                </tr>
                                <tr>
                                    <td>15-02-2021</td>
                                    <td>08:02AM</td>
                                    <td>2</td>
                                    <td>1 400 000</td>
                                </tr>
                                <tr>
                                    <td>15-02-2021</td>
                                    <td>06:10AM</td>
                                    <td>3</td>
                                    <td>2 210 000</td>
                                </tr>
                                <tr>
                                    <td>14-02-2021</td>
                                    <td>06:20PM</td>
                                    <td>1</td>
                                    <td>3 170 000</td>
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