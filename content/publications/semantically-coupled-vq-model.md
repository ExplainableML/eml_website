---
img: "/publications/sVQ.jpg"
title: Semantic Image Synthesis with Semantically Coupled VQ-Model
filename: semantically-coupled-vq-model

authors: Stephan Alaniz*, Thomas Hummel*, Zeynep Akata
publisher: Workshop on Deep Generative Models for Highly Structured Data (DGM4HSD), ICLR
year: 2022
date: "2022-04-29"
arxiv: https://arxiv.org/abs/2209.02536
abstract: Semantic image synthesis enables control over unconditional image generation by allowing guidance on what is being generated. We conditionally synthesize the latent space from a vector quantized model (VQ-model) pre-trained to autoencode images. Instead of training an autoregressive Transformer on separately learned conditioning latents and image latents, we find that jointly learning the conditioning and image latents significantly improves the modeling capabilities of the Transformer model. While our jointly trained VQ-model achieves a similar reconstruction performance to a vanilla VQ-model for both semantic and image latents, tying the two modalities at the autoencoding stage proves to be an important ingredient to improve autoregressive modeling performance. We show that our model improves semantic image synthesis using autoregressive models on popular semantic image datasets ADE20k, Cityscapes and COCO-Stuff.
---
