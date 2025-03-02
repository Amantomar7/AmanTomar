import React from 'react';
import { Link, useParams } from 'react-router-dom';

const categoryPosts = {
    ml: [
        { id: 'post4', title: 'Understanding Neural Networks' },
        { id: 'post5', title: 'Supervised vs. Unsupervised Learning' },
    ],
    dsa: [
        { id: 'post6', title: 'Sorting Algorithms Explained' },
        { id: 'post7', title: 'Graph Traversal Techniques' },
    ],
    llms: [
        { id: 'post8', title: 'Introduction to GPT Models' },
        { id: 'post9', title: 'Fine-tuning Large Language Models' },
    ],
};

const CategoriesList = () => {
    const { categoryId } = useParams();
    const posts = categoryPosts[categoryId];

    if (!posts) {
        return <h2 className="text-center mt-5">Category not found!</h2>;
    }

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="fw-bold">📄 Topics in {categoryId.toUpperCase()}</h1>
                <p className="text-muted">Click on a topic to read the full post.</p>
            </div>

            <div className="row justify-content-center">
                {posts.map((post) => (
                    <div key={post.id} className="col-md-8">
                        <div className="card mb-3 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/posts/${post.id}`} className="text-decoration-none text-dark fw-bold">
                                        {post.title}
                                    </Link>
                                </h5>
                                <p className="card-text text-muted">Click to read more...</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesList;
