---
img: "/publications/BayesCap/BayesCap.gif"
title: "BayesCap: Bayesian Identity Cap for Calibrated Uncertainty in Frozen Neural Networks"
authors: Uddeshya Upadhyay*, Shyamgopal Karthik*, Yanbei Chen, Massimiliano Mancini, Zeynep Akata
publisher: European Conference on Computer Vision, ECCV
year: 2022
date: "2022-07-11"
filename: BayesCap
arxiv: https://arxiv.org/
github: https://github.com/ExplainableML/BayesCap

abstract: High-quality calibrated uncertainty estimates are crucial for numerous real-world applications, especially for deep learning-based deployed ML systems. While Bayesian deep learning techniques allow uncertainty estimation, training them with large-scale datasets is an expensive process that does not always yield models competitive with non-Bayesian counterparts. Moreover, many of the high-performing deep learning models that are already trained and deployed are non-Bayesian in nature and do not provide uncertainty estimates. To address these issues, we propose BayesCap that learns a Bayesian identity mapping for the frozen model, allowing uncertainty estimation. BayesCap is a memory-efficient method that can be trained on a small fraction of the original dataset, enhancing pretrained non-Bayesian computer vision models by providing calibrated uncertainty estimates for the predictions without (i) hampering the performance of the model and (ii) the need for expensive retraining the model from scratch. The proposed method is agnostic to various architectures and tasks. We show the efficacy of our method on a wide variety of tasks with a diverse set of architectures, including image super-resolution, deblurring, inpainting, and crucial application such as medical image translation. Moreover, we apply the derived uncertainty estimates to detect out-of-distribution samples in critical scenarios like depth estimation in autonomous driving.
---

# Introduction
![](/publications/BayesCap/motivation4.png)
Image enhancement tasks like super-resolution, deblurring, inpainting, colorization, denoising, medical image synthesis and monocular depth estimation among others have been effectively tackled using deep learning methods generating high-fidelity outputs. But, the respective state-of-the-art models usually learn a deterministic one-to-one mapping between the input and the output, without modeling the uncertainty in the prediction. While there have been works that try to learn a probabilistic mapping instead, they are often difficult to train and more expensive compared to their deterministic counterparts. In this work, we propose BayesCap, an architecture agnostic, plug-and-play method to generate uncertainty estimates for pre-trained models. The key idea is to train a Bayesian autoencoder over the output images of the pretrained network, approximating the underlying output distribution. Due to its Bayesian design, in addition to reconstructing the input, BayesCap also estimates the parameters of the underlying distribution, allowing us to compute the uncertainties. BayesCap is highly data-efficient and can be trained on a small fraction of the original dataset.


# Problem Formulation
Let $\mathcal{D} = \{(\mathbf{x}_i, \mathbf{y}_i)\}_{i=1}^{N}$ be the training set with pairs from domain $\mathbf{X}$ and $\mathbf{Y}$ (i.e., $\mathbf{x}_i \in \mathbf{X}, \mathbf{y}_i \in \mathbf{Y}, \forall i$), where $\mathbf{X}, \mathbf{Y}$ lies in $\mathbb{R}^m$ and $\mathbb{R}^n$, respectively. 
While our proposed solution is valid for data of arbitrary dimension, we present the formulation for images with applications for image enhancement and translation tasks, such as super-resolution, inpainting, etc. Therefore, ($\mathbf{x}_i, \mathbf{y}_i$) represents a pair of images, where $\mathbf{x}_i$ refers to the input and $\mathbf{y}_i$ denotes the transformed / enhanced output. For instance, in super-resolution $\mathbf{x}_i$ is a low-resolution image and $\mathbf{y}_i$ its high-resolution version. Let $\mathbf{\Psi}(\cdot; \theta): \mathbb{R}^m \rightarrow \mathbb{R}^n$ represent a Deep Neural Network parametrized by $\theta$ that maps images from the set $\mathbf{X}$ to the set $\mathbf{Y}$, e.g. from corrupted to the non-corrupted / enhanced output images. 


We consider a real-world scenario, where $\mathbf{\Psi}(\cdot; \theta)$ has already been trained using the dataset $\mathcal{D}$ and it is in a *frozen state* with parameters set to the learned optimal parameters $\theta^{*}$. In this state, given an input $\mathbf{x}$, the model returns a point estimate of the output, i.e., $\hat{\mathbf{y}} = \mathbf{\Psi}(\mathbf{x}; \theta^{*})$. However, point estimates do not capture the distributions of the output ($\mathcal{P}_{\mathbf{Y}|\mathbf{X}}$) and thus the uncertainty in the prediction that is crucial in many real-world  applications. Therefore, we propose to estimate $\mathcal{P}_{\mathbf{Y}|\mathbf{X}}$ for the pretrained model in a fast and cheap manner, quantifying the uncertainties of the output without re-training the model itself.

