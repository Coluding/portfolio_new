import { BlogCategory,TechStack } from "../../utils/entitities";
import { ProjectTemplateProps } from "./ProjectTemplate";

export const projects: ProjectTemplateProps[] = [
    {
        img: "https://cosmic-nextjs-blog.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fbaff2ae0-ff1e-11ed-8fca-9b0db64c9b86-greg-rakozy-oMpAz-DN-9I-unsplash.jpg%3Fw%3D1400%26auto%3Dformat&w=3840&q=75",
        title: "Foundation of Diffusion Models ",
        summary: "The core of this thesis was dedicated to investigating the constraints imposed by hardware limitations on the pretraining and finetuning of transformer models, specifically within the financial NLP domain. By experimenting with various model architectures, including the Reformer, Plain BERT, and a custom reversible dilated BERT, this study sought to uncover efficient strategies for model optimization under resource constraints. The findings reveal that while these adjusted architectures offer theoretical benefits, particularly in scenarios of longer sequence lengths, their practical advantages are somewhat limited in small-scale environments with short sequence lengths and stringent resource limitations for this specific domain. ",
        categories: [BlogCategory.ComputerVision,  BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 1,
    },
    {
        img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Locality Sensitive Hashing",
        summary: "Locality Sensitive Hashing (LSH) enhances attention mechanisms in machine learning, especially for tasks requiring the processing of long sequences, by addressing hardware limitations. Traditional attention mechanisms, crucial for understanding contextual relationships in data, face challenges with computational and memory demands, particularly in resource-constrained environments. LSH reduces these demands by grouping similar input elements, allowing attention to focus on relevant pairs and thus lowering computational complexity. This optimization facilitates the handling of larger datasets and complex tasks, such as text analysis and genome sequencing, on standard hardware, making advanced machine learning applications more accessible and scalable",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 2
    },

]