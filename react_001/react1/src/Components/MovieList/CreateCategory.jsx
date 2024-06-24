import { useState } from 'react';

export default function Create({ setCreateCategory, setStoreCategory }) {

    const [name, setName] = useState('');

    const save = () => {
        setStoreCategory({
            name
        });
        setCreateCategory(false);
    }


    return (
        <div className="modal fade show" style={{display: 'block'}} tabIndex='-1'>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new movie</h5>
                        <button type="button" className="btn-close" onClick={() => setCreateCategory(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="m-2">
                            <label className="form-label">Category name</label>
                            <input type="text" className="form-control" onChange={e => setName(e.target.value)} value={name} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="red" onClick={() => setCreateCategory(false)}>Close</button>
                        <button type="button" className="green" onClick={save}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}