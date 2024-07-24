import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import * as l from '../../../Constants/urls';
import useServerGet from "../../../Hooks/useServerGet";


export default function Layout({children}) {

    const [webContent, setWebContent] = useState(null);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.GET_WEB_CONTENT);

    useEffect(_ => {
        doGet();
    }, [doGet]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        if (serverGetResponse.type === 'success') {
            setWebContent(serverGetResponse.serverData.content.map(c => ({...c, value: JSON.parse(c.value)})));
        }
    }, [serverGetResponse]);

    return (
        <div id="wrapper">

            {/* <!-- Main --> */}
            <div id="main">
                <div className="inner">

                    {/* <!-- Header --> */}
                    <Header webContent={webContent} />

                    {children}

                </div>
            </div>

            <Sidebar webContent={webContent} />

        </div>
    )
}