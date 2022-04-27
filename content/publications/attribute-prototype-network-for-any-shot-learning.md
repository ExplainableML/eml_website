---
img: "/publications/attribute-prototype-network-for-any-shot-learning.png"
title: Attribute Prototype Network for Any-Shot Learning
authors: Wenjia Xu, Yongqin Xian, Jiuniu Wang, Bernt Schiele, Zeynep Akata
publisher: International Journal of Computer Vision, IJCV
year: 2022
date: "2022-03-29"
filename: attribute-prototype-network-for-any-shot-learning

abstract: "Any-shot image classification allows to recognize novel classes with only a few or even zero samples. For the task of zero-shot learning, visual attributes have been shown to play an important role, while in the few-shot regime, the effect of attributes is under-explored. To better transfer attribute-based knowledge from seen to unseen classes, we argue that an image representation with integrated attribute localization ability would be beneficial for any-shot, i.e. zero-shot and few-shot, image classification tasks. To this end, we propose a novel representation learning framework that jointly learns discriminative global and local features using only class-level attributes. While a visual-semantic embedding layer learns global features, local features are learned through an attribute prototype network that simultaneously regresses and decorrelates attributes from intermediate features. Furthermore, we introduce a zoom-in module that localizes and crops the informative regions to encourage the network to learn informative features explicitly. We show that our locality augmented image representations achieve a new state-of-the-art on challenging benchmarks, i.e. CUB, AWA2, and SUN. As an additional benefit, our model points to the visual evidence of the attributes in an image, confirming the improved attribute localization ability of our image representation. The attribute localization is evaluated quantitatively with ground truth part annotations, qualitatively with visualizations, and through well-designed user studies."
---

# Introduction

Visual attributes have been shown to be important for zero- and few-shot learning, i.e. any-shot learning, as they allow semantic knowledge transfer from known classes with abundant training samples to novel classes with only a handful of images. We argue that any-shot learning can significantly benefit from an image representation that allows localizing visual attributes in images, especially for fine-grained scenarios where local attributes are critical to distinguish two similar categories.
In this work, we refer to the ability of an image representation to localize and associate an image region with a visual attribute as locality. Our goal is to improve the locality of image representations for any-shot learning.

We develop a weakly supervised representation learning framework that localizes and decorrelates visual attributes. To achieve this, we learn prototypes in the feature space which define the property for each attribute, at the same time, the local image features are encouraged to be similar to the corresponding attribute prototype. 
We propose to alleviate the impact of incidentally correlated attributes by leveraging their semantic relatedness while learning these local features. 
As an additional benefit, our model points to the visual evidence of the attributes in an image, confirming the improved attribute localization ability of our image representation.

# Model

## Notations
The training set consists of labeled images and attributes from seen classes, i.e. $S=\{x, y, \phi(y)| x \in \mathcal{X}, y \in \mathcal{Y}^s \}$.  Here, $x$ denotes an image in the RGB image space $\mathcal{X}$, $y$ is its class label, and $\phi(y) \in \mathbb{R}^{K}$ is the class embedding. Here we use $\mathcal{Y}^n$ to denote the unseen class label set in ZSL and the novel class in FSL for convenience. The class embeddings of unseen classes, i.e. $\{\phi(y)| y \in \mathcal{Y}^n \}$, are also known. 

The goal for ZSL is to predict the label of images from unseen classes, i.e. $\mathcal{X} \rightarrow \mathcal{Y}^n$, while for generalized ZSL the goal is to predict images from both seen and unseen classes, i.e. $\mathcal{X} \rightarrow \mathcal{Y}^n \cup \mathcal{Y}^s$. Few-shot learning (FSL) and generalized few-shot learning (GFSL) are defined similarly. The main difference lies that instead of only knowing the attributes of novel classes in ZSL, FSL also gets a few training samples from each novel class.

In the following, we describe our end-to-end trained attribute prototype network (APN). There are three modules in our framework, the base module, the prototype module, and the Zoom-In Module.

![](/publications/attribute_prototype_network_for_any_shot_learning/Model_figure.png)

## Base Module for global feature learning
The base module (BaseMod) learns discriminative visual features for classification. Given an input image $x$, the Image Encoder converts it into a feature representation $f(x)\in \mathbb{R}^{H\times W \times C}$ where $H$, $W$ and $C$ denote the height, width, and channel respectively.
Base module then applies global average pooling over the $H$ and $W$ to learn a global discriminative feature $g(x)\in \mathbb{R}^C$:

$$
g(x) = \frac{1}{H \times W} \sum_{i=1}^{H} \sum_{j=1}^{W} {f_{i,j}(x)} 
$$

A linear layer with parameter $V \in \mathbb{R}^{C\times K}$ maps the visual feature $g(x)$ into the class embedding~(e.g. attribute) space. 
The dot product between the projected visual feature and every class embedding is computed to produce class logits $s = g(x)^T V \phi(y)$, followed by the cross-entropy loss encouraging the image to have a high compatibility score with its corresponding attribute vector:

$$
\mathcal{L}_{CLS}  = -\log \frac{\exp(s)}{\sum_{\mathcal{Y}^s}\exp(s_j)} \,,
$$

where $s_j = g(x)^T V \phi(y_j)$, $y_j \in \mathcal{Y}^s$.
The visual-semantic embedding layer and the CNN backbone are optimized jointly to finetune the image representation guided by the attribute vectors. 


