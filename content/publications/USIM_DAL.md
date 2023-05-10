---
img: "/publications/USIM_DAL/USIM_DAL.png"
title: "USIM-DAL: Uncertainty-aware Statistical Image Modeling-based Dense Active Learning for Super-resolution"
authors: Vikrant Rangnekar*, Uddeshya Upadhyay*, Zeynep Akata, Biplab Banerjee
publisher: The Conference on Uncertainty in Artificial Intelligence (UAI), 2023
year: 2023
date: "2023-05-10"
filename: USIM_DAL
abstract: Dense regression is a widely used approach in computer vision for tasks such as image super-resolution, enhancement, depth estimation, etc. However, the high cost of annotation and labeling makes it challenging to achieve accurate results. We propose incorporating active learning into dense regression models to address this problem. Active learning allows models to select the most informative samples for labeling, reducing the overall annotation cost while improving performance. Despite its potential, active learning has not been widely explored in high-dimensional computer vision regression tasks like super-resolution. We address this research gap and
propose a new framework called USIM-DAL that leverages the statistical properties of colour images to learn informative priors using probabilistic deep neural networks that model the heteroscedastic predictive distribution allowing uncertainty quantification. Moreover, the aleatoric uncertainty from the network serves as a proxy for error that is used for active learning. Our experiments on a wide variety of datasets spanning applications in natural images (visual genome, BSD100), medical imaging (histopathology slides), and remote sensing (satellite images) demonstrate the efficacy of the newly proposed USIM-DAL and superiority over several dense regression active learning methods.
---