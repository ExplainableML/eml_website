---
img: "/publications/open-world-ccl.png"
title: Open World Compositional Zero-Shot Learning
authors: Massimiliano Mancini, Mohammad Ferjad Naeem, Yongqin Xian, Zeynep Akata
publisher: IEEE Conference on Computer Vision and Pattern Recognition, CVPR
year: 2021
date: "2021-03-30"
filename: open-world-compositional-zero-shot-learning
arxiv: https://arxiv.org/abs/2101.12609


abstract: "Compositional Zero-Shot learning (CZSL) requires to recognize state-object compositions unseen during training. In this work, instead of assuming prior knowledge about the unseen compositions, we operate in the open world setting, where the search space includes a large number of unseen compositions some of which might be unfeasible. In this setting, we start from the cosine similarity between visual features and compositional embeddings. After estimating the feasibility score of each composition, we use these scores to either directly mask the output space or as a margin for the cosine similarity between visual features and compositional embeddings during training. Our experiments on two standard CZSL benchmarks show that all the methods suffer severe performance degradation when applied in the open world setting. While our simple CZSL model achieves state-of-the-art performances in the closed world scenario, our feasibility scores boost the performance of our approach in the open world setting, clearly outperforming the previous state of the art." 
---

# Open World Compositional Zero-Shot Learning 
<p style="text-align:justify">Can we recognize state-object compositions (e.g. <em>wet dog</em>,<em> ripe tomato</em>) within ~30k classes? In this blog post, we describe our recent work on compositional zero-shot learning (CZSL) in the open-world scenario, where no constraints exist in the compositional space. We tackle this problem with a method, Co-CGE which assigns a feasibility score to each composition. Co-CGE uses these scores to model the relationship between objects (e.g. <em>dog</em>, <em>tomato</em>), states (e.g. <em>wet</em>, <em>ripe</em>), and their compositions, achieving the new state of the art in CZSL.</p>



## What is Compositional Zero-Shot Learning?

<p style="text-align:justify">Compositional Zero-Shot Learning (CZSL) is the task of recognizing which composition of an object (e.g. <em>dog, tomato</em>) and a state (e.g. <em>wet, ripe</em>) is present in an image. To solve this task, we are given a set of training images containing labels for objects and states of interest, in various compositions. The main challenge of this task is the lack of data. In fact, the training set contains images of a subset of all the compositions of interest (<em>e.g. </em>it may contain <em>wet dog </em>and <em>ripe tomato</em>, but not <em>wet tomato</em>), and we are asked to predict both seen and unseen compositions at test time. This is challenging since the appearance of an object strictly depends on its state (e.g. a <em>wet dog </em>is different from a <em>dry </em>one) and that not all the objects are modified in the same way by the same state (e.g. <em>wet dog </em>vs <em>wet car</em>). This makes it hard to predict the object and the state independently and thus our model must forecast how unseen compositions should look like.</p>

### From the Closed to the Open World

<p style="text-align:justify">Unseen compositions are, by definition, unseen. However, previous works assumed to at least know which unseen compositions will be present at test time. This prior knowledge, allows us to restrict the search space of the model to just seen and the known unseen compositions. As an example, consider one of the most popular CZSL benchmarks, <a href="http://web.mit.edu/phillipi/Public/states_and_transformations/index.html">MIT-States</a>. In this benchmark, we have 245 objects and 115 states, for a total of ~28k compositions. Among them, we have 1262 seen compositions, and 400 unseen ones at test time. Thus, we can restrict the search space to the 1662 known test compositions, i.e. ~6% of the full compositional space.  Unfortunately, such big restrictions of the search space come with a drawback: excluding from the output space even feasible compositions that our model may find when applied in the real world. As an example, let us suppose we have a set of objects like <em>{cat, dog, tomato} </em>and a set of states like <em>{wet, dry, ripe}. </em>If <em>wet cat </em>is neither among the seen compositions nor in the unknown test ones, it will be automatically excluded from the output space of the model and cannot be predicted (even if <em>wet cats </em>exist<em> </em>and are pretty <a href="http://www.boredpanda.com/funny-wet-cats/?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=organic">funny</a>).</p>

