---
img: "/publications/fif_teaser.png"
title: "A Practitioner's Guide to Continual Multimodal Pretraining"
authors: Karsten Roth*, Vishaal Udandarao*, Sebastian Dziadzio, Ameya Prabhu, Medhi Cherti, Oriol Vinyals, Olivier Henaff, Samuel Albanie, Matthias Bethge, Zeynep Akata
publisher: Neural Information Processing Systems, NeurIPS
year: 2024
date: "2024-12-12"
filename: fif
arxiv: https://arxiv.org/abs/2408.14471
github: https://github.com/ExplainableML/fomo_in_flux

abstract: "Multimodal foundation models serve numerous applications at the intersection of vision and language. Still, despite being pretrained on extensive data, they become outdated over time. To keep models updated, research into continual pretraining mainly explores scenarios with either (1) infrequent, indiscriminate updates on large-scale new data, or (2) frequent, sample-level updates. However, practical model deployment often operates in the gap between these two limit cases, as real-world applications often demand adaptation to specific subdomains, tasks or concepts, spread over the entire, varying life cycle of a model. In this work, we complement current perspectives on continual pretraining through a research test bed as well as provide comprehensive guidance for effective continual model updates in such scenarios. We first introduce FoMo-in-Flux, a continual multimodal pretraining benchmark with realistic compute constraints and practical deployment requirements, constructed over 63 datasets with diverse visual and semantic coverage. Using FoMo-in-Flux, we explore the complex landscape of practical continual pretraining through multiple perspectives: (1) A data-centric investigation of data mixtures and stream orderings that emulate real-world deployment situations, (2) a method-centric investigation ranging from simple fine-tuning and traditional continual learning strategies to parameter-efficient updates and model merging, (3) meta learning rate schedules and mechanistic design choices, and (4) the influence of model and compute scaling. Together, our insights provide a practitioner's guide to continual multimodal pretraining for real-world deployment."
---

# Info

For all results and analysis, please refer to the monograph variant of our [paper](https://arxiv.org/abs/2408.14471), which contains numerous insights and experimental studies on best practices for continual multimodal pretraining.
