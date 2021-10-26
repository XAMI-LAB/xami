export enum PublicationDestination {
    Conferences = 'Conferences',
    Journals = 'Journals',
    Arxiv = 'Arxiv',
}

export interface PublicationOutputDto {
    id: string;
    title: string;
    publishedAt: Date;
    destination: PublicationDestination;
    video?: string;
    slide?: string;
    doi?: string;
    arXiv?: string;
    code?: string;
    demo?: string;
}


export const allPublications: PublicationOutputDto[] = [
    // Conference   
    {
        id: "1",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira and Renuka Sindhgatta, <span style='color:#1890FF'>*Evaluating Fidelity of Explainable Methods for Predictive Process Analytics*</span>, In Proceedings of the 33rd International Conference on Advanced Information Systems Engineering (CAISE) Forum, Melbourne, Australia, 2021",
        publishedAt: new Date(2021, 6, 15),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-79108-7_8",
        code: "https://github.com/Mythreyi-V/PPA_Evaluation",
    },
    {
        id: "2",
        title: "Renuka Sindhgatta, Chun Ouyang and Catarina Moreira, <span style='color:#1890FF'>*Exploring interpretability for predictive process analytics*</span>, In Proceedings of the 18th International Conference on Service Oriented Computing (ICSOC), Dubai, UAE, 2020 ",
        publishedAt: new Date(2020, 12, 9),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-65310-1_31",


    },
    {
        id: "3",
        title: "Renuka Sindhgatta, Catarina Moreira, Chun Ouyang and Alistair Barros, <span style='color:#1890FF'>*Exploring Interpretable Predictive Models for Business Processes*</span>, In Proceedings of the 18th International Conference on Business Process Management (BPM), Sevilla, Spain, 2020",
        publishedAt: new Date(2020, 9, 4),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-58666-9_15",
        code: "https://github.com/renuka98/interpretable_predictive_processmodel"
    },
    // Journal
    // {
    //     id: "4",
    //     title: "Yu-Liang Chou, Catarina Moreira, Chun Ouyang, Peter Bruza and Joaquim Jorge, [*Counterfactuals and Causability in Explainable Artificial Intelligence: Theory, Algorithms, and Applications*](www.google.com), Information Fusion, 2021",
    //     publishedAt: new Date(2021, 1, 1),
    //     destination: PublicationDestination.Journals,
    // },
    // {
    //     id: "5",
    //     title: "Renuka Sindhgatta, Kanika Goel, Sumit Kalra, Rohan Goel and Preeti Mutreja, [*Evaluating User Trust with Machine Learning Explanations for Automated Diagnosis of COVID-19*](www.google.com), Information Fusion, 2021",
    //     publishedAt: new Date(2021, 1, 1),
    //     destination: PublicationDestination.Journals,
    // },
    {
        id: "6",
        title: "Catarina Moreira, Yu-Liang Chou, Mythreyi Velmurugan, Chun Ouyang, Renuka Sindhgatta and Peter Bruza, <span style='color:#1890FF'>*LINDA-BN: An Interpretable Probabilistic Approach for Demystifying Black-box Predictive Models*</span>, Decision Support Systems, 2021",
        publishedAt: new Date(2021, 4, 9),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.1016/j.dss.2021.113561",
        code: "https://github.com/catarina-moreira/LINDA_DSS"
    },
    {
        id: "7",
        title: "Wei Tan, Prayag Tiwari, Hari Mohan Pandey, Catarina Moreira, and Amit Kumar Jaiswal, <span style='color:#1890FF'>*Multi-modal medical image fusion algorithm in the era of big data*</span>, Neural Computing and Applications, 2020",
        publishedAt: new Date(2020, 7, 8),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.1007/s00521-020-05173-2"
    },
    {
        id: "8",
        title: "Vikash Chouhan, Sanjay Kumar Singh, Aditya Khamparia, Deepak Gupta, Prayag Tiwari, Catarina Moreira, Robertas Damasevicius, Victor Hugo C. de Albuquerque, <span style='color:#1890FF'>*A Novel Transfer Learning Based Approach for Pneumonia Detection in Chest X-ray Images*</span>, Applied Sciences, 10, 559, 2020.",
        publishedAt: new Date(2020, 1, 12),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.3390/app10020559"
    },
    {
        id: "9",
        title: "Bemali Wickramanayake, Zhipeng He, Chun Ouyang, Catarina Moreira, Yue Xu, Renuka Sindhgatta, <span style='color:#1890FF'>*Building Interpretable Models for Business Process Prediction using Shared and Specialised Attention Mechanisms*</span>. CoRR abs/2109.01419 (2021)",
        publishedAt: new Date(2021, 9, 3),
        destination: PublicationDestination.Arxiv,
        arXiv: "https://arxiv.org/abs/2109.01419",
        code: "https://github.com/ZhipengHe/Shared-and-Specialised-Attention-based-Interpretable-Models",
    },
    {
        id: "10",
        title: "Chun Ouyang, Renuka Sindhgatta, Catarina Moreira, <span style='color:#1890FF'>*Explainable AI Enabled Inspection of Business Process Prediction Models*</span>. CoRR abs/2107.09767 (2021)",
        publishedAt: new Date(2021, 7, 16),
        destination: PublicationDestination.Arxiv,
        arXiv: "https://arxiv.org/abs/2107.09767"
    },
    {
        id: "11",
        title: "Chihcheng Hsieh, Catarina Moreira, Chun Ouyang, <span style='color:#1890FF'>*DiCE4EL: Interpreting Process Predictions using a Milestone-Aware Counterfactual Approach*</span>, In Proceedings of the 3rd International Conference on Process Mining, 2021",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Conferences,
        doi: "",
        code: "https://github.com/ChihchengHsieh/EventLogDiCE"
    },
    {
        id: "12",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira, Renuka Sindhgatta, <span style='color:#1890FF'>*Developing a Fidelity Evaluation Approach for Interpretable Machine Learning*</span>. CoRR abs/2106.08492 (2021)",
        publishedAt: new Date(2021, 6, 16),
        destination: PublicationDestination.Arxiv,
        arXiv:"https://arxiv.org/abs/2106.08492",
        code: "https://github.com/Mythreyi-V/three-phase-fidelity-evaluation/"
    },
    {
        id: "13",
        title: "Yu-Liang Chou, Catarina Moreira, Peter Bruza, Chun Ouyang, Joaquim A. Jorge, <span style='color:#1890FF'>*Counterfactuals and Causability in Explainable Artificial Intelligence: Theory, Algorithms, and Applications*</span>. CoRR abs/2103.04244 (2021)",
        publishedAt: new Date(2021, 3, 7),
        destination: PublicationDestination.Arxiv,
        arXiv: "https://arxiv.org/abs/2103.04244",
        code: ""
    }
];


