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
        url: "",
        id: 2,
        author: "",
      },
      {
        title: "An Empirical Model of Large-Batch Training",
        summary: "",
        categories: [BlogCategory.TheoreticalMachineLearning],
        abstract: "",
        url: "",
        id: 3,
        author: "",
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



    ];



export default papers;