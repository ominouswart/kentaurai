export default function Register() {
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
                                                <input type="text" name="name" placeholder="Vardas" autoComplete="username" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="email" name="email" placeholder="El. paštas" autoComplete="email" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="password" name="psq" placeholder="Slaptazodis" autoComplete="new-password" />
                                            </div>
                                            <div className="col-6 col-12-xsmall">
                                                <input type="password" name="psw2" placeholder="Pakartoti slaptazodi" autoComplete="new-password" />
                                            </div>
                                            <div className="col-12">
                                                <ul className="actions">
                                                    <li><input type="button" value="Registruotis" className="primary" /></li>
                                                </ul>
                                            </div>
                                            <ul className="actions">
                                                <li className="col-12"><a href="/#">Grįžti į pradinį</a></li>
                                                <li className="col-12"><a href="/#">Prisijungti</a></li>
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