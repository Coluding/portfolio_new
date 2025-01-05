import { BlogCategory,TechStack } from "../../utils/entitities";
import { ProjectTemplateProps } from "./ProjectTemplate";

export const projects: ProjectTemplateProps[] = [
    {
        img: "image-auto-accident-involving-two-cars.jpg",
        title: "Crash detection with Class Activation Maps",
        summary:"I've engineered a sophisticated machine learning model that specializes in distinguishing between crash and non-crash car images. To enhance its interpretability, I integrated Class Activation Mapping (CAM), allowing the model to visually indicate the areas in images where crashes are detected. My tech stack of choice was PyTorch, and I undertook extensive experiments with an assortment of models and hyperparameters to optimize performance. Further I built a Docker container. However, the hosting of the container is too expensive for me, so I am currently looking for a free alternative",
        link: "https://github.com/Coluding/Car-crash-detection-with-CAM",
        categories: [BlogCategory.ComputerVision,  BlogCategory.PracticalMachineLearning, BlogCategory.Infrastructure],
        techStack: [TechStack.Python, TechStack.PyTorch, TechStack.Azure, TechStack.Docker],
        id: 1,
        //link to blog page in react app
        blogLink: null
    },
    {
        img: "2960599.jpg",
        title: "Deep Learning Code Collection",
        summary: "I am creating a comprehensive collection of deep learning code snippets that I've used in various projects. The collection includes code for data preprocessing, model training, and model evaluation. I've also included code for visualizing model performance and for deploying models. The collection is improved and expanded on a regular basis.", 
        link: "https://github.com/Coluding/DeepLearningCollection",
        categories: [BlogCategory.ComputerVision,  BlogCategory.PracticalMachineLearning, BlogCategory.Infrastructure],
        techStack: [TechStack.Python, TechStack.PyTorch, TechStack.TensorFlow],
        id: 2,
        blogLink: "/blog/2"
    },
    {
        img: "5060.jpg",
        title: "Center Point based Object Detection",
        summary: "This project introduces Center Point Detection models, a cutting-edge approach to object detection that eschews traditional bounding boxes in favor of pinpointing objects' exact center points. This technique is more accurate, efficient, and suitable for irregularly shaped objects, offering precise localization without the computational burden of bounding box calculations. It shines in applications requiring precise object counts, keypoint detection, or monitoring, such as human pose estimation, facial landmark detection, and aerial vehicle tracking. However, it's less effective for tasks needing size or scale information. The repository includes examples like detecting sports fields and counting lanes on a running track in satellite images, demonstrating its utility across various scenarios. It encourages exploration of its models and documentation for anyone looking to leverage precise object detection in their projects.",
        link: "https://github.com/Coluding/DeepLearningCollection/tree/main/src/computer_vision/object_detection/center_point_detection",
        categories: [BlogCategory.ComputerVision,  BlogCategory.PracticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 3,
        blogLink: null
    },
    {
        img: "3571486.jpg",
        title: "RetinaNet Imlpementation",
        summary: "This project implements the RetinaNet model, a state-of-the-art object detection model that excels in detecting small objects. It's a single-stage model that's faster and more accurate than its two-stage counterparts, making it ideal for real-time applications. The repository includes a comprehensive implementation of the model, complete with training and evaluation code, as well as a variety of pre-trained models. It also features a detailed README file. It was a rather theoretical project, where I wanted to understand the concept of RetinaNet and how it can be used for object detection.",
        link: "https://github.com/Coluding/RetinaNet",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 4,
        blogLink:  "/blog/13"
    },
    {
        img: "eine-studioportrait-collage-unterschiedlicher-menschen.jpg",
        title: "Face Similarity Detection with Siamese Networks",
        summary: "This project implements a Siamese Network for face similarity detection. The model is trained on a dataset of face images and learns to distinguish between similar and dissimilar faces. The notebook includes code for data preprocessing, model training, and model evaluation. This was a more theoretical project, where I wanted to understand the concept of Siamese Networks and how they can be used for face similarity detection.",
        link: "https://www.kaggle.com/code/strangetravel/facial-recog-siamese-network",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 5,
        blogLink:  "/blog/11"
    },
    {
        img: "6157.jpg",
        title: "Human Body Segmentation: A comparison of DeepLabV3 and DeepLabV3+ as well as Unet",
        summary: "This project compares the performance of DeepLabV3, DeepLabV3+, and Unet in human body segmentation. The models are trained on a dataset of human body images and evaluated based on their segmentation accuracy. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a practical application of semantic segmentation models and aims to provide insights into their performance in human body segmentation." +
        "After training with a pure Dice Loss, I also trained the models with a combination of Dice Loss and Cross Entropy Loss. The results were quite interesting and I was able to improve the performance of the models.",
        link: "https://www.kaggle.com/code/strangetravel/human-body-segmentation-deeplab-v3-vs-deeplab-v3",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 6,
        blogLink:  "/blog/12"
    },
    {
        img: "26062.jpg",
        title: "Vision Transformer Implementation from scratch",
        summary: "This project implements a Vision Transformer model for image classification. The model is trained on a dataset of images and learns to classify them into different categories. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a theoretical exploration of Vision Transformer models and aims to provide insights into their performance in image classification. "+
        "I explained how the Vision Transformer is dependent on a lot of data and how it is not as efficient as Convolutional Neural Networks for smaller datasets. However, I also showed that the Vision Transformer can be used for image classification and that it is a powerful model for large datasets.",
        link: "https://www.kaggle.com/code/strangetravel/vit-from-scratch-sports-classification/notebook",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 7,
        blogLink: "/blog/14"
    },
    {
        img: "eine-vogelperspektive-von-shanghai.jpg",
        title: "Building Segmentation with U-Net",
        summary: "This project implements a U-Net and DeepLab model for building segmentation. The models are trained on a dataset of satellite images and learns to segment buildings from the background. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a practical application of U-Net models and aims to provide insights into their performance in building segmentation. ",
        link: "https://www.kaggle.com/code/strangetravel/building-segmenation-unet-vs-deeplab#4.-Build-DeepLab-v3-model-using-atrous-convolution",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning, BlogCategory.PracticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 8,
        blogLink: null
    },
    {
        img: "verkehrszeichen-auf-der-strasse.jpg",
        title: "YoloV1 from scratch: Traffic Signs",
        summary: "This project implements a YoloV1 model for traffic sign detection. The model is trained on a dataset of traffic sign images and learns to detect traffic signs in images. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a theoretical application of YoloV1 models and aims to help me understand the Yolo algorithm. ",
        link: "https://www.kaggle.com/code/strangetravel/yolov1-from-scratch-traffic-signs",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning,],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 9,
        blogLink: "/blog/15"
    },
    {
        img:"rueckansicht-des-arztes-der-radiographie-betrachtet.jpg",
        title: "ResNet18 Covid19 Classifications",
        summary: "This project implements a ResNet18 model for Covid19 classifications. The model is trained on a dataset of X-Ray images and learns to classify them into different categories. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a practical application of ResNet18 models and aims to provide insights into their performance in Covid19 classifications. ",
        link: "https://www.kaggle.com/code/strangetravel/resnet18-covid19-classifications",
        categories: [BlogCategory.ComputerVision, BlogCategory.PracticalMachineLearning,],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 10,
        blogLink: null
    },
    {
        img: "nationalmuseum-fuer-geschichte-rumaeniens.jpg",
        title: "Topic Modeling with LDA",
        summary: "This project implements a Latent Dirichlet Allocation (LDA) model for topic modeling. The model is trained on a dataset of central bank speeches and learns to classify them into different categories. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a practical application of LDA models and aims to provide insights into their performance in topic modeling. " + 
        "It is also valubale for me to help me understand the concept of topic modeling and how it can be used for text classification.",
        link: "https://www.kaggle.com/code/strangetravel/topic-modelling-central-bank-speeches",
        categories: [BlogCategory.NLP, BlogCategory.PracticalMachineLearning, BlogCategory.TheoreticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 11,
        blogLink: null
    },
    {
        img: "3665587.jpg",
        title: "Text Rank Implementation from scratch",
        summary: "This project implements a Text Rank model for text summarization. The model was implemented from scratch using markov chains and eigenvalue theory. The notebook includes code for data preprocessing, model training, and model evaluation. The project is a theoretical exploration of Text Rank models and aims to provide insights into their performance in text summarization and how the math works in the back. ",
        link: "https://www.kaggle.com/code/strangetravel/text-rank-self-implemented",
        categories: [BlogCategory.NLP, BlogCategory.TheoreticalMachineLearning, BlogCategory.Mathematics],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 12,
        blogLink: null
    },
    {
        img: "fotorealistische-wolken.jpg",
        title: "Cloud Segmentation with U-Net",
        summary: "This project implements a U-Net model for cloud segmentation. The model is trained on a dataset of satellite images and learns to segment clouds from the background." +
        " The notebook includes code for data preprocessing, model training, and model evaluation. The project is a practical application of U-Net models and aims to provide insights into their performance in cloud segmentation. " + 
        "I used Dice Score for the evaluation of the model", 
        link: "ttps://www.kaggle.com/code/strangetravel/cloud-segmentation-unet",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning, BlogCategory.PracticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 13,
        blogLink: null
    },
    {
        img: "1026.jpg",
        title: "Framework for Azure PyTorch Model Training",
        summary: "This project is a framework for training PyTorch models on Azure. It includes code for setting up an Azure Machine Learning workspace, creating a compute cluster, and running model training experiments. The framework is designed to streamline the process of training PyTorch models on Azure and to provide a foundation for building scalable machine learning pipelines. The repository includes a detailed README file and a sample PyTorch model for demonstration purposes.",
        link: "https://github.com/Coluding/azure-pytorch-model-training",
        categories: [BlogCategory.ComputerVision, BlogCategory.Infrastructure],
        techStack: [TechStack.Python, TechStack.PyTorch, TechStack.Azure],
        id: 14,
        blogLink: null
    },
    {
        img: "302401236-aa54af4b-4fc7-4a88-b792-c10222bd28d6.png",
        title: "Full Stack Application for renewable energy management",
        link: "https://github.com/Coluding/GreenEcoHub",
        summary: "This application offers a variety of interaction possibilities for all actors involved in the process of using renewable energy." +
        "Network operators can offer tarifs and access smart meter data, while households can access their smart meter data and compare different tarifs. Households can manage their PV systems with the energy consultants and solar engineers." +
        "There are various features such as a calendar, a chat between users, a dashboard for the admin to manage all the users, a map to display all the households, smart meter diagrams and much more." +
        "The app was build with React, Typescript  and Vite with Material UI in the Frontend, while for the Backend I opted for Python and FastAPI. FastAPI is one of my favorite Backend frameworks, because it  offers a highly effcient asynchronous Backend while being relatively easy to develop"+
        "To manage the database I used Alembic with its migration capabilites. Deployment was done using Docker and some shell scripts to execute Docker and Alembic commands correctly.",
        categories: [BlogCategory.Frontend, BlogCategory.Backend, BlogCategory.WebDevelopment, BlogCategory.Infrastructure],
        techStack: [TechStack.Python, TechStack.TypeScript, TechStack.JavaScript, TechStack.Docker, TechStack.React],
        id: 15,
        blogLink: null
    },
    {
        img: "2884.jpg",
        link: "https://github.com/Coluding/Assessing-Efficiency-in-Domain-Specific-Transformer-Models", 
        title: "Assessing Efficiency in Domain Specific Transformer Models",
        summary: "This repository contains the code for my Bachelor Thesis, where I implemented various attention mechanisms and developed a reversible dilated BERT model. " +
        "I also experimented with the Electra pretraining approach using different models, comparing their performance. " +
        "I fine-tuned the best model on financial text data, demonstrating Electra's effectiveness for domain-specific tasks with limited resources. " +
        "This project gave me insights into attention mechanisms and pretraining approaches. I used PyTorch, Transformers, and Huggingface Datasets for implementation, with training done on a Titan V GPU.",
    
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.PracticalMachineLearning, BlogCategory.Infrastructure, BlogCategory.NLP],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 16,
        blogLink: null
    },
    {
        img: "SL-042422-49910-15.jpg",
        link: "https://github.com/Coluding/image_transforms",
        title: "Basic Image Transformation Library",
        summary: "This repository contains a basic image transformation library that I developed for my own use. It is based on a Computer Vision lecture that was offered on Youtube." +
        " It contains basic image operations such as scaling, interpolation, convolution implemented from scratch in plain Java.",
        categories: [BlogCategory.ComputerVision],
        techStack: [TechStack.Java],
        id: 17,
        blogLink: null
    },
    {
        img: "retro-computer-desk-arrangement.jpg",
        link: "https://github.com/Coluding/atari-deep-q-learning",
        title: "Deep Q Learning for Atari Games",
        summary: "This repository contains the code for training a Deep Q-Learning model an Atari Games. It is more of a theoretical project, where I wanted to understand the concept of Deep Q-Learning and how it can be used for playing Atari Games." +
        " I am using different model architectures, mainly Convolutional Neural Networks, to train the model. The training is done on a single GPU while using a prioritized experience replay buffer." +
        " It is currently still in development and I am adding several changes in the upcoming weeks.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ReinforcementLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 18,
        blogLink: null
    },
    {
        img: "gradient_brain.jpg",
        link: "https://github.com/Coluding/reinforcement-learning",
        title: "Reinforcement Learning: Collection of Learnings",
        summary: "This repository contains a collection of different Reinforcement Learning algorithms that I implemented for my own learning purposes." +
        " It contains algorithms such as Q-Learning, Deep Q-Learning, Policy Gradients, Actor Critic, Proximal Policy Optimization and more." +
        " It is currently still in development and I am adding several changes in the upcoming weeks since I am still learning a lot about Reinforcement Learning.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ReinforcementLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 19,
        blogLink: null
    },
    {
        img: "182133363342544.jpg",
        link: "https://github.com/Coluding/StableDiffusionPractice",
        title: "Stable Diffusion: Collection of practice and Learnings",
        summary: "This repository contains the basic Stable Diffusion implementation that I developed to learn and understand the concept of Stable Diffusion." +
        "I implemnted the downsampling and upsampling of the images and the diffusion process from scratch. I also implemented the training process of the model." +
        "In the future I am planning to add more features to the model and to improve the performance of the model. Further I want to inlcude different types and concepts of Diffusion models.",
          categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ComputerVision],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 20,
        blogLink: null
    },
    {
        img: "ai-cloud-concept-with-robot-arm.jpg",
        link: "https://github.com/Coluding/RL-Trial",
        title: "Deep Reinforcement Learning experiments on OpenAI Gymenvironments",
        summary: "This repository contains the code for training different Reinforcement Learning models on OpenAI Gym environments." +
        " I am using different model architectures, mainly Convolutional Neural Networks, to train the model. The training is done on a single GPU while using a prioritized experience replay buffer." +
        " It is currently still in development and I am adding several changes in the upcoming weeks. Main algorithms are Q-Learning, Deep Q-Learning and PPO, implemented from scratch.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.ComputerVision],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 21,
        blogLink: null
    },
    {
        img: "lats2.jpg",
        link: "https://github.com/Coluding/thesis-rl",
        title: "Optimizing Allocation Location Problems: A Hybrid Approach with Graph Neural Networks and Deep Reinforcement Learning",
        summary: "This repository contains the code for my Bachelor Thesis on optimizing location allocation using graph neural networks and reinforcement learning. " +
        "I developed a model to solve the problem and built a simulation environment for a replicated state machine system, representing a global data center network. " +
        "The goal was to optimize location allocation and compare the model's performance with traditional heuristics.",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.GraphNeuralNetworks, BlogCategory.ReinforcementLearning, BlogCategory.PracticalMachineLearning],
        techStack: [TechStack.Python, TechStack.PyTorch, TechStack.Java],
        id: 22,
        blogLink: null
    },
    {
        img: "gamesmall.png",
        link: "https://github.com/Coluding/2DGameDev",
        title: "Developing a 2D Game with SFML using C++",
        summary: "This repository presents a simple 2D Jump & Run game developed to enhance my C++ skills and gain a deeper understanding of game development. By implementing core mechanics, rendering, and physics manually, the project offers hands-on experience with fundamental systems rather than relying on prebuilt engines. Additionally, the game serves as a foundation for RL experiments, providing a customizable environment for training RL agents, thanks to complete control over its dynamics" +
        ". Future plans include integrating the game with RL frameworks using JAX and Flax, enhancing gameplay with dynamic level generation, power-ups, and enemy AI, and improving visualization for richer player and agent feedback.",
        categories: [BlogCategory.Engineering, BlogCategory.LowLevel],
        techStack: [TechStack.CPP],
        id: 23,
        blogLink: null
    },
    {
        img: "imag_aug.png",
        link: "https://github.com/Coluding/world-models",
        title: "World Models: Model based Reinforcement Learning playground",
        summary: "This porject is about model based Reinforcement Learning. I implemented several model based RL research paper and am currently experimenting with different model architectures and training methods. Papers I considered are 'World Models', 'Learning Learning Latent Dynamics for Planning from Pixels' and 'Dream to Control: Learning Behaviors by Latent Imagination'." ,
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL, BlogCategory.ReinforcementLearning],
        techStack: [TechStack.Python, TechStack.PyTorch],
        id: 24,
        blogLink: null
    }

]
