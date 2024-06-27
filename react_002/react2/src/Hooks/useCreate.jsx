import { useEffect, useState } from "react";
import axios from 'axios';

const useCreate = serverUrl => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);

    useEffect(_ => {
        if (null === store) {
            return;
        }
        axios.post(`${serverUrl}colors`, store)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
        setStore(null);
    }, [store, serverUrl]);



    return { create, setCreate, store, setStore }
}

export default useCreate;