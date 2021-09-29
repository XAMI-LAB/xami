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
    videoLink?: string;
    paperLink?: string;
    presentationLink?: string;
}


export const allPublications: PublicationOutputDto[] = [
    // Conference
    {
        id: "1",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira and Renuka Sindhgatta, [*XAI Fidelity for Predictive Process Analytics, In Proceedings of the 33rd International Conference on Advanced Information Systems Engineering (CAISE) Forum*](www.google.com), Melbourne, Australia, 2021",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Conferences,
    },
    {
        id: "2",
        title: "Renuka Sindhgatta, Chun Ouyang and Catarina Moreira, [*Exploring interpretability for predictive process analytics, In Proceedings of the 18th International Conference on Service Oriented Computing (ICSOC)*](www.google.com), Dubai, UAE, 2020 ",
        publishedAt: new Date(2020, 1, 1),
        destination: PublicationDestination.Conferences
    },
    {
        id: "3",
        title: "Renuka Sindhgatta, Catarina Moreira, Chun Ouyang and Alistair Barros, [*Interpretable Predictive Models for Business Processes, In Proceedings of the 18th International Conference on Business Process Management (BPM)*](www.google.com), Sevilla, Spain, 2020",
        publishedAt: new Date(2020, 1, 1),
        destination: PublicationDestination.Conferences,
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
        title: "Catarina Moreira, Yu-Liang Chou, Mythreyi Velmurugan, Chun Ouyang, Renuka Sindhgatta and Peter Bruza, [*LINDA-BN: An Interpretable Probabilistic Approach for Demystifying Black-box Predictive Models*](www.google.com), Decision Support Systems, 2021",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Journals,
    },
    {
        id: "7",
        title: "Wei Tan, Prayag Tiwari, Hari Mohan Pandey, Catarina Moreira, and Amit Kumar Jaiswal, [*Multi-modal medical image fusion algorithm in the era of big data*](www.google.com), Neural Computing and Applications, 2020",
        publishedAt: new Date(2020, 1, 1),
        destination: PublicationDestination.Journals,
    },
    {
        id: "8",
        title: "Vikash Chouhan, Sanjay Kumar Singh, Aditya Khamparia, Deepak Gupta, Prayag Tiwari, Catarina Moreira, Robertas Damasevicius, Victor Hugo C. de Albuquerque, [*A Novel Transfer Learning Based Approach for Pneumonia Detection in Chest X-ray Images*](www.google.com), Applied Sciences, 10, 559, 2020.",
        publishedAt: new Date(2020, 1, 1),
        destination: PublicationDestination.Journals,
    },
    {
        id: "9",
        title: "Bemali Wickramanayake, Zhipeng He, Chun Ouyang, Catarina Moreira, Yue Xu, Renuka Sindhgatta, [*Building Interpretable Models for Business Process Prediction using Shared and Specialised Attention Mechanisms*](www.google.com). CoRR abs/2109.01419 (2021)",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Arxiv,
    },
    {
        id: "10",
        title: "Chun Ouyang, Renuka Sindhgatta, Catarina Moreira, [*Explainable AI Enabled Inspection of Business Process Prediction Models*](www.google.com). CoRR abs/2107.09767 (2021)",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Arxiv,
    },
    {
        id: "11",
        title: "Chihcheng Hsieh, Catarina Moreira, Chun Ouyang, [*DiCE4EL: Interpreting Process Predictions using a Milestone-Aware Counterfactual Approach*](www.google.com), In Proceedings of the 3rd International Conference on Process Mining, 2021",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Conferences,
    },
    {
        id: "12",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira, Renuka Sindhgatta, [*Developing a Fidelity Evaluation Approach for Interpretable Machine Learning*](www.google.com). CoRR abs/2106.08492 (2021)",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Arxiv,
    },
    {
        id: "13",
        title: "Yu-Liang Chou, Catarina Moreira, Peter Bruza, Chun Ouyang, Joaquim A. Jorge, [*Counterfactuals and Causability in Explainable Artificial Intelligence: Theory, Algorithms, and Applications*](www.google.com). CoRR abs/2103.04244 (2021)",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Arxiv
    }
];


