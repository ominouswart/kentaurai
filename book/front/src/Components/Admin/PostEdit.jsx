import { useContext, useEffect, useState, useRef } from "react"
import { RouterCountext } from "../../Contexts/Router"
import useServerGet from "../../Hooks/useServerGet";
import * as l from '../../Constants/urls';
import Input from "../Forms/Input";
import useServerPut from "../../Hooks/useServerPut";
import { LoaderContext } from "../../Contexts/Loader";
import TextArea from "../Forms/TextArea";

export default function PostEdit() {

    const { params } = useContext(RouterCountext);
    const { doAction: doGet, serverResponse: serverGetResponse } = useServerGet(l.SERVER_EDIT_POST);
    const { doAction: doPut, serverResponse: serverPutResponse } = useServerPut(l.SERVER_UPDATE_POST);
    const [post, setPost] = useState(null);
    const { setShow } = useContext(LoaderContext);
    const [imageName, setImageName] = useState('No image');

    useEffect(_ => {
        doGet('/' + params[1]);
    }, [doGet, params]);

    useEffect(_ => {
        if (null === serverGetResponse) {
            return;
        }
        setPost(serverGetResponse.serverData.posts ?? null);
    }, [serverGetResponse]);

    useEffect(_ => {
        if (null === serverPutResponse) {
            return;
        }
        if ('success' === serverPutResponse.type) {
            window.location.hash = l.USERS_LIST;
        }
    }, [serverPutResponse]);

    const handleForm = e => {
        setPost(p => ({ ...p, [e.target.name]: e.target.value }));
    }

    const imageInput = useRef();

    const imageReader = img => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = _ => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleImage = e => {
        imageReader(e.target.files[0])
            .then(res => {
                setPost(p => ({ ...p, photo: res }));
                setImageName(imageInput.current.value.replace('C:\\fakepath\\', ''));
            })
            .catch(_ => {
                setPost(p => ({ ...p, photo: null }));
                setImageName('No image');
            })
    }

    const clearImage = _ => {
        imageInput.current.value = null;
        setPost(p => ({ ...p, photo: null }));
        setImageName('No image');
    }

    const submit = _ => {
        // TODO: validations
        setShow(true);
        doPut(post);
    }

    return (
        <>
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Straipsnio redagavimas</h1>
                    </header>
                </div>
            </section>
            <section>
                {
                    null === post && <h3>Uzkraunama...</h3>
                }
                {
                    null !== post && <div className="row aln-center">
                        <div className="col-4 col-8-large col-10-medium col-12-small">
                            <form>
                                <div className="row gtr-uniform">
                                    <div className="col-12">
                                        <Input onChange={handleForm} value={post.title} type="text" name="title" />
                                    </div>
                                    <div className="col-12">
                                        <TextArea onChange={handleForm} value={post.preview} type="text" name="preview" />
                                    </div>
                                    <div className="col-12">
                                        <TextArea onChange={handleForm} value={post.content} type="text" name="content" />
                                    </div>
                                    <div className="col-12">
                                        <input type="file" id="F" ref={imageInput} onChange={handleImage} />
                                    </div>

                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input onClick={submit} type='button' className='primary' value='Issaugoti'></input></li>
                                            <li><a className='button' href={'/' + l.LIST_POSTS}>Visi straipsniai</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </section>
        </>
    )
}