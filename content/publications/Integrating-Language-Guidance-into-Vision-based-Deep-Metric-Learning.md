---
img: "/publications/lang_1.png"
title: Integrating Language Guidance into Vision-based Deep Metric Learning
authors: Karsten Roth, Oriol Vinyals, Zeynep Akata
publisher: IEEE Conference on Computer Vision and Pattern Recognition, CVPR
year: 2022
date: "2022-03-28"
filename: Integrating-Language-Guidance-into-Vision-based-Deep-Metric-Learning
arxiv: https://arxiv.org/abs/2203.08543
github: https://github.com/ExplainableML/LanguageGuidance_for_DML


abstract: "Deep Metric Learning (DML) proposes to learn metric spaces which encode semantic similarities as embedding space distances. These spaces should be transferable to classes beyond those seen during training. Commonly, DML methods task networks to solve contrastive ranking tasks defined over binary class assignments. However, such approaches ignore higher-level semantic relations between the actual classes. This causes learned embedding spaces to encode incomplete semantic context and misrepresent the semantic relation between classes, impacting the generalizability of the learned metric space. To tackle this issue, we propose a language guidance objective for visual similarity learning. Leveraging language embeddings of expert- and pseudo-classnames, we contextualize and realign visual representation spaces corresponding to meaningful language semantics for better semantic consistency. Extensive experiments and ablations provide a strong motivation for our proposed approach and show language guidance offering significant, model-agnostic improvements for DML, achieving competitive and state-of-the-art results on all benchmarks." 
---

# Introduction
Deep Metric Learning, and by extension visual similarity learning has proven important for applications such as image retrieval, face verification, clustering or contrastive supervised and unsupervised representation learning. In most visual similarity tasks, transfer beyond the training distribution and classes is crucial, which requires learned representation spaces to encode meaningful semantic context that generalizes beyond relations seen during training. 

However, the majority of DML methods introduce training paradigms based only around class labels provided in given datasets, which does not account for high-level semantic connections between <b>different</b> classes (e.g. sports cars vs. pickup trucks) can’t be accounted for. To address this problem, we propose to leverage large-scale pretrained natural language models to provide generic and task-independent contextualization for class labels and encourage DML models to learn semantically more consistent visual representation spaces.

![](/publications/CVPR2022_LanguageGuidance/semantics.png)

Using language-based pretraining for contextualization of visual similarities is long overdue - for vision-based DML,
image pretraining (on ImageNet) has already become standard, providing a strong and readily available starting point and ensuring ranking tasks underlying most DML methods to be much better defined initially. Thus, there is little reason to bottleneck DML to only leverage visual pretraining while disregarding the potential benefits of language context.

## Contributions
To address this issue, we thus

&nbsp;&nbsp;&nbsp;&nbsp;1. describe how pretrained language models can be used to re-align vision representation spaces when expert labels are available,

&nbsp;&nbsp;&nbsp;&nbsp;2. and showcase approaches for re-alignment when only ImageNet pretraining is given via pseudolabels,

Utilising language guidance, we are able to

&nbsp;&nbsp;&nbsp;&nbsp;3. easily achieve new state-of-the-art performance with little hyperparameter tuning,

&nbsp;&nbsp;&nbsp;&nbsp;4. show through multiple ablations the validity of our approach and the impact on language guidance on improved retrieval capabilities based on actual semantics,

&nbsp;&nbsp;&nbsp;&nbsp;5. and intregrate language guidance with little impact on the overall training times.

---

# Integrating Language Guidance

The standard DML pipeline utilizes an **ImageNet-pretrained** feature extraction network and a small projector $f$ on top to offer a deep and non-linear map from Imagespace $\mathcal{X}$ to (pseudo-)metric representation space $\Psi$, on top of which standard DML approaches $\mathcal{L}_\text{DML}$ can be utilized as surrogate objectives to structure the metric space. 
These methods optimize for a simple non-parametric distance metric such as the euclidean distance d = $\left\Vert\bullet,\bullet\right\Vert$, such that simple distances between representations $d(\psi_1, \psi_2)$, $\psi_1, \psi_2 \in \Psi$ has strong connections to the underlying semantic similarities of $x_1, x_2 \in\mathcal{X}$.

Most standard, supervised DML objectives $\mathcal{L}_\text{DML}$ rely on the available class-level supervision to define for example ranking objectives. But as this is insufficient to capture higher-level semantic relations between classes, we now propose a first simple approach to leverage expert label information to update the visual similarity space.

![](/publications/CVPR2022_LanguageGuidance/arch.png)

## With Expert Labels

Given a minibatch $\mathcal{B}$ of images, we first extract vision representations, $\{\psi_i\}_{|\mathcal{B}|}$, and compute the similarity matrix $\mathcal{S}_{ij} = d(\psi_i, \psi_j)$.

