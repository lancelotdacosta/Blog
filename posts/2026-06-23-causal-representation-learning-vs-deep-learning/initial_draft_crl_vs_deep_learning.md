# Thoughts on causal representation learning vs deep learning

## Email I sent to Felix Leeb - 30.08.25

I’ve been thinking more about the relationship between deep learning and causal representation learning (CRL), and I’m a bit confused. For example:

Both approaches train models on data using maximum likelihood.

In deep learning, the focus is on mapping inputs to outputs, whereas in CRL (if I understand correctly), the goal is to identify a generative model.

But if we parameterize a generative model with a neural network and train it with maximum likelihood, that feels quite close to CRL. The difference seems to be that for neural nets we do conditional maximum likelihood, where we map input to output, while for CRL and generative models we do maximum likelihood, which scores a generative model.

Of course, CRL emphasizes that the variables have intrinsic meaning, and that the connections between them are also meaningful. There’s also the idea that the graph should be sparse. But to me, the former seems closely related to interpretability — and interpretability usually requires the model to be small. A very large causal model may not be so interpretable after all.

Of course sparsity helps for interpretability and there is the common belief that the world is sparse so that our model should be sparse as well. When trying to find sparse models one useful relaxation is to allow connection weights to take continuous values (rather than just 0 or 1, i.e. “connected” or “not connected”) so that gradient descent can be used to identify the right connection patterns. But if we do that, it seems like we recover deep learning. Of course, deep nets are often overly complex and over-parameterized, but then it sounds like CRL is really about searching for the simplest architectures or solutions that fit the data, which seems like same goal.

So, it feels like whether we start from deep learning or from CRL, the goal is essentially the same: fit the data while minimizing complexity (i.e. fitting the data and architecture search). Deep learning tends to start from over-parameterized models and (hopefully) prune or discover useful sub-models through gradient descent, while CRL builds the model from scratch by identifying the right variables and graph. But in the end, both seem to be aiming for the same thing. And in particular, the continuous relaxation of connection weights in deep learning is practically quite useful as it allows continuous optimisation.

## Potential consequence

There is no difference between causal representation learning and deep learning. Both aim at the same thing: the difference is in the optimization. Deep learning starts with an overparametrized model and a continuous relaxation of the problem, trying to find the best sub-models, while causal representation learning aims to identify the right variables and causal relationships from scratch [Question: How is the optimization done there?]. In other words, both aim at maximum likelihood while minimizing complexity (in deep learning, minimal complexity is approached through regularisation and by ensuring generalizion on held-out data [assuming that natural data has a low Kolmogorov complexity \cite{andrewgordonwilson}, this suggests that generalization to held-out data will favor simpler solutions] while in causal representation learning, we aim for meaningful variables, and interpretability, therefore, sparsity and small model complexity). 

Then there is the Question of whether the best model is truly sparse. On the one hand, there is the belief that physical dynamics in the world are sparse. On the other hand, Beren \cite{} has an interesting take that the best model is not necessarily that sparse, wherein a small number of variables can explain a large variance in the data, but if you want to explain a lot of small-order effects then you need a lot of extra connections, which might be small in weight.

Finally, if we accept that deep learning and causal representation learning are somehow the same thing, then it begs the question: what can be done on top of that for next-generation AI? The answer is more underwhelming than previously thought. Maximum likelihood is just Bayes with a flat prior rather than with the indicator function prior and uncertainty. The only actual difference between maximum likelihood and Bayes is the presence of uncertainty. If we incorporate uncertainty and we can do that about everything including states, parameters, structure, etc., then we get curiosity for action selection and reduction in uncertainty. So, the uncertainty is important on the one hand; it's nice to have for its own sake. But perhaps alone, maximum likelihood can also amortize uncertainty -- where a proper uncertainty calculus seems to be helpful is for planning and curiosity, where it may be the case but perhaps less likely that maximum likelihood could also amortize this type of uncertainty. In any case, there is a wide belief and Bayesian mechanics concurs with this that the brain computes uncertainties and reduces uncertainty for action selection. So this seems the way to go for future AI. Therefore, the goal is to place uncertainty in a scalable way that supports decision-making. We are in the game of scalable Bayesian machine learning and decision-making. This is exactly active inference, although we can be very liberal with the choice of architecture - not limited to what we currently do use.

When it comes to architecture and actually placing uncertainty over things, we have at least three competing stacks (co-evolving stacks):
1. Program induction
2. GFlowNets
3. Probabilistic model inference (i.e., Bayesian model discovery)
The real distinction is whether we use iterative inference or amortized inference. And somehow just doing iterative inference might be slow, but could definitely be doable. [Question: Actually, are GFlow nets an instance of amortized inference? Because there is the paper of GFlow nets as doing variational inference. Answer: Gflownet training is iterative inference, while sampling is amortised]. The question really is whether this can be made to go fast, i.e., in real-time. It's going to be for sure very good at getting some very accurate posteriors. But maybe this is at the cost of forever being slow? I guess I wonder how fast is state-of-the-art training of deep nets? If this can be made to be very fast and there is no reason why GFlow nets could not be fast, therefore this would be pretty unbeatable because you have both an extremely accurate posterior and fast dynamics. If there is a fundamental bottleneck there, then it seems like we should explore faster and less accurate approaches for posterior estimation, such as small particles. And it looks like in our working memory we just have a small number of hypotheses at any one time. However, the 1000 brain theory suggests that we have in parallel hundreds of thousands of hypotheses at any one time. Question: Need to check whether the 1000 Brains theory actually suggests that these cortical columns are each a different hypothesis for the world model. If that's the case, then it can be that the multiple models that we have in consciousness (a small number) is just an attention operator on the thousands of models that we have subconsciously. Q: And then the question becomes, how do these models co-evolve? I guess the answer is by variational inference. But can we say anything about whether their dynamics resemble, say, Stein variational gradient descent or GFlow Net gradient descent, or something else? Do these particles evolve independently or together? It sounds like they each should have an independent mechanism, but I'm not sure. Q: How are they connected? This could help shed light on how they talk to each other.
[Q: How do GFlow Nets explore the multiple modes of the posterior?]

## Upshot

The foci should be on:
- Bayesian inference over candidate spaces. Focusing on programs and probabilistic models with the requirement that have good tracking of uncertainty. 
  - GflowNets should be considered
  - Might be interesting to consider diffusion models and other probabilistic models, if we can have uncertainty there too. Like models that can approximate complex distributions.
  - Thousand brains theory of intelligence
- decision making, harnessing the uncertainty.





