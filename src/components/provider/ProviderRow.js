import React from 'react';
import {Link} from "react-router-dom";

export default function ProviderRow({name, date, quantity, id, isActive}) {
    return (
        <React.Fragment>
            <tr key={id}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{quantity}</td>
                <td>
                    <ul className="icons">
                        <li><Link to={`/provider/${id}`} className="icon fa-edit"><span
                            className="label">Edit</span></Link></li>
                        <li><Link to={`/provider/${id}/log`} className="icon fa-history"><span
                            className="label">Logs</span></Link></li>
                        <li><a href="#" className="icon fa-rocket"><span
                            className="label">Run import</span></a></li>
                    </ul>
                </td>
                <td>
                    <input type="checkbox" id={`${id}-checkbox`} name="checkbox" checked={isActive} disabled={true}/>
                    <label htmlFor={`${id}-checkbox`}/>
                </td>
            </tr>
        </React.Fragment>
    );
}