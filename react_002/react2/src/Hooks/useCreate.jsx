import { useEffect, useState } from "react";
import axios from 'axios';
import { addColor, replace0Id, remove0Id } from "../Actions/colorsActions";

const useCreate = (serverUrl, dispatchColors, addMessage) => {

    const [create, setCreate] = useState(null);
    const [store, setStore] = useState(null);

    useEffect(_ => {
        if (null === store) {
            return;
        }
        dispatchColors(addColor({...store, id: 0}));
        addMessage({ title: 'Colors', type: 'info', text: 'Sending new color...'});
        axios.post(`${serverUrl}colors`, store)
        .then(res => {
            console.log(res.data);
            if (res.data.success) {
                dispatchColors(replace0Id(res.data.id));
                addMessage(res.data.msg);
            } else {
                dispatchColors(remove0Id());
            }
        })
        .catch(error => {
            console.log(error);
            dispatchColors(remove0Id());
            addMessage({ title: 'Colors', type: 'error', text: 'Server error'});
        });
        setStore(null);
    }, [store, serverUrl, addMessage, dispatchColors]);



    return { create, setCreate, store, setStore }
}

export default useCreate;