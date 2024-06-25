import { useState } from 'react';

export default function Create({ setStoreMovie, setCreateMovie, categories }) {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState(2024);
    const [categId, setCategId] = useState('');
    const [rating, setRating] = useState(1);

    const save = () => {
        setStoreMovie({
            title,
            year,
            categId,
            rating
        });
        setCreateMovie(false);
    }


    return (
        <div className="modal fade show" style={{display: 'block'}} tabIndex='-1'>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add new movie</h5>
                        <button type="button" className="btn-close" onClick={() => setCreateMovie(false)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="m-2">
                            <label className="form-label">Movie title</label>
                            <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                        </div>
                        <div className="m-2">
                            <label className="form-label">Year</label>
                            <input type="number" className="form-control" onChange={e => setYear(e.target.value)} value={year} />
                        </div>
                        <div className="m-2">
                            <label className="form-label">Category</label>
                            <select className="form-control" onChange={e => setCategId(e.target.value)} value={categId}>
                                <option value="">Select category</option>
                                {categories.map(category => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="m-2">
                            <label className="form-label flex-space"><span>Rating</span> <b>{rating}</b></label>
                            <input type="range" className="form-range" min={1} max={10} step={1} value={rating} onChange={e => setRating(+e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="red" onClick={() => setCreateMovie(false)}>Close</button>
                        <button type="button" className="green" onClick={save}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}