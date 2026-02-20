---
img: "/publications/BayesVLM/pipeline.png"
title: "Post-hoc Probabilistic Vision-Language Models"
authors: Anton Baumann, Rui Li, Marcus Klasson, Santeri Mentu, Shyamgopal Karthik, Zeynep Akata, Arno Solin, Martin Trapp
publisher: International Conference on Learning Representations, ICLR
year: 2026
month: 04
day: 23
date: "2026-04-23"
filename: BayesVLM
arxiv: https://arxiv.org/abs/2412.06014
github: https://aaltoml.github.io/BayesVLM/
abstract: >
    Vision-language models (VLMs), such as CLIP and SigLIP, have found remarkable success in classification, retrieval, and generative tasks. For this, VLMs deterministically map images and text descriptions to a joint latent space in which their similarity is assessed using the cosine similarity. However, a deterministic mapping of inputs fails to capture uncertainties over concepts arising from domain shifts when used in downstream tasks. In this work, we propose post-hoc uncertainty estimation in VLMs that does not require additional training. Our method leverages a Bayesian posterior approximation over the last layers in VLMs and analytically quantifies uncertainties over cosine similarities. We demonstrate its effectiveness for uncertainty quantification and support set selection in active learning. Compared to baselines, we obtain improved and well-calibrated predictive uncertainties, interpretable uncertainty estimates, and sample-efficient active learning. Our results show promise for safety-critical applications of large-scale models.
---
