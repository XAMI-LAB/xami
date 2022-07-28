import { url } from "inspector";

export enum PublicationDestination {
    Conferences = 'Conferences',
    Journals = 'Journals',
    Arxiv = 'Arxiv',
    Datasets = 'Datasets'
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
    code2?: string;
    Abstract?: string;
    bibtex?: string;
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
        Abstract: "Predictive process analytics focuses on predicting the future states of running instances of a business process. While advanced machine learning techniques have been used to increase the accuracy of predictions, the resulting predictive models lack transparency. Explainable machine learning methods can be used to interpret black-box models. However, it is unclear how fit for purpose these methods are in explaining process predictive models. In this paper, we aim to investigate the capabilities of two explainable methods, LIME and SHAP, in reproducing the decision-making processes of black-box process predictive models. We focus on fidelity metrics and propose a method to evaluate the faithfulness of LIME and SHAP when explaining process predictive models built on a Gradient Boosting Machine classifier. We conduct the evaluation using three real-life event logs and analyze the fidelity evaluation results to derive insights. The research contributes to evaluating the trustworthiness of explainable methods for predictive process analytics as a fundamental and key step towards human user-oriented evaluation.",
        bibtex: "@inproceedings{velmurugan2021evaluating, title={Evaluating fidelity of explainable methods for predictive process analytics}, author={Velmurugan, Mythreyi and Ouyang, Chun and Moreira, Catarina and Sindhgatta, Renuka}, booktitle={International Conference on Advanced Information Systems Engineering}, pages={64--72}, year={2021}, organization={Springer} }",
    },
    {
        id: "2",
        title: "Renuka Sindhgatta, Chun Ouyang and Catarina Moreira, <span style='color:#1890FF'>*Exploring interpretability for predictive process analytics*</span>, In Proceedings of the 18th International Conference on Service Oriented Computing (ICSOC), Dubai, UAE, 2020 ",
        publishedAt: new Date(2020, 12, 9),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-65310-1_31",
        Abstract: "In the context of business process management, predictive analytics has been applied to making predictions about the future state of an ongoing business process instance, for example, when will the process instance complete and what will be the outcome upon completion. Machine learning models can be trained on event logs of historical process execution to build the underlying predictive models. Multiple techniques have been proposed so far which encode the information available in an event log and construct input features required to train a predictive model. While accuracy has been a dominant criterion in the choice of various techniques, these techniques are often applied as a black-box in building predictive models. In this paper, we derive explanations using interpretable machine learning techniques to compare the suitability of multiple predictive models of high accuracy. The explanations allow us to gain an understanding of the underlying reasons for a prediction and highlight scenarios where accuracy alone may not be sufficient in assessing the suitability of techniques used to encode event log data to features used by a predictive model. Findings from this study further motivate the need to incorporate interpretability in predictive process analytics.",
        bibtex: "@inproceedings{sindhgatta2020exploring, title={Exploring interpretability for predictive process analytics}, author={Sindhgatta, Renuka and Ouyang, Chun and Moreira, Catarina}, booktitle={International Conference on Service-Oriented Computing}, pages={439--447}, year={2020}, organization={Springer} }"
    },
    {
        id: "3",
        title: "Renuka Sindhgatta, Catarina Moreira, Chun Ouyang and Alistair Barros, <span style='color:#1890FF'>*Exploring Interpretable Predictive Models for Business Processes*</span>, In Proceedings of the 18th International Conference on Business Process Management (BPM), Sevilla, Spain, 2020",
        publishedAt: new Date(2020, 9, 4),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-58666-9_15",
        code: "https://github.com/renuka98/interpretable_predictive_processmodel",
        Abstract:"There has been a growing interest in the literature on the application of deep learning models for predicting business process behaviour, such as the next event in a case, the time for completion of an event, and the remaining execution trace of a case. Although these models provide high levels of accuracy, their sophisticated internal representations provide little or no understanding about the reason for a particular prediction, resulting in them being used as black-boxes. Consequently, an interpretable model is necessary to enable transparency and empower users to evaluate when and how much they can rely on the models. This paper explores an interpretable and accurate attention-based Long Short Term Memory (LSTM) model for predicting business process behaviour. The interpretable model provides insights into the model inputs influencing a prediction, thus facilitating transparency. An experimental evaluation shows that the proposed model capable of supporting interpretability also provides accurate predictions when compared to existing LSTM models for predicting process behaviour. The evaluation further shows that attention mechanisms in LSTM provide a sound approach to generate meaningful interpretations across different tasks in predictive process analytics.",
        bibtex: "@inproceedings{sindhgatta2020exploring, title={Exploring interpretable predictive models for business processes}, author={Sindhgatta, Renuka and Moreira, Catarina and Ouyang, Chun and Barros, Alistair}, booktitle={International conference on business process management}, pages={257--272}, year={2020}, organization={Springer} }"
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
        code: "https://github.com/catarina-moreira/LINDA_DSS",
        Abstract: "The use of sophisticated machine learning models for critical decision-making faces the challenge that these models are often applied as a ‘black-box’. This has led to an increased interest in interpretable machine learning, where post-hoc model-agnostic algorithms present a useful mechanism for generating interpretations of complex learning models. This paper proposes a novel approach based on Bayesian Networks to generate local post-hoc model-agnostic interpretations of a black-box predictive model. Consequently, the proposed approach presents features that are conditionally dependent between each other and that are directly influencing the class variable. This enables the decision-maker to better understand how features are related and why a certain prediction was made. Compared to the existing post-hoc interpretation methods, the contribution of our approach is three-fold: (1) as a probabilistic graphical model, the extracted Bayesian network can provide interpretations through conditional dependencies in a graphical structure regarding what input features and how/why they contributed to a prediction; (2) for complex decision problems with many features, a Markov blanket can be generated from the extracted Bayesian network to provide interpretations with a focused view on those input features that directly contributed to a prediction; (3) the extracted Bayesian network enables the identification of four different rules which can inform the decision-maker about the confidence level in a prediction, thus helping the decision-maker assess the reliability of predictions learned by a black-box model. We implemented the proposed approach, applied it in the context of two well-known public datasets and analysed the results, which are made available in an open-source repository: https://github.com/catarina-moreira/LINDA_DSS.",
        bibtex: "@article{moreira2021linda, title={LINDA-BN: An interpretable probabilistic approach for demystifying black-box predictive models}, author={Moreira, Catarina and Chou, Yu-Liang and Velmurugan, Mythreyi and Ouyang, Chun and Sindhgatta, Renuka and Bruza, Peter}, journal={Decision Support Systems}, volume={150}, pages={113561}, year={2021}, publisher={Elsevier} }"
    },
    {
        id: "7",
        title: "Wei Tan, Prayag Tiwari, Hari Mohan Pandey, Catarina Moreira, and Amit Kumar Jaiswal, <span style='color:#1890FF'>*Multi-modal medical image fusion algorithm in the era of big data*</span>, Neural Computing and Applications, 2020",
        publishedAt: new Date(2020, 7, 8),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.1007/s00521-020-05173-2",
        Abstract: "In image-based medical decision-making, different modalities of medical images of a given organ of a patient are captured. Each of these images will represent a modality that will render the examined organ differently, leading to different observations of a given phenomenon (such as stroke). The accurate analysis of each of these modalities promotes the detection of more appropriate medical decisions. Multimodal medical imaging is a research field that consists in the development of robust algorithms that can enable the fusion of image information acquired by different sets of modalities. In this paper, a novel multimodal medical image fusion algorithm is proposed for a wide range of medical diagnostic problems. It is based on the application of a boundary measured pulse-coupled neural network fusion strategy and an energy attribute fusion strategy in a non-subsampled shearlet transform domain. Our algorithm was validated in dataset with modalities of several diseases, namely glioma, Alzheimer’s, and metastatic bronchogenic carcinoma, which contain more than 100 image pairs. Qualitative and quantitative evaluation verifies that the proposed algorithm outperforms most of the current algorithms, providing important ideas for medical diagnosis.",
        bibtex: "@article{tan2020multimodal, title={Multimodal medical image fusion algorithm in the era of big data}, author={Tan, Wei and Tiwari, Prayag and Pandey, Hari Mohan and Moreira, Catarina and Jaiswal, Amit Kumar}, journal={Neural Computing and Applications}, pages={1--21}, year={2020}, publisher={Springer} }"
    },
    {
        id: "8",
        title: "Vikash Chouhan, Sanjay Kumar Singh, Aditya Khamparia, Deepak Gupta, Prayag Tiwari, Catarina Moreira, Robertas Damasevicius, Victor Hugo C. de Albuquerque, <span style='color:#1890FF'>*A Novel Transfer Learning Based Approach for Pneumonia Detection in Chest X-ray Images*</span>, Applied Sciences, 10, 559, 2020.",
        publishedAt: new Date(2020, 1, 12),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.3390/app10020559",
        Abstract: "Pneumonia is among the top diseases which cause most of the deaths all over the world. Virus, bacteria and fungi can all cause pneumonia. However, it is difficult to judge the pneumonia just by looking at chest X-rays. The aim of this study is to simplify the pneumonia detection process for experts as well as for novices. We suggest a novel deep learning framework for the detection of pneumonia using the concept of transfer learning. In this approach, features from images are extracted using different neural network models pretrained on ImageNet, which then are fed into a classifier for prediction. We prepared five different models and analyzed their performance. Thereafter, we proposed an ensemble model that combines outputs from all pretrained models, which outperformed individual models, reaching the state-of-the-art performance in pneumonia recognition. Our ensemble model reached an accuracy of 96.4% with a recall of 99.62% on unseen data from the Guangzhou Women and Children’s Medical Center dataset. ",
        bibtex: "@article{chouhan2020novel, title={A novel transfer learning based approach for pneumonia detection in chest X-ray images}, author={Chouhan, Vikash and Singh, Sanjay Kumar and Khamparia, Aditya and Gupta, Deepak and Tiwari, Prayag and Moreira, Catarina and Dama{\v{s}}evi{\v{c}}ius, Robertas and De Albuquerque, Victor Hugo C}, journal={Applied Sciences}, volume={10}, number={2}, pages={559}, year={2020}, publisher={MDPI} }"
    },
    {
        id: "9",
        title: "Bemali Wickramanayake, Zhipeng He, Chun Ouyang, Catarina Moreira, Yue Xu, Renuka Sindhgatta, <span style='color:#1890FF'>*Building Interpretable Models for Business Process Prediction using Shared and Specialised Attention Mechanisms*</span>. Knowledge-Based Systems, 248, 108773, 2022.",
        publishedAt: new Date(2022, 7, 19),
        destination: PublicationDestination.Journals,
        doi: "https://doi.org/10.1016/j.knosys.2022.108773",
        code: "https://github.com/ZhipengHe/Shared-and-Specialised-Attention-based-Interpretable-Models",
        Abstract: 'In this paper, we address the "black-box" problem in predictive process analytics by building interpretable models that are capable to inform both what and why is a prediction. Predictive process analytics is a newly emerged discipline dedicated to providing business process intelligence in modern organisations. It uses event logs, which capture process execution traces in the form of multi-dimensional sequence data, as the key input to train predictive models. These predictive models, often built upon deep learning techniques, can be used to make predictions about the future states of business process execution. We apply attention mechanism to achieve model interpretability. We propose i) two types of attentions: event attention to capture the impact of specific process events on a prediction, and attribute attention to reveal which attribute(s) of an event influenced the prediction; and ii) two attention mechanisms: shared attention mechanism and specialised attention mechanism to reflect different design decisions in when to construct attribute attention on individual input features (specialised) or using the concatenated feature tensor of all input feature vectors (shared). These lead to two distinct attention-based models, and both are interpretable models that incorporate interpretability directly into the structure of a process predictive model. We conduct experimental evaluation of the proposed models using real-life dataset, and comparative analysis between the models for accuracy and interpretability, and draw insights from the evaluation and analysis results.',
        bibtex: "@article{wickramanayake2022building, title={Building interpretable models for business process prediction using shared and specialised attention mechanisms}, author={Wickramanayake, Bemali and He, Zhipeng and Ouyang, Chun and Moreira, Catarina and Xu, Yue and Sindhgatta, Renuka}, journal={Knowledge-Based Systems}, volume={248}, pages={108773}, year={2022}, publisher={Elsevier} }"
    },
    {
        id: "10",
        title: "Chun Ouyang, Renuka Sindhgatta, Catarina Moreira, <span style='color:#1890FF'>*Explainable AI Enabled Inspection of Business Process Prediction Models*</span>. CoRR abs/2107.09767 (2021)",
        publishedAt: new Date(2021, 7, 16),
        destination: PublicationDestination.Arxiv,
        arXiv: "https://arxiv.org/abs/2107.09767",
        code: "https://git.io/Je186",
        code2: "https://git.io/Je1XZ",
        Abstract:"Modern data analytics underpinned by machine learning techniques has become a key enabler to the automation of data-led decision making. As an important branch of state-of-the-art data analytics, business process predictions are also faced with a challenge in regard to the lack of explanation to the reasoning and decision by the underlying `black-box' prediction models. With the development of interpretable machine learning techniques, explanations can be generated for a black-box model, making it possible for (human) users to access the reasoning behind machine learned predictions. In this paper, we aim to present an approach that allows us to use model explanations to investigate certain reasoning applied by machine learned predictions and detect potential issues with the underlying methods thus enhancing trust in business process prediction models. A novel contribution of our approach is the proposal of model inspection that leverages both the explanations generated by interpretable machine learning mechanisms and the contextual or domain knowledge extracted from event logs that record historical process execution. Findings drawn from this work are expected to serve as a key input to developing model reliability metrics and evaluation in the context of business process predictions.",
        bibtex: "@misc{ouyang2021explainable, doi = {10.48550/ARXIV.2107.09767}, author = {Ouyang, Chun and Sindhgatta, Renuka and Moreira, Catarina}, title = {Explainable AI Enabled Inspection of Business Process Prediction Models}, publisher = {arXiv}, year = {2021} }"
    },
    {
        id: "11",
        title: "Chihcheng Hsieh, Catarina Moreira, Chun Ouyang, <span style='color:#1890FF'>*DiCE4EL: Interpreting Process Predictions using a Milestone-Aware Counterfactual Approach*</span>, In Proceedings of the 3rd International Conference on Process Mining, 2021",
        publishedAt: new Date(2021, 1, 1),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1109/ICPM53251.2021.9576881",
        code: "https://github.com/ChihchengHsieh/EventLogDiCE",
        Abstract: "Predictive process analytics often apply machine learning to predict the future states of a running business process. However, the internal mechanisms of many existing predictive algorithms are opaque and a human decision-maker is unable to understand why a certain activity was predicted. Recently, counterfactuals have been proposed in the literature to derive human-understandable explanations from predictive models. Current counterfactual approaches consist of finding the minimum feature change that can make a certain prediction flip its outcome. Although many algorithms have been proposed, their application to multi-dimensional sequence data like event logs has not been explored in the literature.In this paper, we explore the use of a recent, popular model-agnostic counterfactual algorithm, DiCE, in the context of predictive process analytics. The analysis reveals that DiCE is unable to derive explanations for process predictions, due to (1) process domain knowledge not being taken into account, (2) long traces of process execution that often tend to be less understandable, and (3) difficulties in optimising the counterfactual search with categorical variables. We design an extension of DiCE, namely DiCE4EL (DiCE for Event Logs), that can generate counterfactual explanations for process prediction, and propose an approach that supports deriving milestone-aware counterfactual explanations at key intermediate stages along process execution to promote interpretability. We apply our approach to a publicly available real-life event log and the analysis results demonstrate the effectiveness of the proposed approach.",
        bibtex: "@inproceedings{hsieh2021dice4el, title={Dice4el: interpreting process predictions using a milestone-aware counterfactual approach}, author={Hsieh, Chihcheng and Moreira, Catarina and Ouyang, Chun}, booktitle={2021 3rd International Conference on Process Mining (ICPM)}, pages={88--95}, year={2021}, organization={IEEE} }"        
    },
    {
        id: "12",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira, Renuka Sindhgatta, <span style='color:#1890FF'>*Developing a Fidelity Evaluation Approach for Interpretable Machine Learning*</span>. CoRR abs/2106.08492 (2021)",
        publishedAt: new Date(2021, 6, 16),
        destination: PublicationDestination.Arxiv,
        arXiv:"https://arxiv.org/abs/2106.08492",
        code: "https://github.com/Mythreyi-V/three-phase-fidelity-evaluation/",
        Abstract: "Although modern machine learning and deep learning methods allow for complex and in-depth data analytics, the predictive models generated by these methods are often highly complex, and lack transparency. Explainable AI (XAI) methods are used to improve the interpretability of these complex models, and in doing so improve transparency. However, the inherent fitness of these explainable methods can be hard to evaluate. In particular, methods to evaluate the fidelity of the explanation to the underlying black box require further development, especially for tabular data. In this paper, we (a) propose a three phase approach to developing an evaluation method; (b) adapt an existing evaluation method primarily for image and text data to evaluate models trained on tabular data; and (c) evaluate two popular explainable methods using this evaluation method. Our evaluations suggest that the internal mechanism of the underlying predictive model, the internal mechanism of the explainable method used and model and data complexity all affect explanation fidelity. Given that explanation fidelity is so sensitive to context and tools and data used, we could not clearly identify any specific explainable method as being superior to another.",
        bibtex: "@misc{velmurugan2021developing, doi = {10.48550/ARXIV.2106.08492}, author = {Velmurugan, Mythreyi and Ouyang, Chun and Moreira, Catarina and Sindhgatta, Renuka}, title = {Developing a Fidelity Evaluation Approach for Interpretable Machine Learning}, publisher = {arXiv}, year = {2021} }"
    },
    {
        id: "13",
        title: "Yu-Liang Chou, Catarina Moreira, Peter Bruza, Chun Ouyang, Joaquim A. Jorge, <span style='color:#1890FF'>*Counterfactuals and Causability in Explainable Artificial Intelligence: Theory, Algorithms, and Applications*</span>. Information Fusion 81, 59-83, 2022",
        publishedAt: new Date(2022, 5, 1),
        destination: PublicationDestination.Journals,
        // arXiv: "https://arxiv.org/abs/2103.04244",
        doi: "https://doi.org/10.1016/j.inffus.2021.11.003",
        code: "",
        Abstract: "There has been a growing interest in model-agnostic methods that can make deep learning models more transparent and explainable to a user. Some researchers recently argued that for a machine to achieve a certain degree of human-level explainability, this machine needs to provide human causally understandable explanations, also known as causability. A specific class of algorithms that have the potential to provide causability are counterfactuals. This paper presents an in-depth systematic review of the diverse existing body of literature on counterfactuals and causability for explainable artificial intelligence. We performed an LDA topic modelling analysis under a PRISMA framework to find the most relevant literature articles. This analysis resulted in a novel taxonomy that considers the grounding theories of the surveyed algorithms, together with their underlying properties and applications in real-world data. This research suggests that current model-agnostic counterfactual algorithms for explainable AI are not grounded on a causal theoretical formalism and, consequently, cannot promote causability to a human decision-maker. Our findings suggest that the explanations derived from major algorithms in the literature provide spurious correlations rather than cause/effects relationships, leading to sub-optimal, erroneous or even biased explanations. This paper also advances the literature with new directions and challenges on promoting causability in model-agnostic approaches for explainable artificial intelligence.",
        bibtex: "@article{chou2022counterfactuals, title={Counterfactuals and causability in explainable artificial intelligence: Theory, algorithms, and applications}, author={Chou, Yu-Liang and Moreira, Catarina and Bruza, Peter and Ouyang, Chun and Jorge, Joaquim}, journal={Information Fusion}, volume={81}, pages={59--83}, year={2022}, publisher={Elsevier} }",
    },
    {
        id: "14",
        title: "Bemali Wickramanayake, Chun Ouyang, Catarina Moreira, Yue Xu, <span style='color:#1890FF'>*Generating Purpose-Driven Explanations: The Case of Process Predictive Model Inspection*</span>, In Proceedings of the 34th International Conference on Advanced Information Systems Engineering (CAiSE) Forum, 2022",
        publishedAt: new Date(2022, 5, 28),
        destination: PublicationDestination.Conferences,
        doi:"https://doi.org/10.1007/978-3-031-07481-3_14",
        demo: "https://tinyurl.com/Visualexplanation4inspection",
        Abstract:"Explainable AI is an emerging branch of data science that focuses on demystifying the complex computation logic of machine learning with an aim to improve the transparency, validity and trust in automated decisions. While existing research focuses on building methods and techniques to explain ‘black-box’ models, much attention has not been paid to generating model explanations. Effective model explanations are often driven by the purpose of explanation in a given problem context. In this paper, we propose a framework to support generating model explanations for the purpose of model inspection in the context of predictive process analytics. We build a visual explanation platform as an implementation of the proposed framework for inspecting and analysing a process predictive model, and demonstrate the applicability of the framework using a real-life case study on a loan application process."
    },
    {
        id: "15",
        title: "Jing Yang, Chun Ouyang, Guvenc Dik, Paul Corry, Arthur ter Hofstede, <span style='color:#1890FF'>*Crop Harvest Forecast via Agronomy-informed Process Modelling and Predictive Monitoring*</span>, In Proceedings of the 34th International Conference on Advanced Information Systems Engineering (CAiSE), 2022",
        publishedAt: new Date(2022, 6, 3),
        destination: PublicationDestination.Conferences,
        doi:"https://doi.org/10.1007/978-3-031-07472-1_12",
        Abstract:"Reliable and timely forecasts on crop harvest bring significant benefits to agri-food industries by providing valuable input to complex decisions on production planning. Useful predictions on crop harvest require continual effort by seasoned field agronomists. However, they are often scarce resources in the real-world. A feasible way to facilitate crop harvest forecast is through developing predictive models that can exploit data relevant to crop growth and automatically generate consistent predictions. To this end, this paper presents our design of a systematic and data-driven approach to supporting online forecasts on crop harvest. Underpinned by process modelling and predictive monitoring techniques, our approach can utilise crop-growth-related information from multiple data sources and progressively generate crop harvest predictions within the crop growing season. The approach has a flexible design informed by agronomic knowledge applicable to crop growth in general, and may be tailored to different crops and production scenarios. A case study with a local farming company using its real-life production data demonstrates the feasibility and efficacy of our approach.",
        bibtex: "@inproceedings{yang2022crop, title={Crop Harvest Forecast via Agronomy-Informed Process Modelling and Predictive Monitoring}, author={Yang, Jing and Ouyang, Chun and Dik, G{\"u}ven{\c{c}} and Corry, Paul and ter Hofstede, Arthur HM}, booktitle={International Conference on Advanced Information Systems Engineering}, pages={201--217}, year={2022}, organization={Springer} }"
    },
    {
        id: "16",
        title: "Yu-Liang Chou, Chihcheng Hsieh, Catarina Moreira, Chun Ouyang, Joaquim Jorge, João Madeiras Pereira, <span style='color:#1890FF'>*Benchmark Evaluation of Counterfactual Algorithms for XAI: From a White Box to a Black Box*</span>. CoRR abs/2203.02399 (2022)",
        publishedAt: new Date(2022, 3, 4),
        destination: PublicationDestination.Arxiv,
        arXiv: "https://arxiv.org/abs/2203.02399",
        Abstract: "Counterfactual explanations have recently been brought to light as a potentially crucial response to obtaining human-understandable explanations from predictive models in Explainable Artificial Intelligence (XAI). Despite the fact that various counterfactual algorithms have been proposed, the state of the art research still lacks standardised protocols to evaluate the quality of counterfactual explanations. In this work, we conducted a benchmark evaluation across different model agnostic counterfactual algorithms in the literature (DiCE, WatcherCF, prototype, unjustifiedCF), and we investigated the counterfactual generation process on different types of machine learning models ranging from a white box (decision tree) to a grey-box (random forest) and a black box (neural network). We evaluated the different counterfactual algorithms using several metrics including proximity, interpretability and functionality for five datasets. The main findings of this work are the following: (1) without guaranteeing plausibility in the counterfactual generation process, one cannot have meaningful evaluation results. This means that all explainable counterfactual algorithms that do not take into consideration plausibility in their internal mechanisms cannot be evaluated with the current state of the art evaluation metrics; (2) the counterfactual generated are not impacted by the different types of machine learning models; (3) DiCE was the only tested algorithm that was able to generate actionable and plausible counterfactuals, because it provides mechanisms to constraint features; (4) WatcherCF and UnjustifiedCF are limited to continuous variables and can not deal with categorical data.",
        bibtex: "@misc{chou2022benchmark, doi = {10.48550/ARXIV.2203.02399}, author = {Chou, Yu-Liang and Hsieh, Chihcheng and Moreira, Catarina and Ouyang, Chun and Jorge, Joaquim and Pereira, João Madeiras}, title = {Benchmark Evaluation of Counterfactual Algorithms for XAI: From a White Box to a Black Box}, publisher = {arXiv}, year = {2022} }",
    },
    {
        id: "17",
        title: "Mythreyi Velmurugan, Chun Ouyang, Catarina Moreira, Renuka Sindhgatta, <span style='color:#1890FF'>*Evaluating Stability of Post-hoc Explanations for Business Process Predictions</span>, In Proceedings of the 19th International Conference on Service-Oriented Computing, 49-64, 2021",
        publishedAt: new Date(2021, 11, 18),
        destination: PublicationDestination.Conferences,
        doi: "https://doi.org/10.1007/978-3-030-91431-8_4",
        code: "https://github.com/Mythreyi-V/PPA_Stability",
        Abstract: "Predictive process analytics uses advanced machine learning techniques to accurately predict future states of running business processes. Given the complexity of these predictive models, explainable AI techniques are also required to enable informed decision-making. However, few studies evaluate the quality of explanations provided by existing methods to explain business process predictions. In this paper, we attempt to evaluate the consistency of explanations produced for process predictions by two popular explainable methods. We propose that methods and metrics to assess feature selection algorithms can be used to evaluate explanation stability. We use these metrics to assess explanations produced by LIME and SHAP. Our findings indicate that explanation stability may depend on dataset characteristics, feature construction methods and predictive model characteristics. In addition, we also find that, though stable explanations are needed for informed decision-making, unexpected behaviour in explanation stability can act as a diagnostic tool to determine model quality.",
        bibtex: "@inproceedings{velmurugan2021evaluating, title={Evaluating stability of post-hoc explanations for business process predictions}, author={Velmurugan, Mythreyi and Ouyang, Chun and Moreira, Catarina and Sindhgatta, Renuka}, booktitle={International Conference on Service-Oriented Computing}, pages={49--64}, year={2021}, organization={Springer} }"
    },
    {
        id: "18",
        title: "Catarina Moreira, Isabel Blanco Nobre, Sandra Costa Sousa, Joao Madeiras Pereira, Joaquim Jorge, <span style='color:#1890FF'>*Improving X-ray Diagnostics through Eye-Tracking and XR*</span>, In Proceedings of 2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), 450-453, 2022",
        publishedAt: new Date(2022, 3, 12),
        destination: PublicationDestination.Conferences,
        doi: "https://www.doi.org/10.1109/VRW55335.2022.00099",
        Abstract: "There is a growing need to assist radiologists in performing X-ray readings and diagnoses fast, comfortably, and effectively. As radiologists strive to maximize productivity, it is essential to consider the impact of reading rooms in interpreting complex examinations and ensure that higher volume and reporting speeds do not compromise patient outcomes. Virtual Reality (VR) is a disruptive technology for clinical practice in assessing X-ray images. We argue that conjugating eye-tracking with VR devices and Machine Learning may overcome obstacles posed by inadequate ergonomic postures and poor room conditions that often cause erroneous diagnostics when professionals examine digital images.",
        bibtex: "@inproceedings{moreira2022improving, title={Improving X-ray Diagnostics through Eye-Tracking and XR}, author={Moreira, Catarina and Nobre, Isabel Blanco and Sousa, Sandra Costa and Pereira, Jo{\~a}o Madeiras and Jorge, Joaquim}, booktitle={2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)}, pages={450--453}, year={2022}, organization={IEEE} }"
    },
    {
        id: "19",
        title: "Jia Wei, Zhipeng He, Chun Ouyang, Catarina Moreira, <span style='color:#1890FF'>*MIMICEL: MIMIC-IV Event Log for Emergency Department*</span>, PhysioNet, 2022",
        publishedAt: new Date(2022, 7, 18),
        destination: PublicationDestination.Datasets,
        doi:"https://doi.org/10.13026/64aq-jw11",
        code: "https://github.com/ZhipengHe/MIMIC-IV-event-log-extraction-for-ED",
        Abstract: "In this work, we extract an event log from the MIMIC-IV-ED dataset by adopting a well-established event log generation methodology, and we name this event log MIMICEL. The data tables in the MIMIC-IV-ED dataset relate to each other based on the existing relational database schema, and each table records the individual activities of patients along their journey in the emergency department (ED). While the data tables in the MIMIC-IV-ED dataset catch snapshots of a patient journey in the ED, the extracted event log MIMICEL aims to capture an end-to-end patient journey process. This will enable us to analyse the existing patient flows, thereby improving the efficiency of an ED process.",
        bibtex: "@misc{mimicel, title={MIMICEL: MIMIC-IV Event Log for Emergency Department}, author={Wei, Jia and He, Zhipeng and Ouyang, Chun and Moreira, Catarina}, year = {2022}, doi = {10.13026/64aq-jw11}, note={Version 1.0.0}, publisher = {Physionet} }",
    }

];


