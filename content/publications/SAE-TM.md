---
img: "/publications/SAE_TM/modelfigure.jpg"
title: "Sparse Autoencoders are Topic Models"
authors: Leander Girrbach, Zeynep Akata
publisher: International Conference on Machine Learning, ICML
year: 2026
month: 07
day: 07
date: "2026-07-07"
filename: SAE-TM
arxiv: https://arxiv.org/abs/2511.16309
github: https://github.com/ExplainableML/SAE-TM
abstract: >
    Sparse autoencoders (SAEs) are used to analyze embeddings, but their role and practical value are debated. We propose a new perspective on SAEs by demonstrating that they can be naturally understood as topic models. We propose a continuous topic model (CTM) inspired by Latent Dirichlet Allocation (LDA) for embedding spaces and derive the SAE objective as a maximum a posteriori estimator under this model. This view implies SAE features are thematic components rather than steerable directions. To confirm our theoretical findings, we introduce SAE-TM, a topic modeling framework that: (1) trains an SAE to learn reusable topic atoms, (2) interprets them as word distributions on downstream data, and (3) merges them into any number of topics without retraining. SAE-TM yields more coherent topics than strong baselines on text and image datasets while maintaining diversity. Finally, we analyze thematic structure in image datasets and trace topic changes over time in Japanese woodblock prints. Our work positions SAEs as effective tools for large-scale thematic analysis across modalities.
---