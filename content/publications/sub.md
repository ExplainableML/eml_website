---
img: "/publications/ICCV2025_sub/main.png"
title: "SUB: Benchmarking CBM Generalization via Synthetic Attribute Substitutions"
authors: Jessica Bader, Leander Girrbach, Stephan Alaniz, Zeynep Akata
publisher: IEEE International Conference on Computer Vision, ICCV
year: 2025
date: "2025-10-25"
filename: sub
arxiv: https://arxiv.org/abs/TODO
github: https://github.com/ExplainableML/sub


abstract: "Concept Bottleneck Models (CBMs) and other interpretable models show great promise for making AI applications more transparent, which is essential in fields like medicine. Despite their success, we demonstrate that CBMs struggle to reliably identify the correct concepts under distribution shifts. To assess the robustness of CBMs to concept variations, we introduce SUB: a fine-grained image and concept benchmark containing 38,400 synthetic images based on the CUB dataset. To create SUB, we select a CUB subset of 33 bird classes and 32 concepts to generate counterfactual images which substitute a specific concept, such as wing color or belly pattern. We introduce a novel Tied Diffusion Guidance (TDG) method to precisely control generated images, where noise sharing for two parallel denoising processes ensures that both the correct bird class and the correct attribute are generated. This novel benchmark enables rigorous evaluation of CBMs and similar interpretable models, contributing to the development of more robust methods." 
---