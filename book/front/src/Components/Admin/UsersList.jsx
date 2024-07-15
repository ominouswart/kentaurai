import useServerGet from "../../Hooks/useServerGet";
import * as l from '../../Constants/urls';
import { useEffect, useState } from "react";

export default function UsersList() {

    const { doAction, serverResponse } = useServerGet(l.SERVER_GET_USERS);

    const [users, setUsers] = useState(null);

    useEffect(_ => {
        doAction();
    }, [doAction]);

    useEffect(_ => {
        if (null === serverResponse) {
            return;
        }
        setUsers(serverResponse.serverData.users ?? null);
    }, [serverResponse]);

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Vartotoju sarasas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    users === null && <h2>Palaukite, siunciame vartotoju sarasa...</h2>
                }
                {
                    users !== null && <div className="table-wrapper">
                        <table className="alt">
                            <thead>
                                <tr>
                                    <th>Vardas</th>
                                    <th>El. pastas</th>
                                    <th>Role</th>
                                    <th>Veiksmai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(u => 
                                    <tr key={u.id}>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.role}</td>
                                        <td className="two">
                                            <ul className="actions special">
                                                <li><input type="button" value='Istrinti' className="small" /></li>
                                                <li><input type="button" value='Redaguoti' className="small" /></li>
                                            </ul>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>Viso vartotoju skaicius: {users.length}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                }
            </section>
        </>
    );
}