import * as l from '../../../Constants/urls';

export default function Menu() {

    return (
        <nav id="menu">
                <header className="major">
                    <h2>Menu</h2>
                </header>
                <ul>
                    <li><a href={'/' + l.SITE_DASHBOARD}>Lenta</a></li>
                    <li><a href={'/' + l.USERS_LIST}>Vartotojai</a></li>
                    <li><a href={'/' + l.EDIT_CONTACTS}>Kontaktu Redagavimas</a></li>
                </ul>
            </nav>
    );
}