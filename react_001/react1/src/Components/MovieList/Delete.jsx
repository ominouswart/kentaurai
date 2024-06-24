import { useEffect } from 'react';

export default function Delete({ setRemoveMovie, removeMovie, setDestroyMovie }) {
    useEffect(() => {
        if (!removeMovie) {
            setRemoveMovie(null);
        }
    }, [removeMovie, setRemoveMovie]);

    const handleDelete = () => {
        setDestroyMovie({ ...removeMovie });
        setRemoveMovie(null);
    };

    if (!removeMovie) return null;

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex='-1'>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete movie</h5>
                        <button type="button" className="btn-close" onClick={() => setRemoveMovie(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            Are you sure you want to delete this movie?
                        </div>
                        <div className="color-line">
                            <div className="content">
                                <div>{removeMovie.title}</div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="white" onClick={() => setRemoveMovie(null)}>Close</button>
                        <button type="button" className="red" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
}