import { BlogTemplateProps } from "./BlogTemplate";
import { BlogCategory } from "../../utils/entitities";

export const blogs: BlogTemplateProps[] = [
    {
        img: "photo-1568952433726-3896e3881c65.jpg",
        title: "Locality Sensitive Hashing",
        summary: "Locality Sensitive Hashing (LSH) enhances attention mechanisms in machine learning, especially for tasks requiring the processing of long sequences, by addressing hardware limitations. Traditional attention mechanisms, crucial for understanding contextual relationships in data, face challenges with computational and memory demands, particularly in resource-constrained environments. LSH reduces these demands by grouping similar input elements, allowing attention to focus on relevant pairs and thus lowering computational complexity. This optimization facilitates the handling of larger datasets and complex tasks, such as text analysis and genome sequencing, on standard hardware, making advanced machine learning applications more accessible and scalable",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: String.raw `One of the downsides of restricting attention to a fixed size of tokens around the attention token is that important long range tokens which may capture more relevant information than the tokens in the direct neighborhood will be thrown away, hence leading to a significant loss of information.
        The Locality Sensitive Hashing (LSH) attention mechanism proposed by Kitaev et al. is another way to sparsify the attention matrix, however, instead of limiting attention to the direct neighborhood, it tries to compute attention only between somewhat "similar" tokens (\textcite{DBLP:journals/corr/abs-2001-04451:reformer}). 
        
        Since tokens are represented by high-dimensional embedding vectors inside the model, the goal is to formulate an algorithm that finds the $l$ nearest neighbors in high-dimensional spaces. 
        This is achieved by using a hashing function $h$ which assigns each vector $x$ to a hash $h(x)$. 
        This function is 'locality-sensitive,' meaning vectors that are close to each other are likely to have the same hash, while distant ones do not (\textcite{DBLP:journals/corr/abs-2001-04451:reformer}). 
        
        Let $R \in \mathbb{R}^{d_{model}\times \frac{b}{2}}$ be a random matrix and where $b$ is the number of hashes. 
        The hashing function $h$ can then be described as: 
        \begin{equation}
            h(x) = argmax(Concat_{row}(xR, -xR))
        \end{equation}
        Adoni et al. demonstrated that this is a practical and valid LSH schema, which is not only easy to implement but also effective for individual vectors and batches of vectors (\textcite{andoni2015practical-lsh}).
        
        We can refer to equation 23 to understand how attention is computed in a sparsified attention matrix.
        The only difference is that our set $S_i$ changes. Instead of containing the neighboring position token indices, it now consists of the tokens within the hashed bucket. However, the authors also omit for LSH-Attention the scaling factor $\sqrt{d_{model}}$ and set $Q=K$.
        Equation 23 then changes for LSH-Attention to:
        %block $\mathbf{S}_i^\mathrm{w}(Q_i,K_{S_i}) = softmax({Q_i}{K_{S_i}}^\mathrm{T})$ %block
        for each token $x_i$ while the rest of the equations 23-25 remain consistent.
        The set $S_i$ can now be depicted as:
        \begin{equation}
            S_i = \{j: h(Q_i) = h(K_j)\}
        \end{equation}
        Meaning the set $S_i$ consists of all positions $j$ such that the hash value $h(Q_i)$ equals the hash value of $h(K_j)$.
        
        The process involves organizing queries by grouping them into buckets based on their hash values and arranging them in order within each bucket. To address the issue where a bucket might have a disproportionate number of queries compared to keys, the authors recommend normalizing each query vector $Q_j$ by its magnitude, setting $K_j = \frac{Q_j}{||Q_j||}$. This adjustment ensures that the hash values for the queries $Q_j$ and the keys $K_j$ match, leading to an equal distribution of queries and keys in each bucket.
        
        Once sorted, these query-key pairs are divided into segments, each containing $m$pairs. In cases where a bucket has more than $m$ pairs, a unique attending rule applies: a query in one segment can refer to all keys in the same bucket from the previous segment, but it cannot refer to keys outside its current segment. This rule, however, doesn't apply to other queries in the same bucket; they are not allowed to refer to a key that's outside their current segment. This method is illustrated in Figure 16.`,
        id: 2
    },
   
    {
        img: "3571486.jpg",
        summary: "Sliding-window attention is a novel attention mechanism that has been proposed to address the limitations of traditional attention mechanisms in machine learning. Traditional attention mechanisms, such as the scaled dot-product attention, have been shown to be computationally expensive and memory-intensive, particularly when processing long sequences. Sliding-window attention addresses these limitations by restricting attention to a fixed-size window around the attention token, thereby reducing the computational and memory demands of the attention mechanism. This optimization makes it possible to process longer sequences on standard hardware, making advanced machine learning applications more accessible and scalable.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: String.raw `To overcome the limitations imposed by the quadratic complexity of standard attention mechanisms, it is essential to sparsify the attention matrix. This entails to design a scheme whereby each token $x_i$ for $i \in {0, 1, \ldots, n}$ attends selectively to a subset of tokens indexed by $S_i \subseteq \{0, 1, \ldots, n\}$. Such an approach ensures that not every token is attended to by every other, thereby reducing the computational burden of each attention operation. This reduction introduces a critical trade-off: the smaller the size of $S_i$, the lower the computational cost, yet with the increasing risk of omitting interactions crucial for capturing the intended semantics of the input.\\
        The selection of the subset $S_i$ need not be static but can vary depending on the token at position $i$. Our objective is to find a set of positions $S_i$ for each token such that the resulting sparsified attention matrix closely approximates the full attention matrix in the best possible way.
        $$\\$$
        One way to sparsify the attention matrix is to use sliding windows as fixed pattern around the current token $x_i$. For a fixed window size $w$ each token attends to $\frac{w}{2}$ tokens on each side (\textcite{DBLP:journals/corr/abs-2004-05150:longformer}). The set $S_i$, representing the indices of tokens within the window of $x_i$, can be formalized as: 
        \begin{equation}
           S_i = \{i-\frac{w}{2}, \ldots, i, \ldots, i+\frac{w}{2}\}
        \end{equation}
        The authors of the paper which introduced the concept explained: "Using multiple stacked layers of such windowed attention results in a large
receptive field, where top layers have access to all input locations and have the capacity to build representations that incorporate information across the
entire input, similar to CNNs"(\textcite{DBLP:journals/corr/abs-2004-05150:longformer}). This can also be seen as a giving the model an inductive bias where human assumptions are coded into the model's structure and architecture. By doing this the model is forced to learn in a specific way, here by limiting its attention to a local neighborhood. The window size $w$ may also vary across different layers and as such is a tunable hyperparameter. $$\\$$
We adjust the current computation of the attention matrix $\mathbf{S}$ with: 
\begin{equation}
    \mathbf{S}_i^\mathrm{w}(Q_i,K_{S_i}) = softmax(\frac{{Q_i}{K_{S_i}}^\mathrm{T}}{\sqrt{d_k}})
\end{equation} for each token $x_i$. To compute the final attention output $\mathbf{A}^\mathrm{w}$ we need to consider the local context of the attention matrix $\mathbf{S_i}^\mathrm{w}$ and therefore start by calculating $\mathbf{A_i}^\mathrm{w}$ as: 
\begin{equation}
    \mathbf{A_i}^\mathrm{w}(Q_i,K_{S_i},V_{S_i}) = \mathbf{S_i}^\mathrm{w}(Q_i, K_{S_i})V_{S_i}
\end{equation} 
finalize the attention output, each token-wise attention output $\mathbf{A_i}^\mathrm{w}$ is concatenated row-wise:
\begin{equation}
    \mathbf{A}^\mathrm{w}(Q,K) = Concat_{row}(\mathbf{A}_0^\mathrm{w}(Q_0, K_{S_0},V_{S_0}),\ldots,
    \mathbf{A}_n^\mathrm{w}(Q_n, K_{S_n}, V_{S_n}))
\end{equation} where $$Q_{i} \in \mathbb{R}^\mathrm{1\times d_{model}}$$  is the query vector for token $x_i$ and $ K_{S_i}  \in \mathbb{R}^\mathrm{w\times d_{model}}$ is a subset of the key matrix $K$ that corresponds to the window $S_i$ containing only the keys that token $x_i$ is allowed to attend to and finally, $ V_{S_i} \in \mathbb{R}^\mathrm{w\times d_{model}}$ the subset of the value matrix $V$. 
he sliding-window attention matrix is of shape $n\times w$ instead of $n\times n$ and the final attention output is again of shape $n\times d_{model}$

Since each token attends to $w$ other tokens the complexity of the sliding window attention mechanism can formally described as: 
\begin{equation}
    \mathbf{S^\mathrm{w}} = \mathcal{O}(nw)
\end{equation}
and thus scales linearly with the input sequence length $n$.
To ease the understanding in the following section, a set $H$ is defined which contains all the additional hyperparameters that have to be considered using the novel approaches. Currently $H$ can be described as:
\begin{align*}
    H = \{W\}
\end{align*}
where $W$ contains the window sizes $w_l$ for each layer $l$.`,
        title: "Sliding Window Attention Mechanism",
        id: 4
    }, 
    {
        img: "126.jpg",
        title: "Basics of Reinforcement Learning: Epsilon Greedy Algorithm, Optimistic Initial Values and Upper Confidence Bound",
        summary: "Reinforcement learning is a type of machine learning that involves training an agent to make decisions within an environment in order to maximize some notion of cumulative reward. The agent learns to achieve a goal in an uncertain, potentially complex environment." +
        " The agent is not told which actions to take, but instead must discover which actions yield the most reward by trying them out. In the most interesting and challenging cases, actions may affect not only the immediate reward but also the next situation and, through that, all subsequent rewards. These two characteristics -- trial-and-error search and delayed reward -- are the two most important distinguishing features of reinforcement learning. This trial and error paradigm is also known as the exploration-exploitation trade-off. The agent must exploit what it has already experienced in order to obtain reward, but it must also explore in order to make better action selections in the future. The agent must use a balance of exploration and exploitation to maximize its reward over time." +
        "The epsilon-greedy algorithm, optimistic initial values and the upper confidence bound are three  basic strategies to address the exploration-exploitation trade-off in reinforcement learning.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        content: "To be added...",
        id: 5

    }

]
