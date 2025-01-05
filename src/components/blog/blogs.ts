import { BlogTemplateProps } from "./BlogTemplate";
import { BlogCategory } from "../../utils/entitities";

export const blogs: BlogTemplateProps[] = [
    {
        img: "imag_aug.png",
        title: "Imagination Augmentation in Reinforcement Learning — An Overview",
        summary: "Imagination Augmentation enhances reinforcement learning by simulating future states and rewards using generative models. This method improves sample efficiency and generalization in learning tasks.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ReinforcementLearning],
        content: ["https://medium.com/@lukasbierling/imagination-augmentation-in-reinforcement-learning-an-overview-9e5ff8df044f"],
        id: 30,
        date: "2024-12-15",
    },
    {
        img: "lat-space.png",
        title: "Training Agents to Plan in Latent Space — A Technical Overview",
        summary: "Planning in latent space enables agents to learn compact representations of environments, improving decision-making. This post covers key techniques and challenges, including sequential variational inference.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ReinforcementLearning],
        content: ["https://medium.com/@lukasbierling/training-agents-to-plan-in-latent-space-a-technical-overview-f4380a94ec88"],
        id: 30,
        date: "2024-12-19",
    },
    {
        img: "photo-1568952433726-3896e3881c65.jpg",
        title: "Locality Sensitive Hashing",
        summary: "Locality Sensitive Hashing reduces the computational complexity of attention mechanisms by grouping similar input elements. It facilitates efficient processing of long sequences on standard hardware.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: ["LSH.pdf"],
        id: 2,
        date: "2023-02-15",
    },
    {
        img: "3571486.jpg",
        title: "Sliding Window Attention Mechanism",
        summary: "Sliding-window attention reduces memory demands by restricting attention to fixed-size windows around tokens. This method supports processing longer sequences on standard hardware efficiently.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: ["Sliding_Window_Attention.pdf"],
        id: 4,
        date: "2024-09-18",
    },
    {
        img: "26062.jpg",
        title: "Mamba: A Transformer Alternative Based on Selective State Space Models",
        summary: "Mamba combines Transformers and State Space Models to balance efficiency and expressiveness. It supports parallel training and constant-time inference for flexible model applications.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP],
        content: ["Mamba.pdf"],
        id: 12,
        date: "2024-08-11",
    },
    {
        img: "126.jpg",
        title: "Reinforcement Learning: Policy Gradient Methods - Intuitive and Analytical Overview",
        summary: "Policy gradient methods optimize agent policies by maximizing expected rewards using gradient ascent. This post explores key algorithms like REINFORCE and Actor-Critic, including their advantages and challenges.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        content: ["p_ac_grad.pdf"],
        id: 10,
        date: "2024-04-04",
    },
    {
        img: "eine-studioportrait-collage-unterschiedlicher-menschen.jpg",
        title: "Face Similarity Detection with Siamese Networks",
        summary: "This project implements Siamese Networks for face similarity detection using contrastive loss. The post includes details on data preprocessing, model training, and evaluation.",
        categories: [BlogCategory.DeepLearning, BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        content: ["siamese.pdf"],
        id: 11,
        date: "2024-04-10",
    },
    {
        img: "6157.jpg",
        title: "Comparing DeepLabV3, DeepLabV3+, and U-Net for Human Body Segmentation",
        summary: "This post compares the performance of DeepLabV3, DeepLabV3+, and U-Net for human body segmentation. It evaluates their accuracy and explores the impact of Dice Loss and Cross Entropy Loss.",
        categories: [BlogCategory.DeepLearning, BlogCategory.ComputerVision],
        content: ["humanbodyseg.pdf"],
        id: 12,
        date: "2024-04-12",
    },
    {
        img: "3571486.jpg",
        title: "RetinaNet for Object Detection: A Theoretical and Practical Exploration",
        summary: "RetinaNet is a fast, accurate single-stage object detection model ideal for real-time tasks. This project includes training, evaluation, and insights into small object detection.",
        categories: [BlogCategory.DeepLearning, BlogCategory.ComputerVision],
        content: ["RetinaNet.pdf"],
        id: 13,
        date: "2024-04-15",
    },
    {
        img: "26062.jpg",
        title: "Vision Transformer: Image Classification with Transformers",
        summary: "Vision Transformers (ViT) classify images efficiently by leveraging transformer architectures. This post compares ViT with CNNs on small and large datasets.",
        categories: [BlogCategory.DeepLearning, BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        content: ["vit.pdf"],
        id: 14,
        date: "2024-04-18",
    },
    {
        img: "verkehrszeichen-auf-der-strasse.jpg",
        title: "YOLOv1 for Traffic Sign Detection: A Theoretical Implementation",
        summary: "YOLOv1 is a single-stage object detection model that predicts bounding boxes and class probabilities simultaneously. This post includes training and evaluation insights for traffic sign detection.",
        categories: [BlogCategory.DeepLearning, BlogCategory.ComputerVision],
        content: ["yolov1_traffic_signs.pdf"],
        id: 15,
        date: "2024-04-20",
    },
    {
        img: "126.jpg",
        title: "Basics of Reinforcement Learning: Epsilon Greedy Algorithm, Optimistic Initial Values, and Upper Confidence Bound",
        summary: "This post explores strategies to address the exploration-exploitation trade-off in reinforcement learning. Methods like epsilon-greedy, optimistic initial values, and UCB are detailed with examples.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        content: [],
        id: 5,
        date: "2024-02-20",
    },
    {
        img: "126.jpg",
        title: "Reinforcement Learning Basics: Thompson Sampling",
        summary: "Thompson Sampling balances exploration and exploitation in reinforcement learning using Bayesian probability. It models uncertainty to guide action selection effectively.",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        content: [],
        id: 6,
        date: "2024-02-20",
    },
    {
        img: "3665587.jpg",
        title: "Jordan Canonical Form",
        summary: "The Jordan canonical form simplifies matrix analysis by decomposing it into block-diagonal form. This post explains its intuition and mathematical details.",
        categories: [BlogCategory.Mathematics],
        content: [],
        id: 7,
        date: "2024-02-20",
    },
    {
        img: "3665587.jpg",
        title: "The Spectral Theorem: Intuition and Theoretical Background",
        summary: "The spectral theorem decomposes matrices into eigenvalues and eigenvectors, aiding in linear transformation analysis. This post covers its intuition and applications.",
        categories: [BlogCategory.Mathematics],
        content: [],
        id: 8,
        date: "2024-02-20",
    },
    {
        img: "2960599.jpg",
        title: "Self-Supervised Learning: A Comprehensive Overview",
        summary: "Self-Supervised Learning trains models to predict parts of input data from other parts, enabling label-free learning. This post covers key techniques and applications in vision and NLP.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.NLP, BlogCategory.ComputerVision],
        content: [],
        id: 9,
        date: "2024-02-20",
    },
];

