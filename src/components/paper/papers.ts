import { PaperTemplateProps} from "./PaperTemplate";
import { BlogCategory } from "../../utils/entitities";



const papers: PaperTemplateProps[] = [
    {
        title: 'Learning to summarize with human feedback',
        author: 'Nisan Stiennon, et al.',
        url: 'https://arxiv.org/abs/2009.01325',
        categories: [BlogCategory.NLP],
        abstract: 'This paper presents a method of training language models to summarize documents using human feedback...',
        summary: 'This paper presents a method of training language models to summarize documents using human feedback...',
        id: 1,
      },
    ];



export default papers;