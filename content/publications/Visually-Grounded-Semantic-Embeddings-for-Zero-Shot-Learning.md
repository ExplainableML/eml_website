---
img: "/publications/vgse.png"
title: "VGSE: Visually-Grounded Semantic Embeddings for Zero-Shot Learning"
authors: Wenjia Xu, Yongqin Xian, Jiuniu Wang, Bernt Schiele, Zeynep Akata
publisher: IEEE Conference on Computer Vision and Pattern Recognition, CVPR
year: 2022
date: "2022-03-28"
filename: Visually-Grounded-Semantic-Embeddings-for-Zero-Shot-Learning
arxiv: https://arxiv.org/abs/2203.10444
github: https://github.com/wenjiaXu/VGSE

abstract: Human-annotated attributes serve as powerful semantic embeddings in zero-shot learning. However, their annotation process is labor-intensive and needs expert supervision. Current unsupervised semantic embeddings, i.e., word embeddings, enable knowledge transfer between classes. However, word embeddings do not always reflect visual similarities and result in inferior zero-shot performance. We propose to discover semantic embeddings containing discriminative visual properties for zero-shot learning, without requiring any human annotation. Our model visually divides a set of images from seen classes into clusters of local image regions according to their visual similarity, and further imposes their class discrimination and semantic relatedness. To associate these clusters with previously unseen classes, we use external knowledge, e.g., word embeddings and propose a novel class relation discovery module. Through quantitative and qualitative evaluation, we demonstrate that our model discovers semantic embeddings that model the visual properties of both seen and unseen classes. Furthermore, we demonstrate on three benchmarks that our visually-grounded semantic embeddings further improve performance over word embeddings across various ZSL models by a large margin.
---

# Introduction
Semantic embeddings aggregated for every class live in a vector space that associates different classes, even when visual examples of these classes are not available. Therefore, they facilitate the knowledge transfer in zero-shot learning (ZSL) and are used as side-information in other computer vision tasks like fashion trend forecast, face recognition and manipulation. Human annotated attributes are widely used semantic embeddings. However, obtaining attributes is often a labor-intensive process. Previous work tackle this problem by using word embeddings for class names, or semantic embeddings from online encyclopedia articles. However, some of these relations may not be visually detectable by machines, resulting in a poor performance in zero-shot learning.
![](/publications/VGSE/teaser_figure.png)

To this end, we propose the Visually-Grounded Semantic Embedding (VGSE) Network to discover semantic embeddings with minimal human supervision (we only use category labels for seen class images). To fully unearth the visual properties shared across different categories, our model discovers semantic embeddings by assigning image patches into various clusters according to their visual similarity. Besides, we further impose class discrimination and semantic relatedness of the semantic embeddings, to benefit their ability in transferring knowledge between classes in ZSL. 


# Model
## Notations
We are interested in the (generalized) zero-shot learning task where the training and test classes are disjoint sets. The training set $\{\left ( x_n, y_n \right )  | x_{n} \in X^{s}, y_{n} \in Y^{s}\} _{n=1}^{N_s}$ consists of images $x_n$ and their labels $y_{n}$ from the seen classes $Y^{s}$. In the ZSL setting, test images are classified into unseen classes $Y^{u}$, and in the GZSL setting, into both $Y^{s}$ and $Y^{u}$ with the help of a semantic embedding space. We propose to automatically discover a set of $D_{v}$ visual clusters as the semantic embedding, denoted by $\Phi^{VGSE}  \in \mathbb{R}^{(|Y^{u}|+|Y^{s}|) \times D_{v}}$. The semantic embeddings for seen classes $\left \{\phi^{VGSE} \left ( y \right ) | y\in Y^{s}  \right \} $, describing diverse visual properties of each category, are learned on seen classes images $X^{s}$. The semantic embeddings for unseen classes $\left \{\phi^{VGSE} \left ( y \right ) | y\in Y^{u}  \right \}$ is predicted with the help of unsupervised word embeddings, e.g., w2v embeddings for class names $\Phi^{w} \in \mathbb{R}^{(|Y^{u}|+|Y^{s}|) \times D_{w}}$. 

Our Visually-Grounded Semantic Embedding(VGSE) Network consists of two main modules. (1) The Patch Clustering module takes the training dataset as input, and clusters the image patches into $D_v$ visual clusters. (2) The Class Relation module to infer the semantic embeddings of unseen classes.

![](/publications/VGSE/Model_figure.png)


## Patch clustering module
Each image $x_n$ is cropped into $N_t$ patches $\{ x_{nt} \}_{t=1}^{N_t}$ that cover different parts of the image. In this way, we reconstruct our training set consisting of image patches $\{\left ( x_{nt}, y_n \right )  | x_{nt} \in X^{sp}, y_{n} \in Y^{s}\} _{n=1}^{N_s}$. Our patch clustering module is a differentiable middle layer, that simultaneously learns image patch representations and clustering. 

