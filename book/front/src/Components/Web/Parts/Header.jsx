import * as l from '../../../Constants/urls';
import Logout from '../../Common/Logout';
import Gate from '../../Common/Gate';


export default function Header() {




    return (
        <header id="header">
            <a href="index.html" className="logo"><strong>Raudonoji</strong> knyga</a>
            <ul className="icons">
                <Gate status='logged'>
                    <li><Logout /></li>
                </Gate>
                <Gate status='not-logged'>
                    <li><a href={l.SITE_LOGIN}><span className="label">Prisijungti</span></a></li>
                    <li><a href={l.SITE_REGISTER}><span className="label">Registruotis</span></a></li>
                </Gate>



                <Gate status='role' role={['admin']}>
                    <li><a href={l.SITE_DASHBOARD}><span className="label">Administravimas</span></a></li>
                </Gate>
            </ul>
        </header>
    )
}