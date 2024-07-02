import { useEffect, useState } from "react";
import axios from "axios";
import { editColor, removeOld, restoreOld } from "../Actions/colorsActions";


const useEdit = (serverUrl, dispatchColors, addMessage) => {

    const [edit, setEdit] = useState(null);
    const [update, setUpdate] = useState(null);

    useEffect(_ => {
        if (null === update) {
            return;
        }
        dispatchColors(editColor(update));
        addMessage({ title: 'Colors', type: 'success', text: 'Editing color...' });
        axios.put(`${serverUrl}colors/${update.id}`, update)
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    dispatchColors(removeOld());
                    addMessage(res.data.msg);
                } else {
                    dispatchColors(restoreOld());
                }
            })
            .catch(error => {
                    console.log(error);
                    dispatchColors(restoreOld());
                    addMessage({ title: 'Colors', type: 'error', text: 'Server error' });
                    
                });
                setUpdate(null);
}, [update, serverUrl, dispatchColors, addMessage]);



return { edit, setEdit, setUpdate }
}

export default useEdit;