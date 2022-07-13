---
img: "/publications/BayesCap.gif"
title: "BayesCap: Bayesian Identity Cap for Calibrated Uncertainty in Frozen Neural Networks"
authors: Uddeshya Upadhyay*, Shyamgopal Karthik*, Yanbei Chen, Massimiliano Mancini, Zeynep Akata
publisher: European Conference on Computer Vision, ECCV
year: 2022
date: "2022-07-11"
filename: BayesCap Bayesian Identity Cap for Calibrated Uncertainty in Frozen Neural Networks
arxiv: https://arxiv.org/
github: https://github.com/ExplainableML/BayesCap

abstract: High-quality calibrated uncertainty estimates are crucial for numerous real-world applications, especially for deep learning-based deployed ML systems. While Bayesian deep learning techniques allow uncertainty estimation, training them with large-scale datasets is an expensive process that does not always yield models competitive with non-Bayesian counterparts. Moreover, many of the high-performing deep learning models that are already trained and deployed are non-Bayesian in nature and do not provide uncertainty estimates. To address these issues, we propose BayesCap that learns a Bayesian identity mapping for the frozen model, allowing uncertainty estimation. BayesCap is a memory-efficient method that can be trained on a small fraction of the original dataset, enhancing pretrained non-Bayesian computer vision models by providing calibrated uncertainty estimates for the predictions without (i) hampering the performance of the model and (ii) the need for expensive retraining the model from scratch. The proposed method is agnostic to various architectures and tasks. We show the efficacy of our method on a wide variety of tasks with a diverse set of architectures, including image super-resolution, deblurring, inpainting, and crucial application such as medical image translation. Moreover, we apply the derived uncertainty estimates to detect out-of-distribution samples in critical scenarios like depth estimation in autonomous driving.
---

# Introduction
Image enhancement tasks like super-resolution, deblurring, inpainting, colorization, denoising, medical image synthesis and monocular depth estimation among others have been effectively tackled using deep learning methods generating high-fidelity outputs. But, the respective state-of-the-art models usually learn a deterministic one-to-one mapping between the input and the output, without modeling the uncertainty in the prediction. While there have been works that try to learn a probabilistic mapping instead, they are often difficult to train and more expensive compared to their deterministic counterparts. In this work, we propose BayesCap, an architecture agnostic, plug-and-play method to generate uncertainty estimates for pre-trained models. The key idea is to train a Bayesian autoencoder over the output images of the pretrained network, approximating the underlying output distribution. Due to its Bayesian design, in addition to reconstructing the input, BayesCap also estimates the parameters of the underlying distribution, allowing us to compute the uncertainties. BayesCap is highly data-efficient and can be trained on a small fraction of the original dataset.


# Approach
<br/><br/>
![](/publications/BayesCap/BayesCap.gif)
<br/><br/>

# Results
We test our method BayesCap on the tasks of image super-resolution, deblurring, inpatining and medical image translation. In all the tasks, we are able to retain the outputs of the base model while also providing uncertainty estimates. 
Some results are illustrated below:

Super-Resolution
<br/><br/>
![](/publications/BayesCap/sr_qual1.png)
<br/><br/>

Deblurring and Inpainting
<br/><br/>
![](/publications/BayesCap/deblur_inpaint_qual.png)
<br/><br/>

Medical Image Translation
<br/><br/>
![](/publications/BayesCap/MRI_qual.png)
<br/><br/>

In addition to this, we also show the downstream benefits of uncertainty estimation. In the case of monocular depth estimation for autonomous driving, we show that BayesCap can be used to detect out-of-distribution samples which are captured either from different geographies and scenes. 
<br/><br/>
![](/publications/BayesCap/depth_qual_n_quant.png)
<br/><br/>


For more results and analysis, please refer to the [paper](https://arxiv.org/).
You can also find a demo of our work [here](https://huggingface.co/spaces/udion/BayesCap).