We start from a deep neural network that extracts patch feature  $\theta \left ( x_{nt} \right ) \in \mathbb{R}^{D_f}$. Afterwards, a clustering layer $H: \mathbb{R}^{D_f} \to \mathbb{R}^{D_v} $ converts the feature representation into cluster scores: 
$$
a_{nt} =  H \circ \theta \left ( x_{nt} \right )\,,
$$
where $a_{nt}^k$ (the $k$-th element of $a_{nt}$) indicates the probability of assigning image patch $x_{nt}$ to cluster $k$, e.g., the patch clusters of spotty fur, fluffy head, etc.

To impose class discrimination information into the learnt clusters, we apply an cluster-to-class layer $Q: \mathbb{R}^{D_v} \to \mathbb{R}^{|Y^s|}$ to map the cluster prediction of each image to the class probability, i.e., $p(y|x_{nt}) = softmax \left (Q \circ \theta \left ( x_{nt} \right ) \right )$, and train this module with cross-entropy loss:



$$
\mathcal{L}_{cls} = -\log \frac{\exp \left ( p\left ( y_{n} | x_{nt} \right ) \right ) }{\sum_{\hat{y} \in Y^s}{\exp \left ( p\left ( \hat{y} | x_{nt} \right ) \right )} } \,.
$$

We further encourage the learned visual clusters to be transferable between classes. We implement this by mapping the learned cluster probability to the semantic space constructed by w2v embeddings $\Phi^w$. The cluster-to-semantic layer $S: \mathbb{R}^{D_v} \to \mathbb{R}^{D_w}$ is trained by regressing the w2v embedding for each class,
$$
\mathcal{L}_{sem} =  \left \| S \circ a_{nt} - \phi^{w}(y_n) \right \|_2 \,,
$$
where $y_n$ denotes the ground truth class, and $\phi^w \left (y_{n} \right ) \in \mathbb{R}^{D_w}$ represents the w2v embedding for the class $y_n$.

The image embedding $a_n \in \mathbb{R}^{D_v}$ for $x_{n}$ is calculated by averaging the patch embedding in that image: $a_n = \frac{1}{N_t} \sum_{t=1}^{N_t} a_{nt}$. We calculate the semantic embedding for $y_n$ by averaging the embeddings of images belonging to $y_n$:

$$
\phi^{VGSE}(y_n) = \frac{1}{|I_i|}\sum_{j \in I_i} a_j \,.
$$

## Class relation module
While seen semantic embeddings can be estimated from training images using, how to compute the unseen semantic embeddings is not straightforward since their training images are not available. Given the w2v embeddings $\phi^{w}({Y}^{s}) \in \mathbb{R}^{|Y^{s}| \times D_w}$ of seen classes and embedding $\phi^{w}(y_m)$ for unseen class $y_m$, we learns a similarity mapping $r \in \mathbb{R}^{|Y^{s}|}$, where $r_{i}$ denotes the similarity between the unseen class $y_m$ and the $i$-th seen class. The similarity mapping is learned via the following optimization problem:

$$
\min _{r} \left \| \phi^{w}(y_m) - r^T \phi^{w}(Y^{s}) \right \| _2 
$$

$$
\textrm{s.t.} \quad \alpha < r < 1 \quad and \quad \sum_{i=1}^{|Y^s|}r_{i}  = 1 \,.
$$

After the mapping is learned, we can predict the semantic embeddings for the unseen class $y_m$ as:
$$\phi^{VGSE}(y_m) = r^T \phi^{VGSE}(Y_s) \,,$$
where the value of each discovered semantic embedding for unseen class $y_m$ is the weighted sum of all seen class semantic embeddings. Finally, the learned semantic embedding $\Phi^{VGSE}$ can be used to perform downstream tasks, e.g., Zero-Shot Learning.


# Visually-grounded semantic embeddings

We show the 2D visualization of image patches in the AWA2, where $10,000$ image patches are presented by projecting their embeddings $a_{nt}$ onto two dimensions with t-SNE. To picture the distribution of the semantic embedding space, we sample several visual clusters~(dots marked in the same color) and the image patches from the cluster center of both seen and unseen categories.

![](/publications/VGSE/t-SNE-2.png)

We observe that samples in the same cluster tend to gather together, indicating that the embeddings provide discriminative information. Besides, images patches in one cluster do convey consistent visual properties, though coming from disjoint categories. For instance, the white fur appears on rabbit, polar bear, and fox are clustered into one group. We further observe that nearly all clusters consist images from more than one categories. It indicates that the clusters we learned contain semantic properties shared across seen classes, and can be transferred to unseen classes. Another interesting observation is that our VGSE clusters discover visual properties that may be neglected by human-annotated attributes, e.g., the cage appear for hamsters and rat. 

For more quantitative results, please refer to the [paper](https://arxiv.org/abs/2203.10444).
