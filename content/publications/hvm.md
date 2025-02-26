---
img: "/publications/ICLR25_HVM/hvm.png"
title: "Building, Reusing, and Generalizing Abstract Representations from Concrete Sequences"
filename: hvm
authors: Shuchen Wu, Mirko Thalmann, Peter Dayan, Zeynep Akata, Eric Schulz
publisher: International Conference on Learning Representations, ICLR
year: 2025
month: 04
day: 26
date: "2025-04-26"
abstract: Humans excel at learning abstract patterns across different sequences, filtering out irrelevant details, and transferring these generalized concepts to new sequences. In contrast, many sequence learning models lack the ability to abstract, which leads to memory inefficiency and poor transfer. We introduce a non-parametric hierarchical variable learning model (HVM) that learns chunks from sequences and abstracts contextually similar chunks as variables. HVM efficiently organizes memory while uncovering abstractions, leading to compact sequence representations.  When learning on language datasets such as babyLM, HVM learns a more efficient dictionary than standard compression algorithms such as Lempel-Ziv. In a sequence recall task requiring the acquisition and transfer of variables embedded in sequences, we demonstrate HVM's sequence likelihood correlates with human recall times. In contrast, large language models (LLMs) struggle to transfer abstract variables as effectively as humans. From HVM's adjustable layer of abstraction, we demonstrate that the model realizes a precise trade-off between compression and generalization. Our work offers a cognitive model that captures the learning and transfer of abstract representations in human cognition and differentiates itself from LLMs.
arxiv: https://arxiv.org/abs/2410.21332
github: https://github.com/swu32/HVM
---

</br>
</br>

## Overview

</br>

Abstraction plays a key role in intelligence. Philosophers traditionally view abstract ideas as formed by identifying commonalities across experiences, distilled from concrete impressions grounded in perception. Psychologists suggest that abstraction arises from personal experiences, such as forming the concept of whiteness by observing various white objects. Abstract concepts are thought to build on concrete concepts and on top of the previously learned abstractions, thereby varying in complexity. The ability to abstract, which is often seen as a human-specific trait, enables reasoning, generalization, and problem-solving in novel contexts.

</br>

We hypothesize that the world contains patterns across scales of time and abstraction. Intelligent agents-facing sequences with nested hierarchical structures- need to model these structures to store, process, and interact in such environments. As a rational strategy, intelligent agents shall characterize the temporal structure via chunking and characterize the abstract structure via identifying  different items that play similar roles. To explore these operations, we design a generative model that produces sequences nested with hierarchical structure and propose an approximate recognition model that conjunctively learns to chunk and abstract.

</br>

We go beyond previous proposals that introduce chunking as a mechanism for learning to compose complex structures from elementary perceptual units and propose a cognitive model that combines chunking and abstraction in one single system. The model uses abstraction in two key ways: first, by identifying shared features to facilitate efficient pattern retrieval%, such as recognizing patterns from learned animals when fur is observed; and second, by categorizing different sequential items that appear in the same context, much like a variable in a computer program. 

</br>

We first demonstrate the benefits of abstraction in memory efficiency and sequence parsing by comparing our algorithm with previous chunking models and other dictionary-based compression methods. Then, we show that the model exhibits human-like signatures of abstraction in a memory experiment requiring the transfer of abstract concepts. In the same experiment, we contrast the model's generalization behavior with large language models (LLMs). Additionally, we demonstrate the connection between abstraction level and abstract concept transfer by varying the level of abstraction as a parameter in the model. Our work offers a cognitive model that captures the learning and transfer of abstract representations in human cognition and differentiates itself from the behavior of artificial agents.