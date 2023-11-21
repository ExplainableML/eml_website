---
img: "/publications/deep-graph-persistence.png"
title: Addressing caveats of neural persistence with deep graph persistence
authors: Leander Girrbach, Anders Christensen, Ole Winther, Zeynep Akata, A. Sophia Koepke
publisher: Transactions on Machine Learning Research, TMLR
year: 2023
date: "2023-11-20"
arxiv: https://arxiv.org/abs/2307.10865
github: https://github.com/ExplainableML/Deep-Graph-Persistence
filename: deep-graph-persistence

abstract: Neural Persistence is a prominent measure for quantifying neural network complexity, proposed in the emerging field of topological data analysis in deep learning. In this work, however, we find both theoretically and empirically that the variance of network weights and spatial concentration of large weights are the main factors that impact neural persistence. Whilst this captures useful information for linear classifiers, we find that no relevant spatial structure is present in later layers of deep neural networks, making neural persistence roughly equivalent to the variance of weights. Additionally, the proposed averaging procedure across layers for deep neural networks does not consider interaction between layers. Based on our analysis, we propose an extension of the filtration underlying neural persistence to the whole neural network instead of single layers, which is equivalent to calculating neural persistence on one particular matrix. This yields our deep graph persistence measure, which implicitly incorporates persistent paths through the network and alleviates variance-related issues through standardisation.

---

# Video presentation
<p align="center">
  <a href="https://youtu.be/KfCpoPYK_CY">
    <img src="https://img.youtube.com/vi/KfCpoPYK_CY/0.jpg" alt="IMAGE_ALT">
  </a>
</p>
