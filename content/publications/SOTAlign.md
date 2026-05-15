---
img: "/publications/SOTAlign/teaser.pdf"
title: "SOTAlign: Semi-Supervised Alignment of Unimodal Vision and Language Models via Optimal Transport"
authors: Simon Roschmann*, Paul Krzakala*, Sonia Mazelet, Quentin Bouniot, Zeynep Akata
publisher: International Conference on Machine Learning, ICML
year: 2026
month: 07
day: 08
date: "2026-07-08"
filename: SOTAlign
arxiv: https://arxiv.org/abs/2602.23353
# github: https://github.com/ExplainableML/SAE-TM
abstract: >
    The Platonic Representation Hypothesis posits that neural networks trained on different modalities converge toward a shared statistical model of the world. Recent work exploits this convergence by aligning frozen pretrained vision and language models with lightweight alignment layers, but typically relies on contrastive losses and millions of paired samples. In this work, we ask whether meaningful alignment can be achieved with substantially less supervision. We introduce a semi-supervised setting in which pretrained unimodal encoders are aligned using a small number of image–text pairs together with large amounts of unpaired data. To address this challenge, we propose SOTAlign, a two-stage framework that first recovers a coarse shared geometry from limited paired data using a linear teacher, then refines the alignment on unpaired samples via an optimal-transport-based divergence that transfers relational structure without overconstraining the target space. Unlike existing semi-supervised methods, SOTAlign effectively leverages unpaired images and text, learning robust joint embeddings across datasets and encoder pairs, and significantly outperforming supervised and semi-supervised baselines.
---