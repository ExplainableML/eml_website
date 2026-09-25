---
img: "/publications/APM/apm.png"
title: "APM: Evaluating Style Personalization in LLMs with Arbitrary Preference Mappings"
filename: arbitrary-preference-mappings
authors:  Philipp Spohn, Leander Girrbach, Zeynep Akata
publisher: NeurIPS
year: 2026
month: 12
day: 08
date: "2026-12-08"
arxiv: https://arxiv.org/abs/2605.21063
abstract: Typical LLM responses tend to follow a default style, even though users often have distinct preferences regarding tone, verbosity, and formality that they do not explicitly state in their prompts. Evaluating whether personalization methods can adapt to these implicit preferences is challenging, since users typically provide prompts rather than reference responses, style preferences are not factually verifiable, and reference-free LLM judges may conflate personalization with general response quality. To address these challenges,  we introduce the Arbitrary Preference Mapping (APM) benchmark, which decouples user attributes (e.g., enthusiastic) from response principles (e.g., persuasive) via a hidden, randomized mapping $\mathbf{C}$ that maps user attributes to preferences about response traits. Because $\mathbf{C}$ carries no semantic content and is resampled across runs, models cannot exploit stereotypical associations and must infer preferences from conversation history. Using this unbiased evaluation methodology, we adapt retrieval-augmented, prompt-optimization, and routing personalization methods and evaluate them on \texttt{Llama-3.1-8B} and \texttt{Qwen-3.5-27B}. Our results show that routing is the most reliable approach, while RAG only improves with the stronger base LLM, and soft prompt optimization fails to improve significantly over a non-personalized baseline. Our extensive evaluation reveals that in this realistic setting, personalization remains challenging, but our adapted methods show promise.
---