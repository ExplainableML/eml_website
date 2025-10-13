---
img: "/publications/HyperNoise/teaser.png"
title: "Noise Hypernetworks: Amortizing Test-Time Compute in Diffusion Models"
authors: Luca Eyring, Shyamgopal Karthik, Alexey Dosovitskiy, Nataniel Ruiz, Zeynep Akata
publisher: Neural Information Processing Systems, NeurIPS
year: 2025
date: "2025-12-08"
filename: HyperNoise
arxiv: https://arxiv.org/abs/2508.09968
github: https://github.com/ExplainableML/HyperNoise

abstract: The new paradigm of test-time scaling has yielded remarkable breakthroughs in Large Language Models (LLMs) and in generative vision models, allowing models to allocate additional computation during inference to effectively tackle increasingly complex problems. Despite the improvements of this approach, an important limitation emerges: the substantial increase in computation time makes the process slow and impractical for many applications. Given the success of this paradigm and its growing usage, we seek to preserve its benefits while eschewing the inference overhead. In this work we propose one solution to the critical problem of integrating test-time scaling knowledge into a model during post-training. Specifically, we replace reward guided test-time noise optimization in diffusion models with a Noise Hypernetwork that modulates initial input noise. We propose a theoretically grounded framework for learning this reward-tilted distribution for distilled generators, through a tractable noise-space objective that maintains fidelity to the base model while optimizing for desired characteristics. We show that our approach recovers a substantial portion of the quality gains from explicit test-time optimization at a fraction of the computational cost.
---

</br>

</br>

![](/publications/HyperNoise/redness.png)

</br>

# Demo

We hope you found this interesting, for more results and analysis, please refer to the [paper](https://arxiv.org/abs/2508.09968), our [code](https://github.com/ExplainableML/HyperNoise), as well as the Huggingface [model](https://huggingface.co/lucaeyring/HyperNoise_Sana_Sprint_0.6B) and [demo](https://huggingface.co/spaces/multimodalart/hypernoise-sana-sprint)
