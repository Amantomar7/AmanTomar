import React from 'react';
import { useParams } from 'react-router-dom';
import pytorchImage from '../assets/pytorch-dark-background.png';
import Attention from '../assets/images.png';
import attention from '../assets/attention.png';


const postContent = {
    post1: (
        <div className="container my-5 text-start">
            <div className="bg-white p-5 rounded shadow-lg">
                <h1 className="mb-4 fw-bold text-primary">
                    <img
                        src={pytorchImage}
                        alt="Machine Learning"
                        style={{ maxHeight: '100px', maxWidth: '50px' }}
                    />
                    Machine Learning: Introduction to PyTorch</h1>


                <p className="lead text-secondary text-left">
                    Machine Learning workflows typically involve working with data, designing models, optimizing parameters, and saving trained models.
                    This tutorial provides a comprehensive introduction to implementing a complete ML workflow using PyTorch, with references for deeper learning at each step.
                </p>

                <hr className="my-4" />

                <h2 className="mt-4 text-dark">Why PyTorch?</h2>
                <p>
                    PyTorch is a widely used deep learning framework that provides flexibility, ease of debugging, and dynamic computation graphs.
                    One of the key advantages of PyTorch is its seamless integration with GPUs, allowing for highly efficient machine learning computations.
                </p>

                <h2 className="mt-4 text-dark">What Will You Learn?</h2>
                <ul className="list-group mb-4">
                    <li className="list-group-item"> Understanding Tensors and their operations</li>
                    <li className="list-group-item">Building a simple neural network from scratch</li>
                    <li className="list-group-item">Training the model on the MNIST dataset</li>
                    <li className="list-group-item">Optimizing and evaluating the model</li>
                </ul>

                <h2 className="mt-4 text-dark">🛠 Getting Started</h2>
                <p>
                    To get started with PyTorch, ensure you have it installed in your environment. You can install PyTorch using:
                </p>

                <pre className="bg-dark text-white p-3 rounded"><code>pip install torch torchvision torchaudio</code></pre>

                <h2 className="mt-4 text-dark">🧠 Understanding Tensors</h2>
                <p>This is our first topic — let’s dive into what tensors are and how to manipulate them in PyTorch.</p>
            </div>
        </div>



    ),
    post2: (
        <div className="container my-5 text-start">
            <div className="bg-white p-5 rounded shadow-lg">
                <h1 className="mb-3">Introduction to Transformers</h1>
                <img
                    src={Attention}
                    alt="DSA"
                    className="img-fluid rounded mb-3 d-block mx-auto"
                    style={{ maxHeight: '1000px', maxWidth: '200px' }}
                />
                <p className="lead">
                    We will learn this cool Transformer model which is now used in every single LLMs that we see around, And will study what is attention.
                </p>
                <h3> History </h3>
                <p> Introduced in 2017 by Google research, this is remarkably one of the best paper's in the history of Deep Learning, and for research purposes it has got most
                    amount of citations. This Paper introduces new form of attention different from the early ones and it focusses on the computional cost of model, as earlier
                    model like RNNs and LSTMs used in NLP are sequential in nature and computation is also sequential which lead to huge amount of time training and no big advantages
                    of parallelism of GPUs can be taken. This paper takes care of all of this. And In this post we will look into every aspect of it, paper link <a href="https://arxiv.org/abs/1706.03762">here</a>.
                </p>
                <h4> Earlier Models </h4>
                <p>
                    In NLP(Natural Language processing), for a long time for sequences, we are using RNN's and LSTM's which are the varient of RNN's but RNN approach
                    is not much scalable as they are sequential in nature and output of previous time step must feed to the next time steps, and cause of their sequential nature, training very large RNN, is hard
                    and takes a long time, to train, as at that time we are also using attention(which we will discuss later), but this sequuential nature is one of the biggest problem of RNNs, Lstms or GRus. And just because of that
                    we have transformer's a computational effective and can be prallelized and can be run on GPus.
                </p>
                <h4> Attention </h4>
                Let's look at these sentence <br />
                <code> The chicken didn’t cross the road because it was too tired. </code> <br />
                <code> The chicken didn’t cross the road because it was too wide </code> <br />
                In these 2 sentences how model will know that it is talking about chicken in the first sentence and talking about the road in the second sentence,
                Sequential models like RNNs and LStms make a single embeddings at each time step, so that embeddings may forget larger context and may not <b>attend</b> to all the
                context needed to make the inference. <br />
                So that's why introduce attention which gives attention to all tokens in the sentence, not equally as we may want to attend some part of sentences more
                than other, to make the prediciton of the next sentence. <br /> <br />
                This picture demonstrates this well,
                <img
                    src={attention}
                    alt="ABS"
                    className="img-fluid rounded mb-3 d-block mx-auto"
                    style={{ maxHeight: '400px', maxWidth: '600px' }}
                />
                here in the image, we want model to know that it is more related to the chicken than it is to the road, while it makes the prediction, or asked the meaning of the sentence. <br />

                More Formally, <br />

                We give score to all the tokens in the sentences using this a<sub>i</sub> = ∑ (j ≤ i) α<sub>ij</sub> x<sub>j</sub>, here α<sub>ij</sub> is the score that we are giving to the particular token using all the tokens that have came before it, x<sub>j</sub> is the jth token.<br/> <br/>
                

                <h4> Now, let's look at big behemoth, Transformers </h4>




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
