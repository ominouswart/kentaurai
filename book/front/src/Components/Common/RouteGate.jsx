import { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth";
import { RouterCountext } from '../../Contexts/Router';

export default function RouteGate({ children, role = [] }) {

    const { user } = useContext(AuthContext);
    const { prevPageLink } = useContext(RouterCountext);

    if (user && role.includes(user.role)) {
        return children;
    } else {
        window.location.hash = prevPageLink[0];
    }
    
    return null;
}