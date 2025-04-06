import React from 'react';
import { useParams } from 'react-router-dom';
import pytorchImage from '../assets/pytorch-dark-background.png';
import Attention from '../assets/images.png';


const postContent = {
    post1: (
<div className="container mt-4">
    <div className="card shadow-lg p-4">
        <h1 className="mb-3 text-center">Machine Learning: Introduction to PyTorch</h1>
        
        <img
            src={pytorchImage}
            alt="Machine Learning"
            className="img-fluid rounded mb-3 d-block mx-auto"
            style={{ maxHeight: '400px', maxWidth: '200px' }}
        />

        <p className="lead">
            Machine Learning workflows typically involve working with data, designing models, optimizing parameters, and saving trained models. 
            This tutorial provides a comprehensive introduction to implementing a complete ML workflow using PyTorch, 
            with references for deeper learning at each step.
        </p>

        <h2 className="mt-4">Why PyTorch?</h2>
        <p>
            PyTorch is a widely used deep learning framework that provides flexibility, ease of debugging, and dynamic computation graphs.
            One of the key advantages of PyTorch is its seamless integration with GPUs, allowing for highly efficient machine learning computations.
        </p>

        <h2 className="mt-4">What Will You Learn?</h2>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Understanding Tensors and their operations</li>
            <li className="list-group-item">Building a simple neural network from scratch</li>
            <li className="list-group-item">Training the model on the MNIST dataset</li>
            <li className="list-group-item">Optimizing and evaluating the model</li>
        </ul>

        <h2 className="mt-4">Getting Started</h2>
        <p>
            To get started with PyTorch, ensure you have it installed in your environment. You can install PyTorch using:
        </p>
        <pre className="bg-light p-2 rounded">
            <code>pip install torch torchvision torchaudio</code>
        </pre>

        <h2> Understanding Tensors and their operations </h2>
        <p> This is out first topic, that we will discuss!</p>
    </div>
</div>

    ),
    post2: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Introduction to Transformers</h1>
                <img
                    src={Attention}
                    alt="DSA"
                    className="img-fluid rounded mb-3 d-block mx-auto"
                    style={{ maxHeight: '1000px', maxWidth: '200px' }}
                />
                <p className="lead">
                    We will learn this cool Transformer model which is now used in every single LLMs that we see around, And it's fundamental thing which is Attention mechanism.
                </p>
                <p> Introduced in 2017 by Google research, this is remarkably one of the best paper's in the history of Deep Learning, and for research purposes it has got most 
                    amount of citations. This Paper introduces new form of attention different from the early ones and it focusses on the computional cost of model, as earlier 
                    model like RNNs and LSTMs used in NLP are sequential in nature and computation is also sequential which lead to huge amount of time training and no big advantages
                    of parallelism of GPUs can be taken. This paper takes care of all of this. And In this post we will look into every aspect of it, with code in pytorch, if you are not
                    familiar with pytorch go watch the post on <a href="https://amantomar7.github.io/posts/post1">pytorch</a>.
                </p>
                <h4> Transformer Architecture </h4>
                <p> Here we will explore transformers Architecture as proposed in the paper, attention is all you need.
                </p>
            </div>
        </div>
    ),
    post3: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Transformer's from scratch</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Let's build transformers!
                </p>
            </div>
        </div>
    ),
    post4: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Understanding Neural Networks</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Neural Net's
                </p>
            </div>
        </div>
    ),
    post5: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Supervised vs. Unsupervised Learning</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Supervised vs. Unsupervised Learning
                </p>
            </div>
        </div>
    ),
    post6: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Sorting Algorithms Explained</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Sorting Algorithms Explained
                </p>
            </div>
        </div>
    ),
    post7: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Graph Traversal Techniques</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Graph Traversal Techniques
                </p>
            </div>
        </div>
    ),
    post8: (
        <div className="container mt-4">
            <div className="card shadow-lg p-4">
                <h1 className="mb-3">Introduction to GPT Models</h1>
                <img
                    src="/images/react.jpg"
                    alt="React"
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
                <p className="lead">
                    Introduction to GPT Models
                </p>
            </div>
        </div>
    )


};

const PostDetail = () => {
    const { postId } = useParams();
    const post = postContent[postId];

    if (!post) {
        return <h2 className="text-center">Post not found!</h2>;
    }

    return post; // Directly return the JSX structure
};

export default PostDetail;
