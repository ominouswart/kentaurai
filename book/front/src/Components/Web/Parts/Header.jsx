import * as l from '../../../Constants/urls';

export default function Header() {

    return (
        <header id="header">
            <a href="index.html" className="logo"><strong>Raudonoji</strong> knyga</a>
            <ul className="icons">
                <li><a href={l.SITE_LOGIN}><span className="label">Prisijungti</span></a></li>
                <li><a href={l.SITE_REGISTER}><span className="label">Registruotis</span></a></li>
            </ul>
        </header>
    )
}