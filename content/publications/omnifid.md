---
img: "/publications/ECCV2024_omnifid/omnifid_thumbnail.png"
title: Geometry Fidelity for Spherical Images
filename: omnifid

authors: Anders Christensen, Nooshin Mojab, Khushman Patel, Karan Ahuja, Zeynep Akata, Ole Winther, Mar Gonzalez-Franco, Andrea Colaco
publisher: European Conference on Computer Vision, ECCV
year: 2024
month: 7
day: 15
date: "2024-07-15"
abstract: Spherical or omni-directional images offer an immersive visual format appealing to a wide range of computer vision applications. However, geometric properties of spherical images pose a major challenge for models and metrics designed for ordinary 2D images. Here, we show that direct application of Fréchet Inception Distance (FID) is insufficient for quantifying geometric fidelity in spherical images. We introduce two quantitative metrics accounting for geometric constraints, namely Omnidirectional FID (OmniFID) and Discontinuity Score (DS). OmniFID is an extension of FID tailored to additionally capture field-of-view requirements of the spherical format by leveraging cubemap projections. DS is a kernel-based seam alignment score of continuity across borders of 2D representations of spherical images. In experiments, OmniFID and DS quantify geometry fidelity issues that are undetected by FID.
arxiv: https://arxiv.org/abs/2407.18207
github: https://github.com/Anderschri/OmniFID
---