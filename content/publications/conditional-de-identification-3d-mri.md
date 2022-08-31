---
img: "/publications/Lennart_3D_MRI.png"
title: "Conditional De-Identification of 3D Magnetic Resonance Images"
authors: Lennart Van der Goten, Tobias Hepp, Zeynep Akata, Kevin Smith
publisher: British Machine Vision Conference, BMVC
year: 2021
date: "2021-10-01"
arxiv: https://arxiv.org/pdf/2110.09927.pdf
filename: conditional-de-identification-3d-mri

abstract: Privacy protection of medical image data is challenging. Even if metadata is removed, brain scans are vulnerable to attacks that match renderings of the face to facial image databases. Solutions have been developed to de-identify diagnostic scans by obfuscating or removing parts of the face. However, these solutions either fail to reliably hide the patient’s identity or are so aggressive that they impair further analyses. We propose a new class of de-identification techniques that, instead of removing facial features, remodels them. Our solution relies on a conditional multi-scale GAN architecture. It takes a patient’s MRI scan as input and generates a 3D volume conditioned on the patient’s brain, which is preserved exactly, but where the face has been de-identified through remodeling. We demonstrate that our approach preserves privacy far better than existing techniques, without compromising downstream medical analyses. Analyses were run on the OASIS-3 and ADNI corpora.
---

