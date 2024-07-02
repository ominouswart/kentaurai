import { useEffect, useState } from "react";
import axios from "axios";
import { hideId, removeHidden, showHidden } from '../Actions/colorsActions';


const useDelete = (serverUrl, dispatchColors, addMessage) => {

    const [remove, setRemove] = useState(null);
    const [destroy, setDestroy] = useState(null);

    useEffect(_ => {
        if (null === destroy) {
            return;
        }
        dispatchColors(hideId(destroy.id))
        addMessage({ title: 'Colors', type: 'success', text: 'Deleting color...' });
        axios.delete(`${serverUrl}colors/${destroy.id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.success) {
                    dispatchColors(removeHidden());
                    addMessage(res.data.msg);
                } else {
                    dispatchColors(showHidden());
                }
            })
            .catch(error => {
                    console.log(error);
                    dispatchColors(showHidden());
                    addMessage({ title: 'Colors', type: 'error', text: 'Server error' })
                    
                })
}, [destroy, serverUrl, dispatchColors, addMessage]);



return { remove, setRemove, setDestroy }
}

export default useDelete;