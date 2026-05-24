---
img: "/publications/DiamondMaps/teaser.png"
title: "Diamond Maps: Efficient Reward Alignment via Stochastic Flow Maps"
authors: Peter Holderrieth*, Douglas Chen*, Luca Eyring*, Ishin Shah, Giri Anantharaman, Yutong He, Zeynep Akata, Tommi Jaakkola, Nicholas Matthew Boffi, Max Simchowitz
publisher: International Conference on Machine Learning, ICML
year: 2026
month: 07
day: 01
date: "2026-07-01"
filename: DiamondMaps
arxiv: https://arxiv.org/abs/2602.05993
github: https://github.com/PeterHolderrieth/diamond_maps/
abstract: >
    Flow and diffusion models produce high-quality samples, but adapting them to user preferences or constraints post-training remains costly and brittle, a challenge commonly called reward alignment. We argue that efficient reward alignment should be a property of the generative model itself, not an afterthought, and redesign the model for adaptability. We propose "Diamond Maps", stochastic flow map models that enable efficient and accurate alignment to arbitrary rewards at inference time. Diamond Maps amortize many simulation steps into a single-step sampler, like flow maps, while preserving the stochasticity required for optimal reward alignment. This design makes search, Sequential Monte Carlo, and guidance scalable by enabling efficient and consistent estimation of the value function. Our experiments show that Diamond Maps can be learned efficiently via distillation from GLASS Flows, achieve stronger reward alignment performance, and scale better than existing methods. Our results point toward a practical route to generative models that can be rapidly adapted to arbitrary preferences and constraints at inference time.
---
