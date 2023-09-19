---
img: "/publications/ICCV23_PDiscoNet/ICCV_part_discovery_splash.png"
title: "PDiscoNet: Semantically consistent part discovery for fine-grained recognition"
authors: Robert van der Klis, Stephan Alaniz, Massimiliano Mancini, Cassio Dantas, Dino Ienco, Zeynep Akata, Diego Marcos
publisher: International Conference on Computer Vision, ICCV
year: 2023
date: "2023-07-10"
filename: pdisconet-semantically-consistent-part-discovery-for-fine-grained-recognition

abstract: "Fine-grained classification often requires paying attention to specific object parts (e.g. some bird species are best distinguished by looking at their beak shape, other at the pattern in their wings, etc.). Forcing a fine-grained classification model to first detect such parts and then using them to infer the class could help us gauge better whether the model is indeed looking at the right details than interpretability methods that provide a single attribution map. We propose a method to discover object parts by using only image-level class labels along with priors encouraging the parts to be: discriminative, compact, distinct from each other, equivariant to rigid transforms and active in at least some of the images. In addition to using the appropriate losses to encode these priors, we propose to use part-dropout, where full part feature vectors are dropped at once to prevent a single part from dominating in the classification, and part feature vector modulation, which makes the information coming from each part distinct from the perspective of the classifier. Our results on CUB, CelebA and PartImageNet show that the proposed method provides substantially better part discovery performance than previous methods while not requiring any additional hyper-parameter tuning and without penalizing the classification performance."
---