# Preliminaries: Uncertainty Estimation
![](/publications/BayesCap/BayesCap.gif)
To understand the functioning of our BayesCap that produces uncertainty estimates for the *frozen or pretrained* neural networks, we first consider a model trained from scratch to address the target task and estimate uncertainty. Let us denote this model by $\mathbf{\Psi}_s(\cdot; \zeta): \mathbb{R}^m \rightarrow \mathbb{R}^n$, with a set of trainable parameters given by $\zeta$. To capture the *irreducible* (i.e., aleatoric) uncertainty in the output distribution $\mathcal{P}_{Y|X}$, the model must estimate the parameters of the distribution. These are then used to maximize the likelihood function. That is, for an input $\mathbf{x}_i$, the model produces a set of parameters representing the output given by, $\{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \} := \mathbf{\Psi}_s(\mathbf{x}_i; \zeta)$, that characterizes the distribution $\mathcal{P}_{Y|X}(\mathbf{y}; \{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \})$, such that $\mathbf{y}_i \sim \mathcal{P}_{Y|X}(\mathbf{y}; \{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \})$. The likelihood $\mathscr{L}(\zeta; \mathcal{D}) := \prod_{i=1}^{N} \mathcal{P}_{Y|X}(\mathbf{y}_i; \{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \})$ is then maximized in order to estimate the optimal parameters of the network. Moreover, the distribution $\mathcal{P}_{Y|X}$ is often chosen such that uncertainty can be estimated using a closed form solution $\mathscr{F}$ depending on the estimated parameters of the neural network, i.e.,
$$
\begin{gather}
\{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \} := \mathbf{\Psi}_s(\mathbf{x}_i; \zeta) \\
\zeta^* := \underset{\zeta}{\text{argmax }} \mathscr{L}(\zeta; \mathcal{D}) = \underset{\zeta}{\text{argmax}} \prod_{i=1}^{N} \mathcal{P}_{Y|X}(\mathbf{y}_i; \{\hat{\mathbf{y}}_i, \hat{\nu}_i \dots \hat{\rho}_i \}) \\
\text{Uncertainty}(\hat{\mathbf{y}}_i) = \mathscr{F}(\hat{\nu}_i \dots \hat{\rho}_i)
\end{gather}
$$
It is common to use a *heteroscedastic* Gaussian distribution for $\mathcal{P}_{Y|X}$, in which case $\mathbf{\Psi}_s(\cdot; \zeta)$ is designed to predict the *mean* and *variance* of the Gaussian distribution, i.e., $\{\hat{\mathbf{y}}_i, \hat{\sigma}_i^2 \} := \mathbf{\Psi}_s(\mathbf{x}_i; \zeta)$, and the predicted *variance* itself can be treated as uncertainty in the prediction. The optimization problem becomes,
$$
\begin{gather}
\zeta^*
= \underset{\zeta}{\text{argmax}} \prod_{i=1}^{N} \frac{1}{\sqrt{2 \pi \hat{\sigma}_i^2}} 
e^{-\frac{|\hat{\mathbf{y}}_i - \mathbf{y}_i|^2}{2\hat{\sigma}_i^2}} 
= 
\underset{\zeta}{\text{argmin}} \sum_{i=1}^{N} \frac{|\hat{\mathbf{y}}_i - \mathbf{y}_i|^2}{2\hat{\sigma}_i^2} + \frac{\log(\hat{\sigma}_i^2)}{2} \\
\text{Uncertainty}(\hat{\mathbf{y}}_i) = \hat{\sigma}_i^2.
\end{gather}
$$
The above equation models the per-pixel residual (between the prediction and the ground-truth) as a Gaussian distribution. However, this may not always be fit, especially in the presence of outliers and artefacts, where the residuals often follow heavy-tailed distributions. Recent works such as have shown that heavy-tailed distributions can be modeled as a heteroscedastic generalized Gaussian distribution, in which case $\mathbf{\Psi}_s(\cdot; \zeta)$ is designed to predict the \textit{mean} ($\hat{\mathbf{y}}_i$), \textit{scale} ($\hat{\mathbf{\alpha}}_i$), and \textit{shape} ($\hat{\mathbf{\beta}}_i$) as trainable parameters, i.e., $\{\hat{\mathbf{y}}_i, \hat{\alpha}_i, \hat{\beta}_i \} := \mathbf{\Psi}_s(\mathbf{x}_i; \zeta)$, 
$$
\begin{gather}
\zeta^*
:= \underset{\zeta}{\text{argmax }} \mathscr{L}(\zeta)
= \underset{\zeta}{\text{argmax}} \prod_{i=1}^{N} \frac{\hat{\beta}_i}{2 \hat{\alpha}_i \Gamma(\frac{1}{\hat{\beta}_i})} 
e^{-(|\hat{\mathbf{y}}_i - \mathbf{y}_i|/\hat{\alpha}_i)^{\hat{\beta}_i}} 
= \underset{\zeta}{\text{argmin}} -\log\mathscr{L}(\zeta)
\\ 
= 
\underset{\zeta}{\text{argmin}} \sum_{i=1}^{N} 
\left(
\frac{|\hat{\mathbf{y}}_{i}-\mathbf{y}_{i}|}{\hat{\alpha}_{i}} \right)^{\hat{\beta}_{i}} - 
    \log\frac{\hat{\beta}_{i}}{\hat{\alpha}_{i}} + \log\Gamma(\frac{1}{\hat{\beta}_{i}})
