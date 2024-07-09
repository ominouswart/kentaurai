import { useEffect, useState } from "react";
import useServerPost from "../../Hooks/useServerPost";
import * as l from "../../Constants/urls";

export default function Register() {

    const defaultValues = { name: '', email: '', psw: '', psw2: '' }

    const { doAction, response } = useServerPost(l.SERVER_REGISTER);

    const [form, setForm] = useState(defaultValues);
    const [buttonDisabled, setButtonDisabled] = useState(false);

    useEffect(_ => {
        if (null === response) {
            return;
        }
        setButtonDisabled(false);
        if (response.type === 'success') {
            window.location.hash = l.REDIRECT_AFTER_REGISTER;
        }

        

    }, [response]);

    const handleForm = e => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    }

    const handleSubmit = _ => {

        // TODO validation
        setButtonDisabled(true);
        doAction({
            name: form.name,
            email: form.email,
            password: form.psw
        })
    }



    return (
        <div id="wrapper">
            <div id="main">
                <div className="inner">
                    <header id="header"><h1>Registruotis</h1></header>
                    <section>
                        <header className="main">
                            <div className="row aln-center">
                                <div className="col-6 col-8-large col-10-medium col-12-small">
                                    <form>
                                        <div className="row gtr-uniform">
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.name} type="text" name="name" placeholder="Vardas" autoComplete="username" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.email} type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.psw} type="password" name="psq" placeholder="Slaptazodis" autoComplete="new-password" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input onChange={handleForm} value={form.psw2} type="password" name="psw2" placeholder="Pakartoti slaptazodi" autoComplete="new-password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input disabled={buttonDisabled} onClick={handleSubmit} type="button" value="Registruotis" className="primary" /></li>
                                                </ul>
                                            </div>
                                            <ul className="actions">
                                                <li className="col-12"><a href={'/' + l.SITE_HOME}>Grįžti į pradinį</a></li>
                                                <li className="col-12"><a href={l.SITE_LOGIN}>Prisijungti</a></li>
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
    );
}