<p style="text-align:justify">We argue that, for building CZSL systems applicable in the real world, we need to remove the assumption of knowing the unseen compositions, working with the full compositional space (i.e. the original ~28k set). We call this scenario Open World CZSL (OW-CZSL), while the simplified setting Closed World CZSL. In OW-CZSL, our model faces a very large search space where: </p>

1. The number of unseen compositions is huge and it is hard to discriminate them (since we have zero training images).
2. Among the unseen compositions, there are less feasible compositions (e.g. <em>ripe dog</em>) that act as <em>distractors</em> for the prediction.

<p style="text-align:justify">Addressing OW-CZSL requires to both create a discriminative representation for the unseen compositions while identifying and modeling distractors. In the following, we describe how we addressed this problem by exploiting the relationships between compositions and their state-object primitives.</p>

## Compositional Cosine Graph-Embeddings (Co-CGE)

<p style="text-align:justify"><img alt="" src="/publications/owczsl/method-pami-owczsl.png" style="height:225px; width:650px" /></p>

<p style="text-align:justify"><em>Our Compositional Cosine Graph Embeddings (Co-CGE) approach for Open World CZSL.</em></p>

<p style="text-align:justify"> </p>

<p>The idea of our approach is simple:</p>

1. Project the image into a predefined semantic space.
2. Compose object and state descriptions (i.e. word embeddings) into the same semantic space.
3. Compute the compatibility (i.e. cosine similarity) between the image and the compositional embeddings to get the final predictions.

<p>Based on the implementations of each component, we name our approach Compositional Cosine Graph-Embeddings (Co-CGE).</p>

#### **Visual projection**

<p>The visual projector is a simple convolutional neural network (e.g. <a href="https://arxiv.org/pdf/1512.03385.pdf">ResNet18</a>) with a final multi-layer perception that maps the visual feature to the dimensionality of the shared embedding space.</p>

#### **Graph Embeddings**

<p style="text-align:justify">For the compositional embeddings, we seek a projection function that can extract discriminative embeddings out of each state-object composition. This projection function should be transferrable from seen to unseen compositions. Following our previous work, <a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Naeem_Learning_Graph_Embeddings_for_Compositional_Zero-Shot_Learning_CVPR_2021_paper.pdf">CGE</a>, we implement this function through a two-layer graph convolutional neural network (GCN). To explain how the graph is built, let&#39;s first consider the closed world setting. We take the set of seen<em> </em>and <em>known </em>unseen<em> </em>compositions and we create one node per state, object, and existing composition. We then connect:</p>

* States to the compositions they participate in (and vice-versa)
* Objects to the compositions they participate in (and vice-versa)
* State to objects that participate in the same composition (and vice-versa).

<p style="text-align:justify">The idea behind the graph is that we can transfer knowledge from seen to unseen compositions through graph connections. As an example, consider a setting where we have as seen compositions: {<em>wet dog, ripe tomato, small cat, wet apple</em>} and as unseen {<em>wet cat</em>}. The representation of the state <em>wet </em>and the object <em>cat </em>are refined within the GCN exploiting the supervision coming from <em>wet dog, wet apple,</em> and <em>small cat. </em>At the same time, those representations are the same that will be used to influence the final embedding of <em>wet cat</em>. This strategy shows amazing results in the closed world. However, how can we connect nodes in the open-world setting where we have no knowledge about test-time unseen compositions? Things get trickier and we need to prune out some connections by exploiting feasibility scores.</p>

#### **Feasibility scores computation**

