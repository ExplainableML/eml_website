---
img: "/publications/SemioLLM/SemioComMed_teaser.png"
title: "Evaluating large language models for diagnostic reasoning from unstructured clinical narratives in epilepsy"
authors: Meghal Dani, Muthu Jeyanthi Prakash, Filip Rosa, Zeynep Akata, and Stefanie Liebe
publisher: Nature Communications Medicine
year: 2026
month: 05
day: 22
date: "2026-05-22"
filename: semio-nature
pdf: https://www.nature.com/articles/s43856-026-01653-z
github: https://github.com/liebelab/semiollm
abstract: >
    ***Background:*** Large Language Models (LLMs) have been shown to encode clinical knowledge. Many evaluations, however, rely on structured question-answer benchmarks, overlooking critical challenges of interpreting and reasoning about unstructured clinical narratives in real-world settings.


    <br/>


    ***Methods:*** In this study we task eight Large Language models including two medical models (GPT-3.5, GPT-4, Mixtral-8 × 7B, Qwen-72B, LlaMa2, LlaMa3, OpenBioLLM, Med42) with a core diagnostic task in epilepsy: mapping seizure description phrases-after targeted filtering and standardization-to one of seven possible seizure onset zones using likelihood estimates. We conduct quantitative and qualitative analyses, measuring correctness, confidence, calibration, and expert-evaluated reasoning quality and source citation accuracy. Through systematic prompt-engineering and ablation studies, we assess how model performance depends on variations in prompt strategy, clinical role impersonation, narrative length, and language context.


    <br/>


    ***Results:*** Most models yield well-above chance accuracy after prompt engineering that even approaches clinician-level performance. Specifically, clinician-guided chain-of-thought reasoning leads to the most consistent improvements. Performance is further strongly modulated by clinical in-context impersonation, narrative length and language context (13.7%, 32.7% and 14.2% performance variation, respectively). However, reasoning analysis by clinical experts reveal that correct prediction can be based on hallucinated knowledge and inaccurate source citation, underscoring the need to improve interpretability of LLMs in clinical use.


    <br/>


    ***Conclusions:*** Overall, SemioLLM provides a scalable, domain-adaptable framework for evaluating LLMs in clinical disciplines where unstructured verbal descriptions encode diagnostic information. By identifying both the strengths and limitations of LLMs, our work contributes to testing the applicability of foundational AI systems for healthcare.
---
