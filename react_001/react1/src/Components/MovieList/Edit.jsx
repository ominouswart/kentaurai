import { useState } from 'react';
 
export default function Edit({editMovie, setUpdateMovie, setEditMovie, categories}) {
 
 
    const [title, setTitle] = useState(editMovie.title);
    const [year, setYear] = useState(editMovie.year);
    const [categId, setCategId] = useState(editMovie.categId);
    const [rating, setRating] = useState(editMovie.rating);

    const save = () => {
        setUpdateMovie({
            ...editMovie,
            title,
            year,
            categId,
            rating
        });
        setEditMovie(false);
    }

 
    return (
 
        <div className="modal fade show" style={{display: 'block'}} tabIndex='-1'>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit movie</h5>
                        <button type="button" className="btn-close" onClick={() => setEditMovie(false)}></button>
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
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="m-2">
                            <label className="form-label flex-space"><span>Rating</span> <b>{rating}</b></label>
                            <input type="range" className="form-range" min={1} max={10} step={1} value={rating} onChange={e => setRating(+e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="green" onClick={save}>Save</button>
                        <button type="button" className="red" onClick={_ => setEditMovie(null)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}