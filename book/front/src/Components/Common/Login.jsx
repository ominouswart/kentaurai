import { useContext, useEffect, useState } from 'react';
import * as l from '../../Constants/urls';
import Input from '../Forms/Input';
import useServerPost from '../../Hooks/useServerPost';
import { LoaderContext } from '../../Contexts/Loader';
import { AuthContext } from '../../Contexts/Auth';
import Gate from './Gate';
import Redirect from './Redirect';

export default function Login() {

    const defaultValues = { email: '', password: '' };

    const { doAction, serverResponse } = useServerPost(l.SERVER_LOGIN);

    const { setShow } = useContext(LoaderContext);

    const [form, setForm] = useState(defaultValues);

    const { addUser, removeUser } = useContext(AuthContext);

    const handleForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    useEffect(_ => {
        if (null === serverResponse) {
            return;
        }
        if (serverResponse.type === 'success') {
            addUser(serverResponse.serverData.user);
            window.location.href = l.SITE_HOME;
        } else {
            removeUser();
        }
    }, [serverResponse, addUser, removeUser]);

    const submit = _ => {
        setShow(true);
        doAction(form);
    }



    return (
        <>
        <Gate status='not-logged'>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <header id="header"><h1>Prisijungti</h1></header>
                        <section>
                            <header className="main">
                                <div className="row aln-center">
                                    <div className="col-6 col-8-large col-10-medium col-12-small">
                                        <form>
                                            <div className="row gtr-uniform">
                                                <div className="col-6 col-12-xsmall">
                                                    <Input onChange={handleForm} value={form.email} type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                                </div>
                                                <div className="col-6 col-12-xsmall">
                                                    <Input onChange={handleForm} value={form.password} type="password" name="password" placeholder="Slaptazodis" autoComplete="new-password" />
                                                </div>
                                                <div className="col-12">
                                                    <ul className="actions">
                                                        <li><input onClick={submit} type="button" value="Prisijungti" className="primary" /></li>
                                                    </ul>
                                                </div>
                                                <ul className="actions">
                                                    <li className="col-12"><a href={'/' + l.SITE_HOME}>Grįžti į pradinį</a></li>
                                                    <li className="col-12"><a href={l.SITE_REGISTER}>Registruotis</a></li>
                                                </ul>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </header>
                        </section>
                    </div>
                </div>
            </div>
        </Gate>
        <Gate status='logged'>
            <Redirect to='SITE_HOME'/>
        </Gate>
        </>
    );
}