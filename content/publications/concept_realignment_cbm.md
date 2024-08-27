---
img: "/publications/ECCV2024_concept_realignment_cbm/teaser.png"
title: Improving Intervention Efficacy via Concept Realignment in Concept Bottleneck Models
filename: concept_realignment_cbm
authors: Nishad Singhi, Jae Myung Kim, Karsten Roth, Zeynep Akata
publisher: European Conference on Computer Vision, ECCV
year: 2024
month: 10
day: 01
date: "2024-10-01"
abstract: Concept Bottleneck Models (CBMs) ground image classification on human-understandable concepts to allow for interpretable model decisions. Crucially, the CBM design inherently allows for human interventions, in which expert users are given the ability to modify potentially misaligned concept choices to influence the decision behavior of the model in an interpretable fashion. However, existing approaches often require numerous human interventions per image to achieve strong performances, posing practical challenges in scenarios where obtaining human feedback is expensive. In this paper, we find that this is noticeably driven by an independent treatment of concepts during intervention, wherein a change of one concept does not influence the use of other ones in the model's final decision. To address this issue, we introduce a trainable concept intervention realignment module, which leverages concept relations to realign concept assignments post-intervention. Across standard, real-world benchmarks, we find that concept realignment can significantly improve intervention efficacy; significantly reducing the number of interventions needed to reach a target classification performance or concept prediction accuracy. In addition, it easily integrates into existing concept-based architectures without requiring changes to the models themselves. This reduced cost of human-model collaboration is crucial to enhancing the feasibility of CBMs in resource-constrained environments.
arxiv: https://arxiv.org/pdf/2405.01531
github: https://github.com/ExplainableML/concept_realignment
---

# Introduction
The adoption of Deep Learning models to high-stakes applications is limited due to their black-box nature. Concept Bottleneck Models (CBMs) offer a solution by breaking down decisions into human-interpretable concepts, allowing for expert interventions to correct mispredictions and improve model reliability. However, CBMs often require numerous interventions to significantly boost performance, which can be costly and inefficient. 
![](/publications/ECCV2024_concept_realignment_cbm/teaser.png)

# Concept Realignment in Concept Bottleneck Models
we propose a concept intervention realignment module (CIRM), which consists of two interdependent components: (a) a concept realignment model (CRM) -- after a user intervenes on a subset of concepts S, the remaining concepts (\S) are updated by a realigner network; and (b) an intervention policy -- the concepts predicted by the realignment model are fed to the policy to suggest which concept to intervene on next. Both components are interdependent, and together form the overall concept intervention realignment module.
![](/publications/ECCV2024_concept_realignment_cbm/main.png)

# Concept Realignment Improves Intervention Efficacy
In the figure below, across all datasets, we can observe a consistent, in parts vast reduction in concept prediction loss, which measures the correct assignment of concepts for each input. For example on CUB, a tenfold reduction of the original unintervened concept loss (0.6 to 0.06) can be achieved with half the number of interventions (11 with concept realignment, 23 without). On top of that, we also find that the significant gain in intervention efficacy on a concept attribution level also translates to subsequent gains in intervention efficacy for the overall classification performance. For example on CUB, the final classification accuracy after intervening on all concepts is 93.9%, which is achieved already after 16 intervention steps. A comparable performance without concept intervention realignment requires nearly complete, 24 intervention steps, marking a 50% increase.
![](/publications/ECCV2024_concept_realignment_cbm/results.png)
To understand the impact of the realignment process qualitatively, we also provide examples in the figure below. We find that intervention on a single concept is insufficient to flip incorrect class predictions. However, as we intervene on more concepts, we can clearly see that concept realignment jointly allows concept prediction error - even on the initially worst predicted concepts - to be significantly reduced, while also reaching correct image classification with in parts less than half the number of interventions (for Crested Auklet).
![](/publications/ECCV2024_concept_realignment_cbm/qualitative.png)

# Want to know more?
For many more details, background, and analysis, please check out our paper to be published in ECCV 2024! It is available at [https://arxiv.org/abs/2407.10910](https://arxiv.org/pdf/2405.01531). If you are attending, we are always excited to discuss and answer questions. Our code is available on GitHub as well, at [https://github.com/ExplainableML/concept_realignment](https://github.com/ExplainableML/concept_realignment).
