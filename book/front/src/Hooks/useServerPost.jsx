import { useState } from "react";
import { SERVER_URL } from "../Constants/urls";
import axios from 'axios';

const useServerPost = (url, data) => {

    const [response, setResponse] = useState(null);

    const doAction = _ => {



        axios.post(`${SERVER_URL}${url}`, data)
            .then(res => {
                console.log(res);
                setResponse({
                    type: 'success',
                    data: res.data
                })
            })
            .catch(error => {
                console.log(error);
                setResponse({
                type: 'error',
                data: error
            })
        });

    }


    return { doAction, response };

}


export default useServerPost;