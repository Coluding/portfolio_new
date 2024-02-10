import { BlogTemplateProps } from "./BlogTemplate";
import { BlogCategory } from "../../utils/entitities";

export const blogs: BlogTemplateProps[] = [
    {
        img: "https://cosmic-nextjs-blog.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fbaff2ae0-ff1e-11ed-8fca-9b0db64c9b86-greg-rakozy-oMpAz-DN-9I-unsplash.jpg%3Fw%3D1400%26auto%3Dformat&w=3840&q=75",
        title: "Foundation of Diffusion Models ",
        summary: "The core of this thesis was dedicated to investigating the constraints imposed by hardware limitations on the pretraining and finetuning of transformer models, specifically within the financial NLP domain. By experimenting with various model architectures, including the Reformer, Plain BERT, and a custom reversible dilated BERT, this study sought to uncover efficient strategies for model optimization under resource constraints. The findings reveal that while these adjusted architectures offer theoretical benefits, particularly in scenarios of longer sequence lengths, their practical advantages are somewhat limited in small-scale environments with short sequence lengths and stringent resource limitations for this specific domain. ",
        categories: [BlogCategory.ComputerVision,  BlogCategory.TheoreticalMachineLearning],
        id: 1,
    },
    {
        img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Reformer: The Efficient Transformer",
        summary: "The Reformer is a transformer model that is designed to handle long sequences more efficiently than the standard transformer model. It uses a combination of locality-sensitive hashing and reversible layers to achieve this. In this post, we will explore the Reformer model and its architecture in detail. We will also look at the results of the Reformer model on various tasks and compare it to the standard transformer model. Finally, we will discuss the advantages and disadvantages of the Reformer model and its potential applications",
        categories: [BlogCategory.WebDevelopment],
        id: 2
    },
    {
        img: "https://img.freepik.com/fotos-kostenlos/3d-darstellung-von-blauem-und-lila-futuristischem-sci-fi-techno-licht-coolem-hintergrund_181624-57587.jpg?w=1060&t=st=1707435170~exp=1707435770~hmac=1dbdc12d3879b747bf2ed09a8a752c47657faf2486d74b141bc8995cb328fb8e",
        summary: "This is a collection of deep learning code snippets that I have found useful in my work. These code snippets cover a wide range of topics, including data preprocessing, model training, and evaluation. I hope you find these code snippets useful in your work as well. If you have any questions or suggestions, please feel free to leave a comment below. I would love to hear from you!",
        categories: [BlogCategory.WebDevelopment],
        title: "Deep Learning Code Collection",
        id: 3
    },

]