\\
\text{Uncertainty}(\hat{\mathbf{y}}_i) = \frac{\hat{\alpha}_i^2\Gamma(\frac{3}{\hat{\beta}}_i)}{\Gamma(\frac{1}{\hat{\beta}}_i)}.
\end{gather}
$$
Here $\Gamma(z) = \int_{0}^{\infty}x^{z-1}e^{-x} dx \text{, } \forall z>0$, represents the Gamma function.
While the above formulation shows the dependence of various predicted distribution parameters on one another when maximizing the likelihood, it requires training the model from scratch, that we want to avoid. In the following, we describe how we address this problem through our BayesCap.

# Constructing BayesCap
In the above, $\mathbf{\Psi}_s(\cdot; \zeta)$ was trained from scratch to predict all the parameters of distribution and does *not* leverage the *frozen* model $\mathbf{\Psi}(\cdot; \theta^*)$ estimating $\mathbf{y}_i$ using $\hat{\mathbf{y}}_i$ in a deterministic fashion. To circumvent the training from scratch, we notice that one only needs to estimate the remaining parameters of the underlying distribution. Therefore, to augment the frozen point estimation model, we learn a Bayesian identity mapping represented by $\mathbf{\Omega}(\cdot; \phi): \mathbb{R}^n \rightarrow \mathbb{R}^n$, that reconstructs the output of the frozen model $\mathbf{\Psi}(\cdot; \theta^*)$ and also produces the parameters of the distribution modeling the reconstructed output. We refer to this network as BayesCap. We use heteroscedastic generalized Gaussian to model output distribution, i.e.,
$$
\begin{gather}
\mathbf{\Omega}(\hat{\mathbf{y}}_i = \mathbf{\Psi}(\mathbf{x}_i; \theta^*); \phi) = \{\tilde{\mathbf{y}}_i, \tilde{\alpha}_i, \tilde{\beta}_i\} 
\text{, with } 
\mathbf{y}_i \sim \frac{\tilde{\beta}_i}{2 \tilde{\alpha}_i \Gamma(\frac{1}{\tilde{\beta}_i})} 
e^{-(|\tilde{\mathbf{y}}_i - \mathbf{y}_i|/\tilde{\alpha}_i)^{\tilde{\beta}_i}} 
\end{gather}
$$
To enforce the identity mapping, for every input $\mathbf{x}_i$, we regress the reconstructed output of the BayesCap ($\tilde{\mathbf{y}}_i$) with the output of the pretrained base network ($\hat{\mathbf{y}}_i$). This ensures that, the distribution predicted by *BayesCap* for an input $\mathbf{x}_i$, i.e., $\mathbf{\Omega}(\mathbf{\Psi}(\mathbf{x}_i; \theta^*); \phi)$, is such that the point estimates $\tilde{\mathbf{y}}_i$ match the point estimates of the pretrained network $\hat{\mathbf{y}}_i$. Therefore, as the quality of the reconstructed output improves, the uncertainty estimated by $\mathbf{\Omega}(\cdot; \phi)$ also approximates the uncertainty for the prediction made by the pretrained $\mathbf{\Psi}(\cdot; \theta^*)$, i.e.,
$$
\begin{gather}
    \tilde{\mathbf{y}}_i \rightarrow \hat{\mathbf{y}}_i \implies \tilde{\mathbf{\sigma}}_i^2 = \frac{\tilde{\alpha}_i^2 \Gamma(3/\tilde{\beta}_i)}{\Gamma(1/\tilde{\beta}_i)} \rightarrow \hat{\mathbf{\sigma}}_i^2 
\end{gather}
$$
To train $\mathbf{\Omega}(\cdot; \phi)$ and obtain optimal parameters ($\phi^*$), we minimize the fidelity term between $\tilde{\mathbf{y}}_i$ and $\hat{\mathbf{y}}_i$, along with the negative log-likelihood for $\mathbf{\Omega}(\cdot; \phi)$, i.e.,
$$
\begin{gather}
\phi^*
= \underset{\phi}{\text{argmin}} \sum_{i=1}^{N} \lambda \underbrace{|\tilde{\mathbf{y}}_i - \hat{\mathbf{y}}_i|^2}_{\text{Identity mapping}}
+
\underbrace{
\left(
\frac{|\tilde{\mathbf{y}}_{i}-\mathbf{y}_{i}|}{\tilde{\alpha}_{i}} \right)^{\tilde{\beta}_{i}} - 
    \log\frac{\tilde{\beta}_{i}}{\tilde{\alpha}_{i}} + \log\Gamma(\frac{1}{\tilde{\beta}_{i}})
}_{\text{Negative log-likelihood}}
\end{gather}
$$
Here $\lambda$ represents the hyperparameter controlling the contribution of the fidelity term in the overall loss function. Extremely high $\lambda$ will lead to improper estimation of the ($\tilde{\alpha}$) and ($\tilde{\beta}$) parameters as other terms are ignored. Above equation allows BayesCap to estimate the underlying distribution and uncertainty.

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