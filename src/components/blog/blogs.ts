import { BlogTemplateProps } from "./BlogTemplate";
import { BlogCategory } from "../../utils/entitities";

export const blogs: BlogTemplateProps[] = [
    {
        img: "https://cosmic-nextjs-blog.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fbaff2ae0-ff1e-11ed-8fca-9b0db64c9b86-greg-rakozy-oMpAz-DN-9I-unsplash.jpg%3Fw%3D1400%26auto%3Dformat&w=3840&q=75",
        title: "Foundation of Diffusion Models ",
        summary: "The core of this thesis was dedicated to investigating the constraints imposed by hardware limitations on the pretraining and finetuning of transformer models, specifically within the financial NLP domain. By experimenting with various model architectures, including the Reformer, Plain BERT, and a custom reversible dilated BERT, this study sought to uncover efficient strategies for model optimization under resource constraints. The findings reveal that while these adjusted architectures offer theoretical benefits, particularly in scenarios of longer sequence lengths, their practical advantages are somewhat limited in small-scale environments with short sequence lengths and stringent resource limitations for this specific domain. ",
        categories: [BlogCategory.ComputerVision,  BlogCategory.TheoreticalMachineLearning],
        content: String.raw `The core  %block $$ h_t = \mathbf{W}_h \sigma(h_{t-1}) + \mathbf{W}_x x_t + \mathbf{b} \\ \mathbf{C} \times $$ %block of this thesis was dedicated to investigating the constraints imposed by hardware limitations on the pretraining and finetuning of transformer models, specifically within the financial NLP domain. By experimenting with various model architectures, including the Reformer, Plain BERT, and a custom reversible dilated BERT, this study sought to uncover efficient strategies for model optimization under resource constraints. The findings reveal that while these adjusted architectures offer theoretical benefits, particularly in scenarios of longer sequence lengths, their practical advantages are somewhat limited in small-scale environments with short sequence lengths and stringent resource limitations for this specific domain. `,
        id: 1,
    },
    {
        img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        img: "https://img.freepik.com/fotos-kostenlos/3d-darstellung-von-blauem-und-lila-futuristischem-sci-fi-techno-licht-coolem-hintergrund_181624-57587.jpg?w=1060&t=st=1707435170~exp=1707435770~hmac=1dbdc12d3879b747bf2ed09a8a752c47657faf2486d74b141bc8995cb328fb8e",
        summary: "This is a collection of deep learning code snippets that I have found useful in my work. These code snippets cover a wide range of topics, including data preprocessing, model training, and evaluation. I hope you find these code snippets useful in your work as well. If you have any questions or suggestions, please feel free to leave a comment below. I would love to hear from you!",
        categories: [BlogCategory.WebDevelopment],
        content: "This is a collection of deep learning code snippets that I have found useful in my work. These code snippets cover a wide range of topics, including data preprocessing, model training, and evaluation. I hope you find these code snippets useful in your work as well. If you have any questions or suggestions, please feel free to leave a comment below. I would love to hear from you!",
        title: "Deep Learning Code Collection",
        id: 3
    },

]