In a second step, we leverage large-scale language pretrained encoders $\psi_\text{lang}$, such as BERT, RoBERTa or CLIP-L, and for each batch element extract the expert classname $y_i$. The classnames are then embedded into a caption with some primer giving e.g. $c_i = \texttt{"A photo of a }y_i\texttt{"}$. 

These captions are then feed into $\psi_\text{lang}$ to compute the respective language embeddings $\{\psi_{\text{lang},i}\}_{|\mathcal{B}|}$ and similarity matrix $\mathcal{S}^\text{lang}_{ij} = d(\psi_{\text{lang},i}, \psi_{\text{lang},j})$.

In doing so, $\mathcal{S}^\text{lang}$ represents the semantic relations between each class, which we want to utilize to re-align the finegrained visual representation space $\Psi$ computed using $\psi$ and $\mathcal{L}_\text{DML}$.

This is done by optimzing the language distillation loss

$
\mathcal{L}_\text{match}(\mathcal{S}^\text{img}, \mathcal{S}^\text{lang}) = \frac{1}{|\mathcal{B}|} \sum_i^{|\mathcal{B}|} \sigma(\mathcal{S}_i^{\text{img, X}})\log \left(\frac{\sigma(\mathcal{S}_i^{\text{img, X}})}{\sigma(\mathcal{S}_i^\text{lang} + \gamma_\text{lang})}\right)
$

which computes the KL-Divergence between all similarities for a given anchor sample $i$, with softmax function $\sigma(\cdot)$ and shift $\gamma_\text{lang}$ to address the "exactness" of the distribution match.
Finally, as $S^\text{lang}$ does not resolve similarities for samples within a class unlike $S^\text{img}$ (for $x_i \neq x_j$ and $y_i = y_j$ we have $\psi_i \neq \psi_j$ and thus $S^\text{img}_{i,j} < 1$, but, since the classes are the same, $S^\text{lang} = 1$). To ensure that we do not lose intraclass resolution during distillation, we thus adapt $S^\text{img}$: 

$
S^{\text{img}, X}_{i, j} = 
\mathbb{I}_{y_i=y_j}\left[1 + \gamma_\text{lang}\right] + \mathbb{I}_{y_i\neq y_j}\left[S^\text{img}_{i, j}\right]
$

The total objective is thus given as

$
\mathcal{L}_\text{ELG} = \mathcal{L}_\text{DML} + \omega\cdot\mathcal{L}_\text{match}
$

with ELG abbreviating *Expert Language Guidance*. A visual summary of this approached is given in above figure.

## With Pseudo-Labels

However, expert labels aren't easy to come buy and often not available. For practical use, we thus extend our language guidance to one that solely relies on the ubiquitous **ImageNet-pretraining** of DML pipelines.

For a given training dataset $\mathcal{X}_\text{train}$, we thus take the ImageNet-pretrained backbone $\phi_\text{ImageNet}$ **including** the classification head $f_\text{ImageNet}$ and for each image $x_i\in\mathcal{X}_\text{train}$ compute the **top-k** ImageNet classes $\{y^\text{IN,k}_i\}_k$.

![](/publications/CVPR2022_LanguageGuidance/sample_pseudo_labels.png)

This gives a sample-level semantic supervision, which we can also aggregate for each class to give the **top-k** respective pseudoclasses. Then, in a similar fashion to the expert label setup, we can for each pseudoclass label compute respective pseudo-label semantic similarity matrices $\{\mathcal{S}^\text{pseudolang}\}_k$ and aggregate these into a pseudo-label distillation objective:

$
\mathcal{L}^{\text{top-k}}_\text{pseudomatch} = \mathcal{L}_\text{match}\left(\mathcal{S}^\text{img}, \frac{1}{k}\sum_j^k\mathcal{S}^{\text{pseudolang},j}\right)
$

---

# Experiments Results

When applying language guidance both with expert labels and with pseudo-labels, we find significant improvements in generalization performance:

![](/publications/CVPR2022_LanguageGuidance/performance.png)

As the results show, performance are majorily increased for strong baseline objectives as well as for already heavily regularized approaches, supporting the notable benefits of language-guidance for visual similarity systems and our proposed method as a strong proof-of-concept.

In addition to that, as all language embeddings are computed with a single forward pass over the training dataset $\mathcal{X}_\text{train}$, impact on training time is minimal, with training convergence in parts even speeding up.
![](/publications/CVPR2022_LanguageGuidance/convergence.png)

---

# Impact on retrieval behaviour
Finally, we also find that language-guided models are on average more likely to retrieve from semantically related classes than those without language-guidance.
![](/publications/CVPR2022_LanguageGuidance/qualitative_cub.png)

For even more ablations and evaluations of our proposed approach, we refer to out paper.