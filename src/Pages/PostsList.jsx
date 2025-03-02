import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    { id: 'post1', title: 'Machine Learning Intro to Pytorch!' },
    { id: 'post2', title: 'What are Transformers?' },
    { id: 'post3', title: 'Writing Transformers From Scratch in pytorch!' },
];

const PostsList = () => {
    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h1 className="fw-bold">📚 All Posts</h1>
                <p className="text-muted">Explore articles on Machine Learning, DSA, React, and more!</p>
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

export default PostsList;
