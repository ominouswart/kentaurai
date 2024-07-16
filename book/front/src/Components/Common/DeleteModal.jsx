import { useContext } from "react";
import { ModalsContext } from "../../Contexts/Modals";

export default function DeleteModal() {

    const { deleteModal, setDeleteModal } = useContext(ModalsContext);

    const submit = _ => {
        deleteModal.doDelete(deleteModal.data);
        setDeleteModal(null);
        deleteModal.hideData(deleteModal.data);
    }

    if (null === deleteModal) {
        return;
    }

    return (
        <div className="delete-modal-container">
            <div className="modal">
                <button onClick={_ => setDeleteModal(null)} type="button" className="simple">
                    <span className="icon solid fa-times"></span>
                </button>

                <div className="message-text">
                    <p className="align-center">Ar tikrai norite istrinti {deleteModal.data.name}?</p>
                    </div>

                <ul className="actions special">
                    <li><input onClick={submit} type="button" value='trinti' className="small" /></li>
                    <li><input onClick={_ => setDeleteModal(null)} type="button" value='atsaukti' className="small" /></li>
                </ul>
            </div>
        </div>
    )
}