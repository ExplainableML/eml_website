---
img: "/publications/NeurIPS2026_MedKIT/pipeline.png"
title: "MedKIT: Evaluating Knowledge Integration and Generalization in Large Language Models"
authors: Lukas Thede, Yash Kumar Atri, David Chen, Danielle Bitterman, Matthias Bethge, Tom Hartvigsen, Zeynep Akata
publisher: Neural Information Processing Systems, NeurIPS (Evaluations & Datasets Track)
year: 2026
month: 12
day: 08
date: "2026-12-08"
filename: MedKIT
arxiv: https://arxiv.org/abs/2609.38543
github: https://github.com/bethgelab/MedKIT
huggingface: https://huggingface.co/datasets/bethgelab/MedKIT
abstract: >
    Constantly evolving real-world knowledge necessitates models to be updated continuously. Especially in medicine, as clinical evidence changes over time, outdated knowledge can pose safety risks. Existing evaluations of knowledge integration focus on factual recall, offering limited insight into whether newly integrated knowledge is actually usable. Our benchmark MedKIT (Medical Knowledge Integration and Transfer) provides a granular evaluation of how models integrate and apply knowledge under realistic sequences of clinical updates. Each instance corresponds to a factual update derived from clinical evidence, paired with targeted probes that assess transfer across lexical variation, relational transformations, compositional reasoning, and open-ended operationalization, as well as locality tests for knowledge preservation. Using MedKIT, we conduct a large-scale empirical study of 12 knowledge integration strategies across 5 diverse models, including both general-purpose and medical LLMs. Our results reveal a consistent gap between recall and usable knowledge: while most methods achieve strong gains on the original update task and under lexical variation, relational generalization is limited, and no method yields meaningful improvements on compositional or operational tasks. These findings highlight a fundamental challenge in knowledge integration and position MedKIT as a testbed for developing methods that make newly integrated knowledge more consistently usable across tasks and contexts.
---

</br>

</br>

# Knowing a Fact Is Not the Same as Using It

</br>

Medical knowledge never stands still. New clinical trials keep shifting our understanding of which treatments work best, so a language model trained a year ago may confidently recommend a regimen that the evidence has since moved past. In a field like oncology, keeping deployed models up to date is therefore a question of safety and not just of convenience.

</br>

There are many ways to add new knowledge to an LLM after training, from knowledge editing and continual fine-tuning to retrieval-augmented generation (RAG). These methods are usually judged by whether the model can repeat the new fact when asked, sometimes with a paraphrased or multi-hop question on top. A model that has really integrated a piece of knowledge should be able to do more than that, though. It should still get the fact right when the question is turned around, reason with it when comparing treatment options, and apply it when asked for a recommendation without being reminded of it. MedKIT (Medical Knowledge Integration and Transfer) is a benchmark built to measure this gap between recall and usable knowledge.

</br>

![MedKIT construction pipeline](/publications/NeurIPS2026_MedKIT/pipeline.png)

*MedKIT turns structured clinical comparisons into factual updates. Each update is paired with probes for increasingly demanding forms of generalization and with a locality test for knowledge preservation.*

</br>

---

</br>

# Building a Benchmark from Real Clinical Evidence

</br>

MedKIT is built from HemOnc.org, a curated oncology knowledge base that records the results of clinical trials as pairwise treatment comparisons. A typical entry states that one regimen is superior, inferior, or no different compared to another for a given condition, clinical context, and endpoint, together with the publication date of the supporting study. Each of these comparisons becomes one knowledge update. In total, MedKIT contains 6,196 updates from studies published between 1960 and 2026, covering 2,135 treatment regimens across 329 conditions. Since every update carries a timestamp, the benchmark can replay how clinical evidence evolved as a realistic stream of daily, weekly, or monthly update batches.

</br>

![MedKIT statistics](/publications/NeurIPS2026_MedKIT/statistics.png)

</br>

Every update comes with seven targeted probes. The update task checks directly whether the model has learned the comparison. Four types of generalization probes then test how far that knowledge carries:

* __Lexical:__ two paraphrases of the original question.
* __Relational:__ the same comparison with the two treatments swapped, so that "A is inferior to B" has to become "B is superior to A".
* __Compositional:__ an open question that asks the model to compare two treatments for a condition and reason about their relative efficacy.
* __Operational:__ an open request for a treatment recommendation in which the update is never mentioned and has to be applied implicitly.

