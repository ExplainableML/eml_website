---
img: "/publications/calm.png"
title: Keep CALM and Improve Visual Feature Attribution
authors: Jae Myung Kim, Junsuk Choe, Zeynep Akata, Seong Joon Oh
publisher: IEEE International Conference of Computer Vision, ICCV
year: 2021
month: 8
day: 15
date: "2021-08-20"
filename: keep-calm-and-improve-visual-feature-attribution
arxiv: https://arxiv.org/abs/2106.07861
abstract: The class activation mapping, or CAM, has been the cornerstone of feature attribution methods for multiple vision tasks. Its simplicity and effectiveness have led to wide applications in the explanation of visual predictions and weakly-supervised localization tasks. However, CAM has its own shortcomings. The computation of attribution maps relies on ad-hoc calibration steps that are not part of the training computational graph, making it difficult for us to understand the real meaning of the attribution values. In this paper, we improve CAM by explicitly incorporating a latent variable encoding the location of the cue for recognition in the formulation, thereby subsuming the attribution map into the training computational graph. The resulting model, class activation latent mapping, or CALM, is trained with the expectation-maximization algorithm. Our experiments show that CALM identifies discriminative attributes for image classifiers more accurately than CAM and other visual attribution baselines.
---

# Long Summary 
<br>

In this paper, we focus on the [class activation mapping (CAM)](https://arxiv.org/abs/1512.04150) method, which has been the cornerstone of the feature attribution research.
It answers "which pixels are responsible for the prediction" for CNN models.
Overview of CAM is...

&nbsp;&nbsp;&nbsp;&nbsp;+ CAM works great! Examples in [youtube](https://www.youtube.com/embed/fZvOy0VXWAI).
&nbsp;&nbsp;&nbsp;&nbsp;+ CAM has inspired 5000+ papers in ML and CV!
&nbsp;&nbsp;&nbsp;&nbsp;+ CAM also works great for weakly supervised object localization (WSOL) tasks. [[ref](https://arxiv.org/abs/2001.07437)]
<br><br><br>


<span style="font-size:xx-large;">BUT</span>, there is a remaining weakness for CAM

&nbsp;&nbsp;&nbsp;&nbsp;+ Explaining the value of CAM in **human language** is difficult to understand.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ "The pixel-wise pre-GAP, pre-softmax feature value at (h, w), measured in relative scale within the range of Values [0, A] where A is the maximum of the feature values in the entire image"
&nbsp;&nbsp;&nbsp;&nbsp;+ In a **technical manner**, CAM applies normalization on the score map only at test time but not at training time.

<br>
<p align="center">
  <img src="/publications/calm/cam_normalize.PNG" width="70%">
</p>
<br><br><br>


<span style="font-size:xx-large;">HERE</span> is where we address these issues using **probabilistic ML**. A good way to normalize something is to use probabilities.

&nbsp;&nbsp;&nbsp;&nbsp;+ Probabilistic ML starts with definitions for random variables. (X,Y) are usual variables for (image, label).
&nbsp;&nbsp;&nbsp;&nbsp;+ Now, a new latent, unobserved variable Z is introduced: 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Z = pixel index responsible for the prediction of X as Y**
&nbsp;&nbsp;&nbsp;&nbsp;+ We factorize: p(X,Y,Z) = p(Y|X,Z) p(Z|X) p(X)
&nbsp;&nbsp;&nbsp;&nbsp;+ Use probabilistic ML tools for learning with latent variables,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Marginal likelihood loss: L = - log ∫ p(Y|X,Z) p(Z|X) dZ
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Expectation-Maximization: L = - ∫ p’(Y,Z|X) log p(Y,Z|X)
&nbsp;&nbsp;&nbsp;&nbsp;+ The resulting **p(Y=y, Z|X=x)** is the **CALM attribution map**.

<br>
<p align="center">
  <img src="/publications/calm/graphical_model.PNG" width="40%">
</p>
<br><br><br>


<span style="font-size:xx-large;">CALM</span> has several benefits.

&nbsp;&nbsp;&nbsp;&nbsp;+ Interpretaion-phase computational graph **is** part of training graph.
&nbsp;&nbsp;&nbsp;&nbsp;+ **Intuitive description** of the CALM attribution map values.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ "The probability that the cue for recognition was at position z when the image x is predicted as y"
&nbsp;&nbsp;&nbsp;&nbsp;+ Diverse explanation is possible. (s(y) = p(Y=y, Z | X))
&nbsp;&nbsp;&nbsp;&nbsp;+ CALM is qualitatively better than CAM. Quantitative results are also better where results are in the paper.

<br>
<p align="center">
  <img src="/publications/calm/diverse_explanation.PNG" width="80%">
</p>
<br><br>
<p align="center">
  <img src="/publications/calm/qualitative.PNG" width="80%">
</p>
<br><br><br>


One Caveat is....

&nbsp;&nbsp;&nbsp;&nbsp;+ reduced accuracy. For ResNet50 on ImageNet, the top-1 accuracies are 74.5% and 70.5% for CAM and CALM, respectively.
&nbsp;&nbsp;&nbsp;&nbsp;+ But this is the classic interpretability-accuracy trade-off.
&nbsp;&nbsp;&nbsp;&nbsp;+ In certain applications, you may sacrifice 4/100 predictions for plainly better explainability.
<br><br><br>


In conclusion, **Keep CALM and improve your visual feature attribution!**


