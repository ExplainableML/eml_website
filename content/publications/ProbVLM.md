---
img: "/publications/ProbVLM/ProbVLM_motivation.png"
title: "ProbVLM: Probabilistic Adapter for Frozen Vison-Language Models"
authors: Uddeshya Upadhyay*, Shyamgopal Karthik*, Massimiliano Mancini, Zeynep Akata
publisher: IEEE International Conference on Computer Vision, ICCV
year: 2023
date: "2023-07-19"
filename: ProbVLM
arxiv: https://arxiv.org/abs/2307.00398
github: https://github.com/ExplainableML/ProbVLM

abstract: "Large-scale vision-language models (VLMs) like CLIP successfully find correspondences between images and text. Through the standard deterministic mapping process, an image or a text sample is mapped to a single vector in the embedding space. This is problematic: as multiple samples (images or text) can abstract the same concept in the physical world, deterministic embeddings do not reflect the inherent ambiguity in the embedding space. We propose ProbVLM, a probabilistic adapter that estimates probability distributions for the embeddings of pre-trained VLMs via inter/intra-modal alignment in a post-hoc manner without needing large-scale datasets or computing. On four challenging datasets, i.e., COCO, Flickr, CUB, and Oxford-flowers, we estimate the multi-modal embedding uncertainties for two VLMs, i.e., CLIP and BLIP, quantify the calibration of embedding uncertainties in retrieval tasks and show that ProbVLM outperforms other methods. Furthermore, we propose active learning and model selection as two real-world downstream tasks for VLMs and show that the estimated uncertainty aids both tasks." 
---
