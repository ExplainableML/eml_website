---
img: "/publications/AttentiveLayerFusion/teaser.png"
title: "Attentive Multi-Layer Fusion for Vision Transformers"
authors: Laure Ciernik*, Marco Morik*, Lukas Thede, Luca Eyring, Shinichi Nakajima, Zeynep Akata, Lukas Muttenthaler
publisher: International Conference on Machine Learning, ICML
year: 2026
month: 07
day: 19
date: "2026-07-19"
filename: AttentiveLayerFusion
arxiv: https://arxiv.org/abs/2601.09322v1
github: https://github.com/lciernik/attentive-layer-fusion
abstract: >
    With the rise of large-scale foundation models, efficiently adapting them to downstream tasks remains a central challenge. Linear probing, which freezes the backbone and trains a lightweight head, is computationally efficient but often restricted to last-layer representations. We show that task-relevant information is distributed across the network hierarchy rather than solely encoded in any of the last layers. To leverage this distribution of information, we apply an attentive probing mechanism that dynamically fuses representations from all layers of a Vision Transformer. This attentive layer fusion (ALF) learns to identify the most relevant layers for a target task and combines low-level structural cues with high-level semantic abstractions. Across 20 diverse datasets and multiple pretrained foundation models, ALF achieves consistent, substantial gains over standard linear probes. Attention heatmaps further reveal that tasks different from the pre-training domain benefit most from intermediate representations. Overall, our findings underscore the value of intermediate-layers and demonstrate a principled, task-aware approach for unlocking their potential for probing-based adaptation.
---
