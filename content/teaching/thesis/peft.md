---
title: Mixture of parameter-efficient experts
description: Parameter-Efficient Fine-Tuning (PEFT) techniques can be used to achieve model specialization by introducing small, task-specific modules that are finetuned while keeping the base model frozen. This approach creates specialized versions for different applications without the need to retrain the entire model. Conversely, Mixture of Experts (MoE) models implicitly enable specialization of separate model components, called experts, through a dynamic routing mechanism. This mechanism directs different inputs to specific experts, allowing the model to develop specialized subnetworks for various types of data or subtasks. Our aim is to integrate these two techniques by combining the dynamic routing mechanism of MoE with the parameter-efficiency and modularity of PEFT methods.

contactname: Massimo Bini
contactlink: /people/massimo-bini