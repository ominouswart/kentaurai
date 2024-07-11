import { useRef, useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

export default function Sidebar() {

    const sidebar = useRef();

    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = _ => {
        setShowSidebar(b => !b);
    }

    return (
        <div id="sidebar" ref={sidebar} className={showSidebar ? null : 'inactive'}>
        <div className="inner">

        
            <Menu />

    
            <Footer />

        </div>
        <span className="toggle" style={{cursor: "pointer"}}onClick={toggleSidebar}>Toggle</span>
    </div>
    );
}