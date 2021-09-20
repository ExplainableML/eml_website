---
img: "/publications/generative-discriminative.png"
title: Combining Generative and Discriminative Models for Hybrid Inference
authors: Victor Garcia Satorras, Zeynep Akata, Max Welling
publisher: Neural Information Processing Systems, NeurIPS (Spotlight)
year: 2019
date: "2019-06-06"
arxiv: https://arxiv.org/abs/1906.02547
filename: combining-generative-and-discriminative-models-for-hybrid-inference

abstract: A graphical model is a structured representation of the data generating process. The traditional method to reason over random variables is to perform inference in this graphical model. However, in many cases the generating process is only a poor approximation of the much more complex true data generating process, leading to suboptimal estimation. The subtleties of the generative process are however captured in the data itself and we can `learn to infer', that is, learn a direct mapping from observations to explanatory latent variables. In this work we propose a hybrid model that combines graphical inference with a learned inverse model, which we structure as in a graph neural network, while the iterative algorithm as a whole is formulated as a recurrent neural network. By using cross-validation we can automatically balance the amount of work performed by graphical inference versus learned inference. We apply our ideas to the Kalman filter, a Gaussian hidden Markov model for time sequences, and show, among other things, that our model can estimate the trajectory of a noisy chaotic Lorenz Attractor much more accurately than either the learned or graphical inference run in isolation.
---

