---
img: "/publications/RankDPO/Teaser.png"
title: "Scalable Ranked Preference Optimization for Text-to-Image Generation"
authors: Shyamgopal Karthik, Huseyin Coskun, Zeynep Akata, Sergey Tulyakov, Jian Ren, Anil Kag
publisher: International Conference on Computer Vision, ICCV
year: 2025
date: "2025-10-10"
filename: RankDPO
arxiv: https://arxiv.org/abs/2406.04312

abstract: Direct Preference Optimization (DPO) has emerged as a powerful approach to align text-to-image (T2I) models with human feedback. Unfortunately, successful application of DPO to T2I models requires a huge amount of resources to collect and label large-scale datasets, e.g., millions of generated paired images annotated with human preferences. In addition, these human preference datasets can get outdated quickly as the rapid improvements of T2I models lead to higher quality images. In this work, we investigate a scalable approach for collecting large-scale and fully synthetic datasets for DPO training. Specifically, the preferences for paired images are generated using a pre-trained reward function, eliminating the need for involving humans in the annotation process, greatly improving the dataset collection efficiency. Moreover, we demonstrate that such datasets allow averaging predictions across multiple models and collecting ranked preferences as opposed to pairwise preferences. Furthermore, we introduce RankDPO to enhance DPO-based methods using the ranking feedback. Applying RankDPO on SDXL and SD3-Medium models with our synthetically generated preference dataset "Syn-Pic" improves both prompt-following (on benchmarks like T2I-Compbench, GenEval, and DPG-Bench) and visual quality (through user studies). This pipeline presents a practical and scalable solution to develop better preference datasets to enhance the performance of text-to-image models. 
---



