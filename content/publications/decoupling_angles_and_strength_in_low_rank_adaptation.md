---
img: "/publications/decoupling.png"
title: "Decoupling Angles and Strength in Low-rank Adaptation"
filename: decoupling_angles_and_strength_in_low_rank_adaptation
authors: Massimo Bini, Leander Girrbach, Zeynep Akata
publisher: International Conference on Learning Representations, ICLR
year: 2025
month: 01
day: 22
date: "2025-01-22"
abstract: Parameter Efficient FineTuning (PEFT) methods have recently gained extreme popularity thanks to the vast availability of large-scale models, allowing to quickly adapt pretrained models to downstream tasks with minimal computational costs. However, current additive finetuning methods such as LoRA show low robustness to prolonged training and hyperparameter choices, not allowing for optimal out-of-the-box usage. On the other hand, multiplicative and bounded approaches such as ETHER, even if providing higher robustness, only allow for extremely low-rank adaptations and are limited to a fixed-strength transformation, hindering the expressive power of the adaptation. In this work, we propose the DeLoRA finetuning method that first normalizes and then scales the learnable low-rank matrices, thus effectively bounding the transformation strength, which leads to increased hyperparameter robustness at no cost in performance. We show that this proposed approach effectively and consistently improves over popular PEFT methods by evaluating our method on two finetuning tasks, subject-driven image generation and LLM instruction tuning.
---
