---
img: "/publications/ICLR25_GenderBiasInVLAs/model_figure.png"
title: "Revealing and Reducing Gender Biases in Vision and Language Assistants (VLAs)"
filename: revealing_reducing_gender_biases_in_vlas
authors: Leander Girrbach, Stephan Alaniz, Yiran Huang, Trevor Darrell, Zeynep Akata
publisher: International Conference on Learning Representations, ICLR
year: 2025
month: 04
day: 26
date: "2025-04-26"
abstract: Pre-trained large language models (LLMs) have been reliably integrated with visual input for multimodal tasks. The widespread adoption of instruction-tuned image-to-text vision-language assistants (VLAs) like LLaVA and InternVL necessitates evaluating gender biases. We study gender bias in 22 popular open-source VLAs with respect to personality traits, skills, and occupations. Our results show that VLAs replicate human biases likely present in the data, such as real-world occupational imbalances. Similarly, they tend to attribute more skills and positive personality traits to women than to men, and we see a consistent tendency to associate negative personality traits with men. To eliminate the gender bias in these models, we find that finetuning-based debiasing methods achieve the best tradeoff between debiasing and retaining performance on downstream tasks. We argue for pre-deploying gender bias assessment in VLAs and motivate further development of debiasing strategies to ensure equitable societal outcomes.
arxiv: https://arxiv.org/abs/2410.19314
github: https://github.com/ExplainableML/vla-gender-bias
---

# Analyzing Gender Biases in VLAs
## Dataset
We curated an analysis dataset of 5,000 images from [FairFace](https://arxiv.org/abs/1908.04913), [MIAP](https://arxiv.org/abs/2105.02317), [Phase](https://arxiv.org/abs/2304.02828), and [PATA](https://arxiv.org/abs/2303.10431), balancing gender and ethnicity while excluding children, teenagers, and occupation-related images. To reduce potential confounding factors like occupation-related content, we automatically filter out images likely depicting recognizable jobs. Mitigating potential dataset bias aims to make the analysis more reliable.
![](/publications/ICLR25_GenderBiasInVLAs/dataset_examples.png)

## Identifying Gender Biases
To measure gender bias in VLAs, we created prompts targeting three categories: personality traits, skills, and occupations. Each prompt was designed to prevent the attribute from being inferred from the image alone and framed as a three-choice question - "yes," "no," or "unsure". The "unsure" option allows models to avoid biased outputs. The probability of the model selecting "yes" for a given prompt and image was calculated separately for male and female subsets of the dataset. We compare the average probabilities for males and females using a two-sample t-test to identify significant differences, indicating bias. Finally, we ranked models by the proportion of prompts showing significant gender differences, revealing the relative strength of bias across different VLAs.
![](/publications/ICLR25_GenderBiasInVLAs/personality_bias_gap_by_series.png)
![](/publications/ICLR25_GenderBiasInVLAs/skills_bias_gap_by_series.png)
![](/publications/ICLR25_GenderBiasInVLAs/occupation_bias_gap_by_series.png)

# Findings
Our study revealed significant gender biases in VLAs across the evaluated categores, namely personality traits, skills, and occupations. For personality traits, negative attributes like “moody” and “arrogant” are more associated with males, while positive traits show a stronger association with females. Skills also exhibit a partial gender bias, with stereotypical "male" skills like “work under pressure” and “lead” attributed to men, while women are associated with a mix of communal and agentic skills, such as “communicate effectively” and “multitask.” Occupation-related biases closely reflect real-world gender imbalances, with male-dominated roles like “construction worker” and “mechanician” attributed to men, and female-dominated roles like “nurse” and “secretary” to women, replicating real-world inequalities observed in labor statistics. Interestingly, newer and more powerful models often exhibit stronger gender-occupation biases.

# Want to know more?
For many more details, background, and analysis, please check out our paper to be published in ICLR 2025! It is available at https://arxiv.org/abs/2410.19314. If you are attending, we are always excited to discuss and answer questions. Our code is available on GitHub as well, at https://github.com/ExplainableML/vla-gender-bias.
