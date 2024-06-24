export default function List({movies, setEditMovie, setRemoveMovie}) {


    if (null === movies) {
        return (
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Loading...</li>
            </ul>
        )
    }

    // const handleRemoveMovie = _ => {
    //     setRemoveMovie(true);
    // }

    return (
        <ul className="list-group list-group-flush">
            {
                movies.map(m => <li key={m.id} className="list-group-item">
                    <div className="color-line">
                        <div className="content">
                            <div className="title"><b>Title: </b>{m.title ?? 'no title'}</div>
                            <div className="year"><b>Year: </b>{m.year}</div>
                            <div className="categId"><b>Category: </b>{m.categId}</div>
                            <div className="rating"><b>Rating: </b>{m.rating}</div>
                        </div>
                        <div className="buttons">
                            <button type="button" className="green" onClick={_ => setEditMovie(m)}>Edit</button>
                            <button type="button" className="red" onClick={_ => setRemoveMovie(m)}>Delete</button>
                        </div>
                    </div>
                </li>)
            }

        </ul>
    )
}