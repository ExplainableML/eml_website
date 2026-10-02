---
img: "/publications/NeurIPS2026_CapTrack/forgetting_by_stage.png"
title: "CapTrack: Multifaceted Evaluation of Forgetting in LLM Post-Training"
authors: Lukas Thede, Stefan Winzeck, Zeynep Akata, Jonathan Richard Schwarz
publisher: Neural Information Processing Systems, NeurIPS (Evaluations & Datasets Track)
year: 2026
month: 12
day: 08
date: "2026-12-08"
filename: CapTrack
arxiv: https://arxiv.org/abs/2603.06610
github: https://github.com/thomsonreuters/captrack
huggingface: https://huggingface.co/datasets/tri-fair-lab/captrack
abstract: >
    Large language model (LLM) post-training enhances latent skills, unlocks value alignment, improves performance, and enables domain adaptation. Unfortunately, post-training is known to induce forgetting, especially in the ubiquitous use-case of leveraging third-party pre-trained models, which is typically understood as a loss of parametric or factual knowledge. We argue that this accuracy-centric view is insufficient for modern foundation models and instead define forgetting as systematic model drift that degrades behavior and user experience. In this context, we introduce CapTrack, a capability-centric framework for analyzing forgetting in LLMs that combines a behavioral taxonomy with an evaluation suite centered on capability-specific metrics. Using CapTrack, we conduct a large-scale empirical study across post-training algorithms, domains, and model families, including models up to 80B parameters. We find that forgetting extends beyond parametric knowledge, with pronounced drift in robustness and default behaviors. Instruction fine-tuning induces the strongest relative drift, while preference optimization is more conservative and can partially recover lost capabilities. Differences across model families persist, and no universal mitigation emerges.
---

</br>

</br>

# Forgetting Is More Than Losing Facts

</br>

Post-training is how a general-purpose LLM becomes useful for a specific application. In practice, most teams start from a third-party model that has already been carefully aligned and adapt it further with instruction fine-tuning or preference optimization on their own data. It is well known that this can lead to forgetting. So far, forgetting has mostly been measured as a drop on knowledge benchmarks such as MMLU, a view inherited from continual learning in computer vision, where a single accuracy number was all that mattered.

</br>

For modern LLMs, this view leaves out a lot. Take a Qwen 3 Next 80B model post-trained on legal data. On standard benchmarks it looks perfectly stable, with +0.4% on MMLU-Pro and +0.7% on IFEval. At the same time, its multilingual robustness drops by 16.4% and its verbosity by 4.3%. A user would notice these changes, but an accuracy-centric evaluation would not. In CapTrack, we therefore define forgetting more broadly as any systematic drift from the original model that harms its capabilities, its default behavior, or its reliability.

</br>

---

</br>

# CAN, WILL, and HOW

</br>

CapTrack organizes LLM behavior into three groups of capabilities:

* __CAN (latent competence):__ what the model can do when prompted ideally. This covers knowledge, reasoning, contextual comprehension, faithfulness, and robustness to rephrasing, domain shift, and other languages.
* __WILL (default behavioral preferences):__ what the model tends to do by default, such as whether it answers or refuses, how much information it gives, how verbose it is, and how it formats its responses.
* __HOW (protocol compliance and execution):__ how reliably the model follows instructions and interaction protocols, including output formats, tool use, multi-turn consistency, long contexts, and citations.

</br>

Keeping these groups apart matters because they drift in very different ways, and a single averaged score would hide those differences.

</br>

![CapTrack taxonomy](/publications/NeurIPS2026_CapTrack/taxonomy.png)

*The CapTrack taxonomy and evaluation suite. Each capability is mapped to established benchmarks and capability-specific metrics.*

</br>

Instead of building yet another benchmark from scratch, CapTrack maps 28 established benchmarks onto this taxonomy and adds targeted adaptations. Examples include schema-wrapped questions that test output formats, underspecified prompts that test compliance, and rephrased variants that test robustness. The result is a suite of about 19.3k samples that remains practical to run on large models, and new benchmarks can be plugged in as older ones saturate. All results are reported relative to the original out-of-the-box model, which makes drift comparable across very different metrics.

</br>

---

</br>

# What Post-Training Really Changes

</br>

We apply CapTrack to seven instruction-tuned models from the Qwen 3, Gemma 3, and Llama 3.1/3.3 families, ranging from 4B to 80B parameters. Each model is post-trained on mixtures of general and domain-specific data for the legal and medical domains, using instruction fine-tuning (IFT), direct preference optimization (DPO), or IFT followed by DPO.

</br>

![Forgetting across post-training stages](/publications/NeurIPS2026_CapTrack/forgetting_by_stage.png)

*Average forgetting per capability group after each post-training stage, relative to the original model (higher is better).*

</br>

The first finding is that forgetting goes far beyond knowledge. Latent competence degrades only moderately on average, while the largest drops appear in robustness and in default behaviors such as refusal, response coverage, and style. Protocol compliance is more stable but still suffers, especially in multi-turn consistency and citations. The choice of algorithm matters as well. IFT causes by far the strongest drift, whereas DPO is much more conservative and can even recover part of what IFT lost when it is applied afterwards. A controlled experiment with matched training conditions confirms that this difference comes from the algorithm and not from the data.

</br>

<p align="center">
  <img src="/publications/NeurIPS2026_CapTrack/family_profiles.png" width="60%">
</p>

*Forgetting profiles per model family in the legal domain. Points closer to the center indicate more severe forgetting.*

</br>

Looking at individual capabilities reveals large differences between model families. After IFT, Llama and Gemma models give much shorter and less structured answers, with verbosity dropping by more than 35% and formatting by more than 40%. Gemma also becomes far more likely to refuse underspecified requests, and Llama loses up to 29% in multilingual robustness. Qwen models are generally more stable, although their multilingual robustness suffers too. Model size, on the other hand, offers no consistent protection against forgetting.

</br>

---

</br>

# Can We Prevent It?

</br>

We also test common mitigation strategies. A natural guess is that forgetting comes from the domain-specific data itself. However, replacing the legal data with an equally large sample of general-purpose data from Tulu 3 does not reliably help. Some capabilities improve while others get worse, which suggests that forgetting depends on finer properties of the data rather than on its domain.

</br>

Regularization tells a similar story. Model merging and LoRA both reduce forgetting, but only by limiting how much the model learns about the new domain. The more weight we give to the post-trained model, or the higher the LoRA rank, the better the in-domain performance and the stronger the forgetting. This is the classic stability-plasticity trade-off from continual learning, and neither method escapes it.

</br>

![Stability-plasticity trade-off](/publications/NeurIPS2026_CapTrack/stability_plasticity.png)

*Stability (forgetting relative to the original model) and plasticity (in-domain performance relative to full IFT) for model merging (top) and LoRA (bottom).*

</br>

---

</br>

# Takeaways

</br>

Forgetting in LLM post-training happens at the level of capabilities. Knowledge benchmarks alone miss most of it, and the changes users are most likely to notice often show up in robustness, default behavior, and multi-turn interaction. IFT is the main driver of this drift, model families differ substantially, and neither data choices nor global regularization offer an easy fix. We believe that addressing forgetting will require capability-aware methods that specifically protect the most vulnerable behaviors.

</br>

CapTrack is also not limited to post-training. It can be used to assess the side effects of any model modification, as we do for knowledge integration methods in [MedKIT](/publication/MedKIT).

</br>

The code is available on [GitHub](https://github.com/thomsonreuters/captrack) and the dataset on [Hugging Face](https://huggingface.co/datasets/tri-fair-lab/captrack).