<p style="text-align:justify">Feasibility scores are values that tell us how likely is to encounter a given composition in the real world. For instance, we should expect <em>wet tomato </em>to have a high feasibility score, while <em>ripe dog </em>to have a pretty low one. We found that it is unclear how to obtain such values from knowledge bases, due to possible missing entries (e.g. <em>dry dog </em>in <a href="https://conceptnet.io/c/en/dry_dog">ConceptNet</a>), and language models, due to misleading co-occurrences (e.g. <em>cored dog </em>due to <em>cored &quot;hot&quot; dog</em>). A possible solution is to go visual, and this is the solution we follow in this work and our previous one, <a href="http://openaccess.thecvf.com/content/CVPR2021/papers/Mancini_Open_World_Compositional_Zero-Shot_Learning_CVPR_2021_paper.pdf">CompCos</a>.</p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/feasibility.gif" style="height:365px; width:650px" /></p>

<p style="text-align:justify"><em>The idea behind the computation of the feasibility scores through visual information.</em></p>

<p style="text-align:justify"><br />
A <em>dog </em>and a <em>cat </em>are quite similar, right? We can then assume that every state that can be applied to a dog (e.g. <em>dry </em>in the example above) can be applied to cats and vice-versa. Let us suppose we want to compute the feasibility score of <em>wet tomato</em>. We take the graph embedding of tomato and we compute its cosine-similarity with the embeddings of all other objects paired with the state <em>wet </em>in the set of seen compositions (e.g. <em>wet dog, wet apple</em>) since those are the only certain knowledge we can rely on. Our object-based feasibility score is then the maximum of such similarity values (in this case, likely the similarity between <em>tomato</em> and <em>apple</em>). Note that, from the example above, if we check the feasibility score for <em>ripe dog </em>we get a low score, as the cosine similarity between <em>dog</em> and <em>tomato</em> embeddings should be very low to their very different visual appearance. We repeat the same process for the point of view of the states (e.g. for <em>wet tomato </em>we would have checked the similarity between <em>wet </em>and <em>ripe </em>in the above example) and we average these values to get the final feasibility scores. The full process is depicted below.</p>

<p style="text-align:justify"> </p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/feasibility-computation-crop.gif" style="height:397px; width:679px" /></p>

<p style="text-align:justify"><em>Example of feasibility scores computation (object side) through cosine similarity among embeddings. Yellow denotes seen compositions.</em></p>

<p style="text-align:justify"> </p>

<p style="text-align:justify"><strong>Exploiting the feasibility scores</strong></p>

<p style="text-align:justify">Now that we obtained an estimate of the feasibility of each unseen composition, we can use these estimates to enrich our model. In particular, we use the feasibility scores in two ways.</p>

<p style="text-align:justify"><strong>Graph connections. </strong>The first is to change the graph connections. In particular, we consider as valid all compositions whose feasibility score is positive. We then consider all valid compositions to build the graph,  as previously described but by setting the weight of some of the edges equal to the feasibility scores. In particular, we replace with use the feasibility scores for: </p>

1. The connections between states and objects
2. The connection from compositions to their primitives (i.e. object and states)

<p style="text-align:justify">In this way, the objects and states representations are less influenced by less feasible compositions. We found this to be largely beneficial for the final performance of our model. The graph is updated over time as we get improved estimates of state and object embeddings.</p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/graph.png" style="height:366px; width:650px" /></p>

<p style="text-align:justify"><em>Graph connections update through the feasibility scores (pink bars). Connections linked to less feasible compositions (ripe dog) are weaker (dashed lines on the right).</em></p>

<p style="text-align:justify"> </p>

<p style="text-align:justify"><strong>Loss function. </strong>We follow CompCos and we train the model using a classification loss where the score of a composition is the cosine similarity between the image embedding and the composition embeddings.</p>

## Results

<p style="text-align:justify">We test our model on various challenging benchmarks, namely:</p>

* <a href="http://web.mit.edu/phillipi/Public/states_and_transformations/index.html">MIT-States</a>, containing photos of 245 objects in 115 states;
* <a href="http://vision.cs.utexas.edu/projects/finegrained/utzap50k/">UT-Zappos</a>, a dataset of shoes with 12 types and 16 attributes;
* <a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Naeem_Learning_Graph_Embeddings_for_Compositional_Zero-Shot_Learning_CVPR_2021_paper.pdf">C-GQA</a>, a recently proposed large-scale benchmark with 870 objects in 453 states.

