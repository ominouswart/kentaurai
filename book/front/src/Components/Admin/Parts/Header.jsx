import Logout from '../../Common/Logout';
import * as l from '../../../Constants/urls';


export default function Header() {




    return (
        <header id="header">
            <a href="index.html" className="logo">Administravimas</a>
            <ul className="icons">
                <li><a href={l.SITE_HOME}><span className='label'>Paziureti svetaine</span></a></li>
                    <li><Logout /></li>
                
            </ul>
        </header>
    )
}