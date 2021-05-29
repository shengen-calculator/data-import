import React from 'react';

export default function ImportLogPage() {
    return (
        <React.Fragment>


            <div id="heading">
                <h1>Операції імпорту</h1>
            </div>

            <section id="main" className="wrapper">
                <div className="inner">
                    <div className="content">
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                <tr>
                                    <th>Провайдер</th>
                                    <th>Дата імпорту</th>
                                    <th>Час імпорту</th>
                                    <th>Кількість</th>
                                    <th>Статус</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>AVZ</td>
                                    <td>17-02-2021</td>
                                    <td>08:02AM</td>
                                    <td>340 000</td>
                                    <td>Успішно</td>
                                </tr>
                                <tr>
                                    <td>AVZ</td>
                                    <td>14-02-2021</td>
                                    <td>11:10AM</td>
                                    <td>211 000</td>
                                    <td>Успішно</td>
                                </tr>
                                <tr>
                                    <td>VAVILON</td>
                                    <td>11-02-2021</td>
                                    <td>06:20PM</td>
                                    <td>817 000</td>
                                    <td>Помилка</td>
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