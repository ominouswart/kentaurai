import { useState, useEffect } from 'react';
import './App.css';
import List from './Components/MovieList/List';
import * as storage from './Functions/ls';
import Create from './Components/MovieList/Create';
import Delete from './Components/MovieList/Delete';
import './Components/MovieList/stil.scss';
import './buttons.scss';
import Edit from './Components/MovieList/Edit';
import CategoryList from './Components/MovieList/CategoryList';
import CreateCategory from './Components/MovieList/CreateCategory';

const MOV = 'movies';
const CAT = 'categories';

function App() {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [refresh, setRefresh] = useState(Date.now());
    const [createMovie, setCreateMovie] = useState(false);
    const [storeMovie, setStoreMovie] = useState(null);
    const [removeMovie, setRemoveMovie] = useState(null);
    const [destroyMovie, setDestroyMovie] = useState(null);
    const [editMovie, setEditMovie] = useState(null);
    const [updateMovie, setUpdateMovie] = useState(null);
    const [createCategory, setCreateCategory] = useState(false);
    const [storeCategory, setStoreCategory] = useState(null);
    const [removeCategory, setRemoveCategory] = useState(null);
    const [editCategory, setEditCategory] = useState()

    useEffect(() => {
        const loadMovies = () => {
            const movieData = storage.lsRead(MOV);
            setMovies(movieData);
        };
        loadMovies();
    }, [refresh]);

    useEffect(() => {
        const loadCategories = () => {
            const categoryData = storage.lsRead(CAT);
            setCategories(categoryData);
        };
        loadCategories();
    }, [refresh]);

    useEffect(() => {
        if (storeMovie !== null) {
            storage.lsCreate(MOV, storeMovie);
            setStoreMovie(null);
            setRefresh(Date.now());
        }
    }, [storeMovie]);

    useEffect(() => {
        if (destroyMovie !== null) {
            storage.lsDelete(MOV, destroyMovie.id);
            setDestroyMovie(null);
            setRefresh(Date.now());
        }
    }, [destroyMovie]);

    useEffect(() => {
        if (updateMovie !== null) {
            storage.lsEdit(MOV, updateMovie, updateMovie.id);
            setUpdateMovie(null);
            setRefresh(Date.now());
        }
    }, [updateMovie]);

    useEffect(_ => {
        if (storeCategory !== null) {
            storage.lsCreate(CAT, storeCategory);
            setStoreCategory(null);
            setRefresh(Date.now());
        }
    }, [storeCategory])

    useEffect(_ => {
        if (removeCategory !== null) {
            storage.lsDelete(CAT, removeCategory.id);
            setRemoveCategory(null);
            setRefresh(Date.now());
        }
    }, [removeCategory])

    const handleAddNewMovie = () => {
        setCreateMovie(true);
    }

    const handleAddNewCategory = _ => {
        setCreateCategory(true);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="header">
                            <button type='button' className='blue' onClick={handleAddNewMovie}>Add new movie</button>
                            <button type='button' className='blue' onClick={handleAddNewCategory}>Add new category</button>
                        </div>
                    </div>
                </div>
                <div className="halfhalf">
                    <div className="row">
                        <List movies={movies} setRemoveMovie={setRemoveMovie} setEditMovie={setEditMovie} />
                    </div>
                    <div className="col-md-4">
                        
                        <CategoryList categories={categories} setRemoveCategory={setRemoveCategory} />
                    </div>
                </div>

            </div>
            {
                createMovie && <Create setCreateMovie={setCreateMovie} setStoreMovie={setStoreMovie} categories={categories}/>
            }
            {
                removeMovie && <Delete setRemoveMovie={setRemoveMovie} removeMovie={removeMovie} setDestroyMovie={setDestroyMovie} />
            }
            {
                editMovie && <Edit editMovie={editMovie} setUpdateMovie={setUpdateMovie} setEditMovie={setEditMovie} />
            }
            {
                createCategory && <CreateCategory setCreateCategory={setCreateCategory} setStoreCategory={setStoreCategory} />
            }
        </>
    );
}

export default App;