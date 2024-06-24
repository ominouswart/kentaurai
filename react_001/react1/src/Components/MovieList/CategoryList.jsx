import React from 'react';

export default function CategoryList({ categories, setRemoveCategory }) {
    return (
        <div>
            {categories.map(category => (
                <div key={category.id} className="category-item">
                    <div>{category.name}</div>
                    <button onClick={() => setRemoveCategory(category)}>Delete</button>
                </div>
            ))}
        </div>
    );
}