<p style="text-align:justify">We compare our approach with multiple state-of-the-art methods:</p>

* <a href="https://www.ri.cmu.edu/wp-content/uploads/2017/12/composing_cvpr17.pdf">LabelEmbed</a>
* <a href="https://openaccess.thecvf.com/content_ECCV_2018/papers/Tushar_Nagarajan_Attributes_as_Operators_ECCV_2018_paper.pdf">Attribute as Operators (AoP)</a>
* <a href="https://openaccess.thecvf.com/content_ICCV_2019/papers/Purushwalkam_Task-Driven_Modular_Networks_for_Zero-Shot_Compositional_Learning_ICCV_2019_paper.pdf">Task modular Networks (TMN)</a>
* <a href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Li_Symmetry_and_Group_in_Attribute-Object_Compositions_CVPR_2020_paper.pdf">SymNet</a>

<p style="text-align:justify">Moreover, we compare our model with our previously proposed compositional graph embedding for the closed world setting (<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Naeem_Learning_Graph_Embeddings_for_Compositional_Zero-Shot_Learning_CVPR_2021_paper.pdf">CGE</a>) and our compositional cosine logits approach (<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Mancini_Open_World_Compositional_Zero-Shot_Learning_CVPR_2021_paper.pdf">CompCos</a>) firstly adopted for the open-world setting.</p>

<p style="text-align:justify">Overall, the results show that our full method is the best or comparable to the best in all datasets for the closed world:</p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/cw-results.png" style="height:366px; width:650px" /></p>

<p style="text-align:justify"><em>Results for Closed World CZSL, the superscript CW indicates no use of feasibility scores, the subscript ff indicates no fine-tuning.</em></p>

<p style="text-align:justify"> </p>

<p style="text-align:justify">while being superior to all other approaches in the open-world setting:</p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/ow-results.png" style="height:366px; width:650px" /></p>

<p style="text-align:justify"><em>Results for Open World CZSL, the superscript CW indicates no use of feasibility scores, the subscript ff indicates no fine-tuning.</em></p>

<p style="text-align:justify"> </p>

<p style="text-align:justify">It is interesting to highlight how modeling the feasibility of each unseen composition is crucial to achieving reliable predictions. For instance, while our model without feasibility scores (Co-CGE^CW) classifies a <em>wrinkled elephant </em>as a <em>coiled </em>one or a <em>brown bun </em>as a <em>glazed blanket</em>, our full model (Co-CGE) correctly classifies both instances. Of course, our model is still not perfect, but it gives more reasonable predictions when it fails than its closed-world counterpart, as predicting a <em>small snake </em>rather than a <em>rusty </em>one, or a <em>sliced chicken </em>rather than a <em>viscous </em>one (see examples below).</p>

<p style="text-align:justify"><img alt="" src="/publications/owczsl/qualitatives-cocge.png" style="height:408px; width:640px" /></p>

<p style="text-align:justify"><em>Qualitative results of our model with (Co-CGE) and without Co-CGE^CW) using feasibility scores for sample images of MIT-States (top) and C-GQA (bottom).</em></p>

<p style="text-align:justify"> </p>

## Conclusions

<p style="text-align:justify">In this post, we discussed Co-CGE, our recent approach for open-world compositional zero-shot learning. Co-CGE models the relationship between primitives and compositions through a graph convolutional neural network. Co-CGE models the feasibility of a state-object composition by using the visual information available in the training set, incorporating feasibility scores in two ways: as margins for a cross-entropy loss and as weights for the graph connections. The results of Co-CGE on various benchmarks and settings, clearly show the promise of such an approach.</p>

<p style="text-align:justify">In the future, it would be interesting to explore other ways of computing the feasibility scores (e.g. through external knowledge) and of incorporating them within the model.<br />
<br />
You can find more details of this post in our <a href="https://arxiv.org/pdf/2105.01017.pdf">paper</a> and try out some of our CZSL models <a href="https://github.com/ExplainableML/czsl">here</a>.</p>



