---
img: "/publications/Fabio_BMVC_Few-Shot_Segmentation.png"
title: "Prototype-based Incremental Few-Shot Segmentation"
authors: Fabio Cermelli, Massimiliano Mancini, Yongqin Xian, Zeynep Akata, Barbara Caputo
publisher: British Machine Vision Conference, BMVC
year: 2021
date: "2021-10-01"
arxiv: https://arxiv.org/pdf/2012.01415.pdf
filename: prototype_based_incremental_few-shot_segmentation

abstract: "Semantic segmentation models have two fundamental weaknesses: i) they require large training sets with costly pixel-level annotations, and ii) they have a static output space, constrained to the classes of the training set. Toward addressing both problems, we introduce a new task, Incremental Few-Shot Segmentation (iFSS). The goal of iFSS is to extend a pretrained segmentation model with new classes from few annotated images and without access to old training data. To overcome the limitations of existing models in iFSS, we propose Prototype-based Incremental Few-Shot Segmentation (PIFS) that couples prototype learning and knowledge distillation. PIFS exploits prototypes to initialize the classifiers of new classes, fine-tuning the network to refine its features representation. We design a prototype-based distillation loss on the scores of both old and new class prototypes to avoid overfitting and forgetting, and batch-renormalization to cope with non-i.i.d. few-shot data. We create an extensive benchmark for iFSS showing that PIFS outperforms several few-shot and incremental learning methods in all scenarios."
---
