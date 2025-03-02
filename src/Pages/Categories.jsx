import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { id: 'ml', title: 'Machine Learning' },
    { id: 'dsa', title: 'Data Structures & Algorithms' },
    { id: 'llms', title: 'Large Language Models' },
];

const Categories = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="fw-bold">📂 Categories</h1>
                <p className="text-muted">Select a category to explore related posts.</p>
            </div>

            <div className="row justify-content-center">
                {categories.map((category) => (
                    <div key={category.id} className="col-md-6">
                        <div className="card mb-3 shadow-sm">
                            <div className="card-body text-center">
                                <h5 className="card-title">
                                    <Link to={`/categories/${category.id}`} className="text-decoration-none text-dark fw-bold">
                                        {category.title}
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
