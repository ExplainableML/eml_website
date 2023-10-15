---
img: "/publications/devil_teaser.png"
title: "DeViL: Decoding Vision Features into Language"
authors: Meghal Dani, Isabel Rio-Torto, Stephan Alaniz, and Zeynep Akata
publisher: DAGM German Conference on Pattern Recognition, GCPR
year: 2023
date: "2023-09-20"
arxiv: https://arxiv.org/pdf/2309.01617v1.pdf
filename: devil

abstract: Post-hoc explanation methods have often been criticised for abstracting away the decision-making process of deep neural networks. In this work, we would like to provide natural language descriptions for what different layers of a vision backbone have learned. Our DeViL method generates textual descriptions of visual features at different layers of the network as well as highlights the attribution locations of learned concepts. We train a transformer network to translate individual image features of any vision layer into a prompt that a separate off-the-shelf language model decodes into natural language. By employing dropout both per-layer and per-spatial-location, our model can generalize training on image-text pairs to generate localized explanations. As it uses a pre-trained language model, our approach is fast to train and can be applied to any vision backbone. Moreover, DeViL can create open-vocabulary attribution maps corresponding to words or phrases even outside the training scope of the vision model. We demonstrate that DeViL generates textual descriptions relevant to the image content on CC3M, surpassing previous lightweight captioning models and attribution maps, uncovering the learned concepts of the vision backbone. Further, we analyze fine-grained descriptions of layers as well as specific spatial locations and show that DeViL outperforms the current state-of-the-art on the neuron-wise descriptions of the MILANNOTATIONS dataset.
---

