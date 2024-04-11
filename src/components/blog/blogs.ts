import { BlogTemplateProps } from "./BlogTemplate";
import { BlogCategory } from "../../utils/entitities";

export const blogs: BlogTemplateProps[] = [
    {
        img: "photo-1568952433726-3896e3881c65.jpg",
        title: "Locality Sensitive Hashing",
        summary: "Locality Sensitive Hashing (LSH) enhances attention mechanisms in machine learning, especially for tasks requiring the processing of long sequences, by addressing hardware limitations. Traditional attention mechanisms, crucial for understanding contextual relationships in data, face challenges with computational and memory demands, particularly in resource-constrained environments. LSH reduces these demands by grouping similar input elements, allowing attention to focus on relevant pairs and thus lowering computational complexity. This optimization facilitates the handling of larger datasets and complex tasks, such as text analysis and genome sequencing, on standard hardware, making advanced machine learning applications more accessible and scalable",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: [String.raw `One of the downsides of restricting attention to a fixed size of tokens around the attention token is that important long range tokens which may capture more relevant information than the tokens in the direct neighborhood will be thrown away, hence leading to a significant loss of information.
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
        
        Once sorted, these query-key pairs are divided into segments, each containing $m$pairs. In cases where a bucket has more than $m$ pairs, a unique attending rule applies: a query in one segment can refer to all keys in the same bucket from the previous segment, but it cannot refer to keys outside its current segment. This rule, however, doesn't apply to other queries in the same bucket; they are not allowed to refer to a key that's outside their current segment. This method is illustrated in Figure 16.`],
        id: 2,
        date: "2023-02-15",
    },
   
    {
        img: "3571486.jpg",
        summary: "Sliding-window attention is a novel attention mechanism that has been proposed to address the limitations of traditional attention mechanisms in machine learning. Traditional attention mechanisms, such as the scaled dot-product attention, have been shown to be computationally expensive and memory-intensive, particularly when processing long sequences. Sliding-window attention addresses these limitations by restricting attention to a fixed-size window around the attention token, thereby reducing the computational and memory demands of the attention mechanism. This optimization makes it possible to process longer sequences on standard hardware, making advanced machine learning applications more accessible and scalable.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: [String.raw `To overcome the limitations imposed by the quadratic complexity of standard attention mechanisms, it is essential to sparsify the attention matrix. This entails to design a scheme whereby each token $x_i$ for $i \in {0, 1, \ldots, n}$ attends selectively to a subset of tokens indexed by $S_i \subseteq \{0, 1, \ldots, n\}$. Such an approach ensures that not every token is attended to by every other, thereby reducing the computational burden of each attention operation. This reduction introduces a critical trade-off: the smaller the size of $S_i$, the lower the computational cost, yet with the increasing risk of omitting interactions crucial for capturing the intended semantics of the input.\\
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
where $W$ contains the window sizes $w_l$ for each layer $l$.`],
        title: "Sliding Window Attention Mechanism",
        id: 4,
        date: "2024-02-18",
    }, 
    {
        img: "126.jpg",
        title: "Reinforcement Learning: Policy Gradient Methods - Intuitive and Analytical Overview",
        summary: "Policy gradient methods are a class of reinforcement learning algorithms that directly optimize the policy of an agent to maximize its expected cumulative reward. Unlike value-based methods that estimate the value of different actions or states, policy gradient methods learn a parameterized policy that maps states to actions. This policy is then optimized using gradient ascent on the expected cumulative reward, which is also known as the objective function. Policy gradient methods have been shown to be effective in a wide range of applications, including robotics, game playing, and natural language processing." +
        "This blog article introduces the concept of policy gradient methods in reinforcement learning, providing both an intuitive and analytical overview of how these algorithms work. We will cover the basic principles of policy gradients, the advantages and disadvantages of this approach, and some common policy gradient algorithms, such as REINFORCE and Actor-Critic.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        id: 10,
        content: ["p_ac_grad.pdf"],
        date: "2024-04-04",
    },
    {
        img: "126.jpg",
        title: "Basics of Reinforcement Learning: Epsilon Greedy Algorithm, Optimistic Initial Values and Upper Confidence Bound",
        summary: "Reinforcement learning is a type of machine learning that involves training an agent to make decisions within an environment in order to maximize some notion of cumulative reward. The agent learns to achieve a goal in an uncertain, potentially complex environment." +
        " The agent is not told which actions to take, but instead must discover which actions yield the most reward by trying them out. In the most interesting and challenging cases, actions may affect not only the immediate reward but also the next situation and, through that, all subsequent rewards. These two characteristics -- trial-and-error search and delayed reward -- are the two most important distinguishing features of reinforcement learning. This trial and error paradigm is also known as the exploration-exploitation trade-off. The agent must exploit what it has already experienced in order to obtain reward, but it must also explore in order to make better action selections in the future. The agent must use a balance of exploration and exploitation to maximize its reward over time." +
        "The epsilon-greedy algorithm, optimistic initial values and the upper confidence bound are three  basic strategies to address the exploration-exploitation trade-off in reinforcement learning.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        content: [String.raw `\section{Introduction} Reinforcement learning (RL) presents a unique challenge and opportunity in the field of machine learning. Agents in an RL environment must learn how to behave by interacting with their environment, aiming to achieve the highest possible cumulative reward. The core dilemma they face is the exploration-exploitation trade-off, where they must decide between exploiting known rewards and exploring new actions that might lead to higher rewards.`,
        String.raw `\section{Epsilon Greedy} The epsilon-greedy algorithm is a straightforward yet effective approach to balance exploration and exploitation. With a probability of $1-\epsilon$, the agent selects the action that has the highest estimated reward based on past experiences (exploitation). With a probability of $\epsilon$, the agent randomly selects any action (exploration). This method ensures that the agent does not become overly focused on the actions that have worked in the past and remains open to exploring new possibilities. `,
String.raw`\section{Optimistic Initial Value} Optimistic initial values is a technique where all actions are initially assigned a high reward estimate. This optimism encourages the agent to explore each action at least once, moving towards less explored actions with potentially higher rewards than what has been experienced so far. Over time, as the agent learns more about the real rewards of actions, these estimates are adjusted to reflect the true values.`,
String.raw`\section{Upper Confidence Bound}The Upper Confidence Bound (UCB) algorithm tackles the exploration-exploitation dilemma by choosing the action that has the highest upper confidence bound on the estimated reward. The UCB for each action is calculated based on both the average reward of the action and the uncertainty or variance in its reward estimate. This approach ensures that actions are selected not just based on their average rewards but also considering the confidence level of those estimates, promoting a balance between exploring uncertain actions and exploiting known rewards.
\begin{equation}
    \text{UCB} = \bar{x}_j + \sqrt{\frac{2 \ln n}{n_j}}
\end{equation}
where $\bar{x}_j$ is the average reward of action $j$, $n$ is the total number of times any action has been selected, and $n_j$ is the number of times action $j$ has been selected.    
The exploration-exploitation trade-off is a fundamental aspect of reinforcement learning, dictating the efficiency and effectiveness of the learning process. Strategies such as the epsilon-greedy algorithm, optimistic initial values, and the Upper Confidence Bound approach provide structured ways for agents to navigate this dilemma, balancing the need to maximize immediate rewards with the imperative to discover more rewarding actions over time.
`],
        id: 5,
        date: "2024-02-20",

    },

    {
        img: "126.jpg",
        title: "Reinforcement Learning Basics: Thompson Sampling",
        summary: "Thomas Sampling is a popular algorithm for solving the exploration-exploitation trade-off in reinforcement learning. It is a Bayesian approach that leverages probability distributions to model the uncertainty in the reward estimates of different actions. The algorithm selects actions based on their probability of being the best action, taking into account both the average reward and the uncertainty in the reward estimates. This approach ensures that the agent explores actions with uncertain rewards while exploiting actions with high expected rewards. Thompson Sampling has been shown to be effective in a wide range of applications, including online advertising, recommendation systems, and healthcare.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        id: 6,
        date: "2024-02-20",
        content:[String.raw`\section{Introduction}to be added....`]
    }  ,
    {
        img: "3665587.jpg",
        title: "Jordan Canonical Form",
        summary: "The Jordan canonical form is a matrix decomposition that provides a canonical form for a matrix that is similar to a given matrix. It is a powerful tool in linear algebra and has applications in a wide range of fields, including differential equations, control theory, and quantum mechanics. The Jordan canonical form decomposes a matrix into a block-diagonal form, with each block corresponding to a Jordan block. The Jordan blocks capture the essential properties of the matrix, making it easier to analyze and understand. The Jordan canonical form is a fundamental concept in linear algebra and plays a crucial role in understanding the structure and behavior of linear transformations and matrices." +
        "I was confronted with this topic in my linear algebra course and I found it very interesting and useful. I would like to share my knowledge and understanding of the Jordan canonical form with you. This post will civer both intuition and mathematical details of the Jordan canonical form from my perspective.",
        categories: [BlogCategory.Mathematics],
        id: 7,
        date: "2024-02-20",
        content:[String.raw`\section{Introduction}to be added....`]
    },
    {
        img:"3665587.jpg",
        title: "The spectral theorem: Intuiton and Theoretical Background",
        summary: "The spectral theorem is a fundamental result in linear algebra that provides a powerful and elegant way to decompose a matrix into its eigenvalues and eigenvectors. It is a key concept in the study of linear transformations and has applications in a wide range of fields, including quantum mechanics, signal processing, and machine learning. The spectral theorem provides a deep understanding of the structure and behavior of matrices and is an essential tool for analyzing and solving problems in linear algebra. In this post, I will explain the spectral theorem, its intuition, and its theoretical background, drawing on my experience and knowledge of linear algebra and mathematics.",
        categories: [BlogCategory.Mathematics],
        id: 8,
        date: "2024-02-20",
        content:[String.raw`\section{Introduction}to be added....`]
    },
    {
        title: "Self-Supervised Learning: A Comprehensive Overview",
        img: "2960599.jpg",
        summary: "Self-Supervised Learning (SSL) is a very interesting and promising field in machine learning. It is a type of learning where the model learns to represent the input data in a way that makes it easier to predict the data itself. This is done by creating a supervised learning problem from the input data itself. The model is trained to predict some part of the input data from another part of the input data. This approach has been shown to be very effective in learning useful representations of the input data, which can then be used for a wide range of downstream tasks." + 
        "It is foundated in Vision and Language tasks, which I will cover here.  The main benefit of SSL is to remove the need for human labeled data. Further the model is often able to learn and understand a broad and generalized understanding if the data it was trained on, often broader than in supervised learning. In this post, I will provide a comprehensive overview of self-supervised learning, covering its key concepts, techniques, and applications.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP, BlogCategory.ComputerVision],
        id: 9,
        date: "2024-02-20",
        content:[String.raw`\section{Introduction}to be added....`]
    },
]
