---
img: "/publications/ICLR24_Unbalancedness/unbalancedness_teaser.png"
title: Unbalancedness in Neural Monge Maps Improves Unpaired Domain Translation 
authors: Luca Eyring*, Dominik Klein*, Théo Uscidda*, Giovanni Palla, Niki Kilbertus, Zeynep Akata, Fabian Theis
publisher: International Conference on Learning Representations, ICLR
year: 2024
date: "2024-02-06"
filename: Unbalancedness-in-Neural-Monge-Maps
arxiv: https://arxiv.org/abs/2311.15100
github: https://github.com/ExplainableML/uot-fm

abstract: _In optimal transport (OT), a Monge map is known as a mapping that transports a source distribution to a target distribution in the most cost-efficient way. Recently, multiple neural estimators for Monge maps have been developed and applied in diverse unpaired domain translation tasks, e.g. in single-cell biology and computer vision. However, the classic OT framework enforces mass conservation, which makes it prone to outliers and limits its applicability in real-world scenarios. The latter can be particularly harmful in OT domain translation tasks, where the relative position of a sample within a distribution is explicitly taken into account. While unbalanced OT tackles this challenge in the discrete setting, its integration into neural Monge map estimators has received limited attention. We propose a theoretically grounded method to incorporate unbalancedness into **any** Monge map estimator. We improve existing estimators to model cell trajectories over time and to predict cellular responses to perturbations. Moreover, our approach seamlessly integrates with the OT flow matching (OT-FM) framework. While we show that OT-FM performs competitively in image translation, we further improve performance by incorporating unbalancedness (UOT-FM), which better preserves relevant features. We hence establish UOT-FM as a principled method for unpaired image translation._
---

</br>

</br>

# Neural Monge Maps:   

</br>

Unpaired domain translation aims to transform data from a source to a target distribution without access to paired training samples. This setting poses the significant challenge of achieving a meaningful translation between distributions while retaining relevant input features. Although there are many ways to define the desired properties of such a transformation, **optimal transport** (OT) offers a natural framework by matching samples across distributions in the most cost-efficient way. If this optimal correspondence can be formulated as a map, such a map is known as a Monge map.


</br>

<p align="center" width="100%">
    <img width="33%" src="/publications/ICLR24_Unbalancedness/motivation_1.png">
</p>

</br>

---

</br>

# Incorporating Unbalancedness:   

</br>

Neural Monge maps have been successfully applied to a variety of domain translation tasks. However, optimal transport assumes a static marginal distribution, which can limit its application as it cannot account for **[i]** outliers and **[ii]** undesired distribution shifts, e.g. class imbalance between source and target distribtuion as in the example above. **Unbalanced** OT (UOT) overcomes these limitations by replacing the conservation of mass constraint with a penalization on mass deviations as seen in the following:

</br>

![text](/publications/ICLR24_Unbalancedness/motivation_2.png)

</br>

However, existing methods for estimating neural Monge maps with unbalancedness are limited. In light of these limitations, we introduce a new framework for incorporating unbalancedness into **any** neural Monge map estimator based on a re-scaling scheme. We motivate our approach theoretically and propose the concept of an **unbalanced Monge map**.

</br>

![text](/publications/ICLR24_Unbalancedness/motivation_3.png)

</br>

We show that with our method we can mimic the behaviour of discrete UOT for any neural Monge map estimator. This also seamlessly integrates with the _OT Flow Matching_ (OT-FM) framework as shown above.

</br>

![text](/publications/ICLR24_Unbalancedness/unbalancedness_teaser.png)

</br>

---

</br>

# Applications:   

</br>

We demonstrate the importance of learning unbalanced Monge maps on three different domain translation tasks leveraging three different (balanced) Monge map estimators, which showcases the flexibility of our proposed method.

</br>

We demonstrate that unbalancedness enhances the performance in all three of these settings. In particular, We apply our method to existing estimators across two unpaired __single-cell translation__ settings. Here, we show how unbalancedness is crucial in recovering meaningful single-cell __trajectories over time__ with _OT-ICNN_ and in predicting cellular responses to __cell perturbations__ with _Monge Gap_. Moreover, we demonstrate that while OT-FM performs competitively in __unpaired image translation__, unbalancedness (UOT-FM) further elevates these results and better preserves relevant input features.

</br>

![text](/publications/ICLR24_Unbalancedness/celeba256_samples.png)

</br>

Lastly, we show that unbalancedness also improves performance in the __image generation__ setting. In particular, a small amount of unbalancedness with UOT-FM improves upon OT-FM on CIFAR-10 image generation. For all the details, check out the paper!