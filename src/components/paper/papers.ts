import { PaperTemplateProps} from "./PaperTemplate";
import { BlogCategory } from "../../utils/entitities";




const papers: PaperTemplateProps[] = [
    {
      title: "Datamodels: Predicting Predictions from Training Data",
      summary: "",
      categories: [BlogCategory.TheoreticalMachineLearning],
      abstract: "",
      author: "Andrew Ilyas and Sung Min Park and Logan Engstrom and Guillaume Leclerc and Aleksander Madry",
      url: "https://arxiv.org/abs/2106.05237",
      id: 1,
      },
      {
        title: "Deep Transformer Q Networks",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/2206.01078",
        id: 2,
        author: "Kevin Esslinger, Robert Platt, Christopher Amato",
      },
      {
        title: "An Empirical Model of Large-Batch Training",
        summary: "",
        categories: [BlogCategory.TheoreticalMachineLearning, BlogCategory.Engineering],
        abstract: "",
        url: "https://arxiv.org/abs/1812.06162qe",
        id: 3,
        author: "Sam McCandlish, Jared Kaplan, Dario Amodei, OpenAI Dota Team",
      },
      {
        title: "An Empirical Model of Large-Batch Training",
        summary: "",
        categories: [BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1812.06162",
        id: 3,
        author: "Sam McCandlish, Jared Kaplan, Dario Amodei, OpenAI Dota Team",
      },
      {
        title: "Scaling Vision Transformers",
        summary: "",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1812.06162",
        id: 4,
        author: "Xiaohua Zhai, Alexander Kolesnikov, Neil Houlsby, Lucas Beyer",
      },
      {
        title: "Hierarchical Attention Networks for Document Classification",
        summary: "",
        categories: [BlogCategory.NLP, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://aclanthology.org/N16-1174.pdf",
        id: 5,
        author: "Zichao Yang, Diyi Yang, Chris Dyer, Xiaodong He, Alex Smola, Eduard Hovy",
      },

      {
        title: "Decision Transformer: Reinforcement Learning via Sequence Modeling",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/pdf/2106.01345",
        id: 6,
        author: "Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas†, Igor Mordatch",
      },
      {
        title: "DREAM TO CONTROL: LEARNING BEHAVIORS BY LATENT IMAGINATION",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/pdf/1912.01603",
        id: 7,
        author: "Danijar Hafner Timothy Lillicrap, Jimmy Ba Mohammad Norouzi",
      },
      {
        title: "DREAM TO CONTROL: LEARNING BEHAVIORS BY LATENT IMAGINATION",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/pdf/1912.01603",
        id: 8,
        author: "Danijar Hafner Timothy Lillicrap, Jimmy Ba Mohammad Norouzi",
      },
      {
        title: "Learning Latent Dynamics for Planning from Pixels",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/pdf/1811.04551",
        id: 9,
        author: "Danijar Hafner, Timothy Lillicrap, Ian Fischer, Ruben Villegas, David Ha, Honglak Lee, James Davidson",
        
      },
      {
        title: "A Cookbook of Self-Supervised Learning",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.ComputerVision],
        abstract: "",
        url: "https://arxiv.org/pdf/2304.12210",
        id: 10,
        author: "Randall Balestrier, Mark Ibrahim, Vlad Sobal, Ari Morcos, Shashank Shekhar, Tom Goldstein, Florian Bordes, Adrien Bardes, Gregoire Mialon, Yuandong Tian, Avi Schwarzschild, Andrew Gordon Wilson Jonas Geiping, Quentin Garrido, Pierre Fernandez, Amir Bar, Hamed Pirsiavash, Yann LeCun and Micah Goldblum",
      },
      {
        title: "Perceiver: General Perception with Iterative Attention",
        summary: "",
        categories: [BlogCategory.ComputerVision, BlogCategory.NLP],
        abstract: "",
        url: "https://arxiv.org/abs/2103.03206",
        id: 11,
        author: "Andrew Jaegle  Felix Gimeno Andrew Brock  Andrew Zisserman  Oriol Vinyals  Joao Carreira "
      },
      {
        title: "Flamingo: a Visual Language Model for Few-Shot Learning",
        summary: "",
        categories: [BlogCategory.ComputerVision, BlogCategory.NLP],
        abstract: "",
        url: "https://arxiv.org/abs/2103.03206",
        id: 12,
        author: "Jean Baptiste Alayrac, Jeff Donahue, Pauline Luc, Antoine Miech, Iain Barr, Yana Hasson, Karel Lenc, Arthur Mensch, Katie Millican, Malcolm Reynolds, Roman Ring, Eliza Rutherford, Serkan Cabi, Tengda Han, Zhitao Gong, Sina Samangooei, Marianne Monteiro, Jacob Menick, Sebastian Borgeaud, Andrew Brock, Aida Nematzadeh, Sahand Sharifzadeh, Mikolaj Binkowski, Ricardo Barreira, Oriol Vinyals, Andrew Zisserman, Karen Simonyan"
      },
      {
        title: "Mastering Chess and Shogi by Self-Play with a General Reinforcement Learning Algorithm",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1712.01815",
        id: 13,
        author: "David Silver, Thomas Hubert, Julian Schrittwieser, Ioannis Antonoglou, Matthew Lai, Arthur Guez, Marc Lanctot, Laurent Sifre, Dharshan Kumaran, Thore Graepel, Timothy Lillicrap, Karen Simonyan, Demis Hassabis"
      },
      {
        title: "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model",
        summary: "V-Jepa",
        categories: [BlogCategory.ReinforcementLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1911.08265",
        id: 17,
        author: "Julian Schrittwieser, Ioannis Antonoglou, Thomas Hubert, Karen Simonyan, Laurent Sifre, Simon Schmitt, Arthur Guez, Edward Lockhart, Demis Hassabis, Thore Graepel, Timothy Lillicrap, David Silver"
      },
      {
        title: "Self-Supervised Learning from Images with a Joint-Embedding Predictive Architecture",
        summary: "",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/abs/2301.08243",
        id: 14,
        author: "Mahmoud Assran, Quentin Duval, Ishan Misra, Piotr Bojanowski, Pascal Vincent, Michael Rabbat, Yann LeCun, Nicolas Ballas"
      },
      {
        title: "Graph-level Representation Learning with Joint-Embedding Predictive Architectures",
        summary: "",
        categories: [BlogCategory.GraphNeuralNetworks, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/abs/2309.16014",
        id: 15,
        author: "Geri Skenderi, Hang Li, Jiliang Tang, Marco Cristani"
      },
      {
        title: "Revisiting Feature Prediction for Learning Visual Representations from Video",
        summary: "V-JEPA",
        categories: [BlogCategory.ComputerVision, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/abs/2404.08471",
        id: 16,
        author: "Adrien Bardes, Quentin Garrido, Jean Ponce, Xinlei Chen, Michael Rabbat, Yann LeCun, Mahmoud Assran, Nicolas Ballas"
      },
      {
        title: "World Models",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1803.10122",
        id: 18,
        author: "David Ha, Jürgen Schmidhuber"
      },
      {
        title: "On Learning to Think: Algorithmic Information Theory for Novel Combinations of Reinforcement Learning Controllers and Recurrent Neural World Models",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1511.09249",
        id: 19,
        author: " Jürgen Schmidhuber"
      },
      {
        title: "Deep Variational Bayes Filters: Unsupervised Learning of State Space Models from Raw Data",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1605.06432",
        id: 20,
        author: "Maximilian Karl, Maximilian Soelch, Justin Bayer, Patrick van der Smagt"
      },
      {
        title: "Learning and Querying Fast Generative Models for Reinforcement Learning",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1802.03006",
        id: 21,
        author: "Lars Buesing, Theophane Weber, Sebastien Racaniere, S. M. Ali Eslami, Danilo Rezende, David P. Reichert, Fabio Viola, Frederic Besse, Karol Gregor, Demis Hassabis, Daan Wierstra"
      },
      {
        title: "Imagination-Augmented Agents for Deep Reinforcement Learning",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/1707.06203",
        id: 22,
        author: "Théophane Weber, Sébastien Racanière, David P. Reichert, Lars Buesing, Arthur Guez, Danilo Jimenez Rezende, Adria Puigdomènech Badia, Oriol Vinyals, Nicolas Heess, Yujia Li, Razvan Pascanu, Peter Battaglia, Demis Hassabis, David Silver, Daan Wierstra"
      },
      {
        title: "Model-based Reinforcement Learning: A Survey.",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/2006.16712",
        id: 22,
        author: "Thomas M. Moerland, Joost Broekens, Aske Plaat, Catholijn M. Jonker"
      },
      {
        title: "Reinformer: Max-Return Sequence Modeling for Offline RL",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "https://arxiv.org/abs/2405.08740",
        id: 23,
        author: "Zifeng Zhuang, Dengyun Peng, Jinxin Liu, Ziqi Zhang, Donglin Wang"
      },
      {
        title: "PASTA: Pretrained Action-State Transformer Agents",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/abs/2307.10936",
        id: 24,
        author: "Raphael Boige, Yannis Flet-Berliac, Arthur Flajolet, Guillaume Richard, Thomas Pierrot"
      },
      {
        title: "Curiosity-driven Exploration by Self-supervised Prediction",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/abs/1705.05363",
        id: 25,
        author: "Deepak Pathak, Pulkit Agrawal, Alexei A. Efros, Trevor Darrell"
      },
      {
        title: "Dynamical Variational Autoencoders: A Comprehensive Review",
        summary: "",
        categories: [BlogCategory.ReinforcementLearning, BlogCategory.TheoreticalMachineLearning, BlogCategory.SSL],
        abstract: "",
        url: "https://arxiv.org/pdf/2008.12595",
        id: 26,
        author: "Laurent Girin, Simon Leglaive, Xiaoyu Bie, Julien Diard, Thomas Hueber and Xavier Alameda-Pineda"
      },
     
      


    ];



export default papers;