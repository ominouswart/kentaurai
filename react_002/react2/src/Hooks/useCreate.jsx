import { useEffect, useState } from "react";
import axios from 'axios';
import { addColor, replace0Id, remove0Id } from "../Actions/colorsActions";

const useCreate = (serverUrl, dispatchColors) => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);

    useEffect(_ => {
        if (null === store) {
            return;
        }
        dispatchColors(addColor({...store, id: 0}));
        axios.post(`${serverUrl}colors`, store)
        .then(res => {
            console.log(res.data);
            if (res.data.success) {
                dispatchColors(replace0Id(res.data.id));
            } else {
                dispatchColors(remove0Id());
            }
        })
        .catch(error => {
            console.log(error);
            dispatchColors(remove0Id());
        });
        setStore(null);
    }, [store, serverUrl]);



    return { create, setCreate, store, setStore }
}

export default useCreate;