import { createContext, useCallback, useEffect, useState } from "react";
import Page404 from "../Components/Common/Page404";
import Home from "../Components/Web/Home";
import Web from "../Components/Web/Parts/Layout";
import Register from "../Components/Common/Register";
import Login from "../Components/Common/Login";


const RouterCountext = createContext([]);




const Bebras = _ => {
    return <div>
        <h1>BEBRAS</h1>
        <a href="/#bebras">Bebras</a>
        <a href="/#zebras">Zebras</a>
        <a href="/#">Home</a>
    </div>
}

const Zebras = _ => {
    return <div>
        <h1>ZEBRAS</h1>
        <a href="/#bebras">Bebras</a>
        <a href="/#zebras">Zebras</a>
        <a href="/#">Home</a>
    </div>
}



const Router = _ => {


    const [route, setRoute] = useState('');
    const [params, setParams] = useState([]);

    const handleHashChange = useCallback(_ => {
        const hash = window.location.hash.split('/');
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);
    }, [setRoute, setParams])

    useEffect(_ => {
        const hash = window.location.hash.split('/');
        hash[0] || (hash[0] = '#');
        setRoute(hash.shift());
        setParams(hash);

        window.addEventListener('hashchange', handleHashChange);

        return _ => window.removeEventListener('hashchange', handleHashChange);

    }, [handleHashChange]);

    const routes = [
        { path: '', pc: 0, component: null },
        { path: '#', pc: 0, component: <Web><Home /></Web> },
        { path: '#bebras', pc: 0, component: <Web><Bebras /></Web>},
        { path: '#zebras', pc: 0, component: <Web><Zebras /></Web> },
        { path: '#register', pc: 0, component: <Register />},
        { path: '#login', pc: 0, component: <Login />}
    ];

    const routeComponent = routes.find(r => r.path === route && r.pc === params.length)?.component ?? <Page404 />


    return (
        <RouterCountext.Provider value={params} >
            {routeComponent}
        </RouterCountext.Provider>
    )
}

export {
    RouterCountext, Router
}