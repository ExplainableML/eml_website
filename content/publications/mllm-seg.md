---
img: "/publications/ECCV2026_mllm_seg/main.jpg"
title: "From Drop-off to Recovery: A Mechanistic Analysis of Segmentation in MLLMs"
authors: Boyong Wu, Sanghwan Kim, Zeynep Akata
publisher: European Conference on Computer Vision, ECCV
year: 2026
month: 09
day: 10
date: "2026-09-10"
filename: mllm-seg
arxiv: https://arxiv.org/abs/2603.17228

abstract: "Multimodal Large Language Models (MLLMs) are increasingly applied to pixel-level vision tasks, yet their intrinsic capacity for spatial understanding remains poorly understood. We investigate segmentation capacity through a layerwise linear probing evaluation across the entire MLLM pipeline: vision encoder, adapter, and LLM. We further conduct an intervention based attention knockout analysis to test whether cross-token attention progressively refines visual representations, and an evaluation of bidirectional attention among image tokens on spatial consistency. Our analysis reveals that the adapter introduces a segmentation representation drop-off, but LLM layers progressively recover through attention-mediated refinement, where correctly classified tokens steer misclassified neighbors toward the correct label. At early image token positions, this recovery is bounded by causal attention, which bidirectional attention among image tokens alleviates. These findings provide a mechanistic account of how MLLMs process visual information for segmentation, informing the design of future segmentation-capable models."

---
