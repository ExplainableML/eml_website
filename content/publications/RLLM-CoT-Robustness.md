---
img: "/publications/RLLM_CoT_Robustness/modelfigure2.png"
title: "Are Reasoning LLMs Robust to Interventions on Their Chain-of-Thought?"
authors: Alexander von Recum, Leander Girrbach, Zeynep Akata
publisher: International Conference on Learning Representations, ICLR
year: 2026
month: 04
day: 23
date: "2026-04-23"
filename: RLLM-CoT-Robustness
arxiv: https://arxiv.org/abs/2602.07470
github: https://github.com/ExplainableML/RLLM-CoT-Robustness
abstract: >
    Reasoning LLMs (RLLMs) generate step-by-step chains of thought (CoTs) before giving an answer, which improves performance on complex tasks and makes reasoning transparent. But how robust are these reasoning traces to disruptions that occur within them? To address this question, we introduce a controlled evaluation framework that perturbs a model's own CoT at fixed timesteps. We design seven interventions (benign, neutral, and adversarial) and apply them to multiple open-weight RLLMs across Math, Science, and Logic tasks. Our results show that RLLMs are generally robust, reliably recovering from diverse perturbations, with robustness improving with model size and degrading when interventions occur early. However, robustness is not style-invariant: paraphrasing suppresses doubt-like expressions and reduces performance, while other interventions trigger doubt and support recovery. Recovery also carries a cost: neutral and adversarial noise can inflate CoT length by more than 200%, whereas paraphrasing shortens traces but harms accuracy. These findings provide new evidence on how RLLMs maintain reasoning integrity, identify doubt as a central recovery mechanism, and highlight trade-offs between robustness and efficiency that future training methods should address.
---