A final locality probe asks about a similar but independent fact from the same oncology group to check that nothing else was damaged along the way. All templates were designed together with a clinician, and the LLM judge we use for the open-ended answers was validated against the ratings of two independent clinicians.

</br>

---

</br>

# Recall Goes Up, Generalization Does Not

</br>

We evaluate 12 knowledge integration methods from three families. These are knowledge editing (AlphaEdit, MEMIT, GRACE, WISE, MEMOIR, IKE), continual post-training (LoRA-Merge, O-LoRA, SEEKR), and retrieval augmentation (BM25, dense, and agentic RAG). Each method is applied to five general-purpose and medical LLMs (Gemma-3, MedGemma, Qwen-3, Llama-3.1, and Bio-Medical-Llama-3), which receive 283 updates from 2025 onward in 48 weekly batches. Focusing on recent updates makes it unlikely that the models already saw these facts during pretraining.

</br>

![Generalization results](/publications/NeurIPS2026_MedKIT/generalization.png)

*Change in performance after integrating the updates, moving from direct recall (left) to increasingly demanding generalization tasks (right). Top row: averaged by method. Bottom row: averaged by model.*

</br>

The picture is remarkably consistent. Most methods improve clearly on the update task itself, but the gains shrink step by step as the questions move further away from the original wording. Lookup-based editors such as GRACE and IKE gain around 50 percentage points on the exact update question, yet fall back to baseline as soon as it is paraphrased. MEMOIR is the strongest editing method and holds up well under paraphrasing, but loses most of its advantage once the comparison is reversed. Parameter editors such as MEMIT and AlphaEdit become unstable over many sequential updates and even hurt compositional reasoning. Continual post-training shows the smoothest and strongest transfer overall, improving by 49 points on the update task, 36 on paraphrases, and 19 on reversed comparisons. Retrieval methods stay close to baseline throughout, held back both by imperfect retrieval and by the models' limited ability to use the evidence they find.

</br>

One result holds across all of them: no method meaningfully improves the compositional or operational tasks. This is not because these tasks are simply too hard. When we place the correct evidence directly in the model's context, performance rises by 20 to 50 points on every task type. The knowledge is usable in principle, but current integration methods do not make it usable in practice. The pattern is also the same for every model we tested, and medical models such as MedGemma behave just like their general-purpose counterparts.

</br>

---

</br>

# Holding On to What Was Learned

</br>

Integrating a single update is only part of the problem, since a deployed model has to absorb a continuous stream of them. When we revisit earlier updates after later batches have been integrated, the methods start to differ substantially.

</br>

<p align="center">
  <img src="/publications/NeurIPS2026_MedKIT/retention.png" width="50%">
</p>

*Immediate gains on the current batch (filled markers) compared to performance on earlier updates (hollow markers).*

</br>

Continual post-training achieves the largest immediate gains but loses a good part of them on earlier updates, a familiar case of catastrophic forgetting. MEMOIR shows the largest drop of all methods, while GRACE keeps its updates almost perfectly but gains much less to begin with. Retrieval remains stable because it never changes the model's weights, but it also never helps much. None of the methods achieves strong integration and stable retention at the same time.

</br>

Changing the weights can also have side effects beyond the updated facts. Parameter-editing methods spill over to neighboring oncology facts and substantially degrade the model's general capabilities, which we measure with our [CapTrack](/publication/CapTrack) framework. Continual post-training causes milder but systematic drift, while methods that leave the weights untouched stay stable.

</br>

To check that this gap is not specific to medicine, we repeat the analysis on [WikiBigEdit](/publication/wikibigedit), a benchmark of real-world Wikidata edits. The same pattern appears there as well. Direct recall improves by 38 to 75 points, but these gains largely disappear once the knowledge has to be used compositionally.

</br>

---

</br>

# Takeaways

</br>

MedKIT shows that today's knowledge integration methods are good at teaching a model to repeat a new fact and much less good at teaching it to use that fact. Updates rarely survive a change of perspective, they almost never carry over into open-ended reasoning or recommendations, and the methods that integrate knowledge best also tend to forget or interfere the most. We hope MedKIT can serve as a testbed for methods that close this gap. The benchmark is meant for research on knowledge integration and should not be used to support clinical decisions.

</br>

The dataset is available on [Hugging Face](https://huggingface.co/datasets/bethgelab/MedKIT) and the code on [GitHub](https://github.com/bethgelab/MedKIT).
