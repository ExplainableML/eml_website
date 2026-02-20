---
img: "/publications/LAION400M_Person_Centric_Analysis/modelfigure.png"
title: "Person-Centric Annotations of LAION-400M: Auditing Bias and Its Transfer to Models"
authors: Leander Girrbach, Stephan Alaniz, Genevieve Smith, Trevor Darrell, Zeynep Akata
publisher: International Conference on Learning Representations, ICLR
year: 2026
month: 04
day: 23
date: "2026-04-23"
filename: LAION400M-Person-Centric-Analysis
arxiv: https://arxiv.org/abs/2510.03721
github: https://github.com/ExplainableML/LAION-400M-Person-Centric-Annotations
abstract: >
    Vision-language models trained on large-scale multimodal datasets show strong demographic biases, but the role of training data in producing these biases remains unclear. A major barrier has been the lack of demographic annotations in web-scale datasets such as LAION-400M. We address this gap by creating personcentric annotations for the full dataset, including over 276 million bounding boxes, perceived gender and race/ethnicity labels, and automatically generated captions. These annotations are produced through validated automatic labeling pipelines combining object detection, multimodal captioning, and finetuned classifiers. Using them, we uncover demographic imbalances and harmful associations, such as the disproportionate linking of men and individuals perceived as Black or Middle Eastern with crime-related and negative content. We also show that 60-70% of gender bias in CLIP and Stable Diffusion can be linearly explained by direct cooccurrences in the data. Our resources establish the first large-scale empirical link between dataset composition and downstream model bias.
---
