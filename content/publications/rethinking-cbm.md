---
img: "/publications/CVPR2026_cbm/main.png"
title: "Rethinking Concept Bottleneck Models: From Pitfalls to Solutions"
authors: Merve Tapli, Quentin Bouniot, Wolfgang Stammer, Zeynep Akata, Emre Akbas
publisher: IEEE Conference on Computer Vision and Pattern Recognition, CVPR
year: 2026
date: "2026-03-06"
filename: rethinking-cbm
arxiv: http://arxiv.org/abs/2603.05629
github: https://github.com/mervetapli/CBMSuite

abstract: "Concept Bottleneck Models (CBMs) ground predictions in human-understandable concepts but face fundamental limitations: the absence of a metric to pre-evaluate concept relevance, the "linearity problem" causing recent CBMs to bypass the concept bottleneck entirely, an accuracy gap compared to opaque models, and finally the lack of systematic study on the impact of different visual backbones and VLMs. We introduce CBM-Suite, a methodological framework to systematically addresses these challenges. First, we propose an entropy-based metric to quantify the intrinsic suitability of a concept set for a given dataset. Second, we resolve the linearity problem by inserting a non-linear layer between concept activations and the classifier, which ensures that model accuracy faithfully reflects concept relevance. Third, we narrow the accuracy gap by leveraging a distillation loss guided by a linear teacher probe. Finally, we provide comprehensive analyses on how different vision encoders, vision-language models, and concept sets interact to influence accuracy and interpretability in CBMs. Extensive evaluations show that CBM-Suite yields more accurate models and provides insights for improving concept-based interpretability."
---