## Prototype module for local feature learning

Prototype module takes as input the feature $f(x)\in \mathbb{R}^{H\times W \times C}$ where the local feature $f_{i,j}(x)\in \mathbb{R}^{C}$ at spatial location $(i, j)$ encodes information of local image regions. Then we learn a set of attribute prototypes $P = \left \{ p_k \in \mathbb{R}^{C} \right \}_{k=1}^K$ to predict attributes from those local features, where $p_k$ denotes the prototype for the $k$-th attribute. For each attribute, we produce a similarity map $M^k \in \mathbb{R}^{H\times W}$ where each element is computed by a dot product between the attribute prototype $p_k$ and each local feature, i.e. $M_{i, j}^k=\langle p_k, f_{i,j}(x)\rangle$. Afterwards, we predict the $k$-th attribute $\hat{a}_k$ by taking the maximum value in the similarity map $M^k$:
$$\hat{a}_{k} = \max_{i, j} M_{i, j}^k \,.$$

We consider the attribute prediction task as a regression problem and minimize the Mean Square Error~(MSE) between the ground truth attributes $\phi(y)$ and the predicted attributes $\hat{a}$: 

$$
\mathcal{L}_{Reg} = ||\hat{a} - \phi(y) ||^2_2 \,.
$$

Visual attributes are often correlated with each other as they frequently co-occur. 
Therefore, we propose to constrain the attribute prototypes by encouraging feature competition among unrelated attributes and feature sharing among related attributes. We divide all $K$ attributes into $L$ disjoint groups, encoded as $L$ sets of attribute indices $S_1,\dots, S_L$, then adopt the attribute decorrelation loss: 
$$
\mathcal{L}_{AD}  =  \sum\limits_{c = 1}^{C} \sum\limits_{l = 1}^{L} {\left \| P^{S_l}_c  \right \|_2} \,.
$$

In addition, we apply the following compactness regularizer on each similarity map $M^k$, to constrain the similarity map such that it concentrates on its peak region rather than disperses on other locations:
$$
\mathcal{L}_{CPT}  = \frac{1}{KHW} \sum_{k=1}^{K} \sum_{i=1}^{H} \sum_{j=1}^{W}  {M_{i,j}^k \left [ {\left ( i - \tilde{i} \right )}^2 + {\left ( j - \tilde{j} \right )}^2  \right ]} \,. 
$$

## Zoom-In module for attribute prototype-informed feature learning

We propose a Zoom-In Module to highlight the image regions covered by the informative attribute similarity maps and discard the irrelevant image regions. We first sum up the attribute similarity maps for the most informative attribute in each attribute group to form the attention map $\tilde{M}$:
$$
\tilde{M} = \sum_{l=1}^{L} M^{n_l} \,, 
\text{ where  } 
    n_l = \argmax_{k \in S_l} a_k \,.
$$
We binarize the informative attention map $\tilde{M}$ with the average attention value to form a mask $A$:
$$ 
A_{i,j} = 
\begin{cases}
1  & \text{ if } \tilde{M}_{i,j} \geq \overline{m} \\
0 & \text{ if } \tilde{M}_{i,j} < \overline{m}
\end{cases} \,, 
\text{ where  } \overline{m} = \frac{1}{HW} \sum_{i=1}^{H}  \sum_{j=1}^{W} \tilde{M}_{i,j} \,. 
$$
The binary mask $A$ is upsampled to the size of the input image, and we use the smallest bounding box covering the non-zero area to crop the original image.

# Attribute localization results

We first investigate the difference between our APN and the base module (BaseMod) for localizing different body parts in CUB dataset. The result is shown in the following figure.

![](/publications/attribute_prototype_network_for_any_shot_learning/CUB.png)

For each part of the bird Mallard, we display one attribute similarity map generated by our model APN, and the BaseMod visualized by CAM. The baseline model tends to generate disperse attention maps covering the whole bird, as it utilizes more global information, e.g. correlated bird parts and context, to predict attributes. On the other hand, the similarity maps of our APN are more concentrated and diverse and therefore they localize different bird body parts more accurately. The improvement is lead by the attribute prototypes and compactness loss, which helps the model to focus on local image features when learning attributes. 

In the following Figure, we compare our APN model with two baseline models on AWA2 and SUN. The attribute attention maps of BaseMod is generated with two gradient-based visual explanation method CAM and Grad-CAM.

![](/publications/attribute_prototype_network_for_any_shot_learning/SUN_AWA.png)

Our network produces precise similarity maps for visual attributes that describe texture and body parts, etc.
We can localize visual attributes with diverse appearances, e.g. the white and black stripe of zebra, and the yellow and black stripe of tiger (row 2, column 3,4), while CAM and Grad-CAM fails in localizing the stripe on tigers.

Our similarity maps for furry and longleg can precisely mask out the image regions of the ox and horse (row 2, column 3,4), while BaseMod only localizes part of the image (row 1, column 3,4). In AWA2 dataset we are interested in the visual attributes of animals, while our model in some cases highlights the attributes of the background, e.g. identifying the grid on the rat cage as stripes (row 2, column 5). This can be explained by the fact that our model only relies on weak supervision, i.e. class-level attributes and their semantic relatedness.

For more results and analysis, please refer to the [paper](https://arxiv.org/abs/2204.01208).


