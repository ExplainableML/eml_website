---
img: "/publications/method-pami-owczsl.png"
title: Learning Graph Embeddings for Open World Compositional Zero-Shot Learning
authors: Massimiliano Mancini, Muhammad Ferjad Naeem, Yongqin Xian, Zeynep Akata
publisher: IEEE Transactions on Pattern Analysis and Machine Intelligence, TPAMI
year: 2022
date: "2022-03-28"
filename: learning-graph-embeddings-for-open-world-composition
arxiv: https://arxiv.org/abs/2105.01017v2
abstract: Compositional Zero-Shot learning (CZSL) aims to recognize unseen compositions of state and object visual primitives seen during training. A problem with standard CZSL is the assumption of knowing which unseen compositions will be available at test time. In this work, we overcome this assumption operating on the open world setting, where no limit is imposed on the compositional space at test time, and the search space contains a large number of unseen compositions. To address this problem, we propose a new approach, Compositional Cosine Graph Embeddings (Co-CGE), based on two principles. First, Co-CGE models the dependency between states, objects and their compositions through a graph convolutional neural network. The graph propagates information from seen to unseen concepts, improving their representations. Second, since not all unseen compositions are equally feasible, and less feasible ones may damage the learned representations, Co-CGE estimates a feasibility score for each unseen composition, using the scores as margins in a cosine similarity-based loss and as weights in the adjacency matrix of the graphs. Experiments show that our approach achieves state-of-the-art performances in standard CZSL while outperforming previous methods in the open world scenario.
---
