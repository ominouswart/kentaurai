import React from 'react';

export default function CategoryList({ categories, setRemoveCategory, setEditCategory }) {
    return (
        <div>
            {categories.map(category => (
                <div key={category.id} className="category-item">
                    <div style={{fontSize: '25px'}}><b>{category.name}</b></div>
                    <button onClick={_ => setEditCategory(category)} className='green' style={{width: '5px', height: '7px'}}>🛠</button>
                    <button onClick={_ => setRemoveCategory(category)} className='red' style={{width: '5px', height: '7px'}}>❌</button>
                </div>
            ))}
        </div>
    );
}