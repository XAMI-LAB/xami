import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {Divider, Image, BackTop } from 'antd'
import { LoremIpsum } from 'react-lorem-ipsum';
import '../styles/Base.scss';

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div className="section #Explainable-Predictive-Process-Analytics">
            Explainable Predictive Process Analytics
            </div>
            <div className="paragraph">
            <p>
                Predictive process analytics is a newly emerged discipline dedicated to providing business process intelligence in 
                modern organisations. It uses event logs, which capture process execution traces in the form of multi-dimensional time-series 
                data, as the key input to train process predictive models. These predictive models, 
                often underpinned by machine learning (incl. deep learning) techniques, aim at predicting future states of a business 
                process by learning from process execution history recorded in event log data. Typical examples of business process 
                predictions include predicting next events to occur along process execution, outcomes that the execution of a business 
                process may lead to, and the remaining time till the completion of process execution. 
            </p>
            <p>
                Whilst accuracy has been a dominant criterion in building predictive capabilities in process analytics, the use of advanced 
                machine learning techniques as the underlying mechanism comes at the cost of the models being used as "black boxes" -- they 
                lack explanations for users to understand their reasoning and as such they are unable to provide insights into why a certain 
                business process prediction was made. Without explainability, it is hard for users to trust the reliability of a predictive 
                model, let alone its predictions. This has led to establishment of the research theme on <i>explainable predictive process analytics</i>. 
            </p>

            <Image width="100%" src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200030/XPPA_l740f7.png" />

            <p>
                The projects under this research theme aim to address the notions of explainablility and interpretability throughout the pipeline of 
                predictive process analytics. These include but not limited to the following topics: 
            </p>
            <ul>
            <li>Interpretability-oriented feature representation and feature construction from event logs and relevant contextual data </li>
            <li>XAI-enabled inspection of process predictive models </li>
            <li>Buidling robust and interpretable models for process predictions </li>
            <li>Generating user-centric explanations for process predictions </li>
            <li>Evaluation of explainable methods for predictive process Analytics </li>
            </ul>
            <p>
            Application domains:  
            </p>
            <ul>
                <li>Healthcare</li>
                <li>Industrial IoT</li>
                <li>Agri-food industry</li>
                <li>Government sector</li>
                <li>Finance and Insurance</li>

            </ul>
            </div>
            <Divider />

            <div className="section">
                Probabilistic & Causal Models for Responsible AI
            </div>
            <div className="paragraph">
                <p>
                    Deep learning models have achieved high performance across different domains, such as medical decision-making, 
                    autonomous vehicles, decision support systems, among many others. However, despite this success, the inner 
                    mechanisms of these models are opaque because their internal representations are too complex for a human to 
                    understand. This opacity makes it hard to understand the how or the why of the predictions of deep learning models. 
                </p>
                <p>
                    Recently, there has been a growing interest in the literature in "what-if" explanations which are called counterfactuals. 
                    An example of such explanations is the following: "My loan application got rejected. What would I have to change in my 
                    application to make my load accepted?". Counterfactuals in XAI are currently the bridge between traditional machine-based 
                    statistical analysis, human risk factor models, and explainable artificial intelligence. 
                </p>
                <Image 
                    width="100%"
                    src="https://res.cloudinary.com/zhipenghe/image/upload/v1635199750/XAI_fo0tpg.png"
                />
                <p>
                This research theme aims to make machine learning models understandable to human decision makers by providing human-centric 
                counterfactual explanations of their inner workings. It builds on the hypothesis that causality is a crucial missing ingredient 
                for opening the black box to render it understandable to human decision makers through counterfactual "what-if" explanations. 
                Current explainable algorithms in the literature are based on correlations and sensitive to sampling bias, which can make the 
                explanations more biased than the black-box itself. In this research theme, we argue that to achieve explainability, causality 
                is a necessary condition to achieve human understandable explanations. The topics covered in this research theme include: 
                </p>
                <ul>
                    <li>Build counterfactual algorithms in XAI</li>
                    <li>Develop causal inference methods for XAI from observational data </li>
                    <li>Novel probabilistic interpretable algorithms for XAI</li>
                    <li>Develop standardized evaluation protocols for counterfactuals in XAI</li>
                </ul>
            </div>
            <Divider />

            <div className="section">
                Persuasive Models for Explainable AI
            </div>
            <div className="paragraph">
                <p>
                This research theme leverages on persuasive AI to provide trustful explanations for humans in deep learning models. 
                Persuasive AI corresponds to the set of techniques to generate narratives that bring users meaningful changes in 
                beliefs. Recently, interpretable models for explainable AI models that can extract sub-symbolic information from 
                black-boxes were proposed in the literature. However, it remains an open research question on <i>how to convert this 
                symbolic information into human understandable explanations</i>. We argue that persuasive AI has the potential to provide 
                human-centric explanations that can increase the trust of a user in a prediction. 
                </p>
                <Image 
                    width="100%"
                    src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200109/Persuaive_oxtfgq.png"
                />
                <p>
                    This research proposes a novel approach to endow machine intelligence with capabilities to explain underlying predictive 
                    mechanisms to help users understand and scrutinize the system's decisions. These topics include: 
                </p>
                <ul>
                <li>Construction of human centric explainable messages</li>
                <li>Build persuasive models for XAI </li>
                <li>Development of Human grounded evaluation protocols that take into consideration the persuasiveness of the system </li>
                </ul>
            </div>
            <Divider />

            <div className="section">
                Explainable Medical Diagnostic Systems
            </div>
            <div className="paragraph">
                <p>
                    This research theme is focused in building human-centric explainable intelligent interfaces that can assist physicians in understanding the predictions of deep learning models in the medical diagnosis of chest X-ray images. 
                </p>
                <Image 
                    width="100%"
                    src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200117/Medical_yilp18.png"
                />
                <p>
                This research theme aims to build a novel framework consisting of algorithms, models, techniques, and tools that i) support 
                generating human-centric explanations from the machine learned predictions of chest X-rays, and ii) allow medical practitioners 
                to interact with the reasoning underpinned by machine intelligence. The main research topics include but are not limited to: 
                </p>
                <ul>
                    <li>Investigate the incorporation of human classification patterns in deep learning frameworks </li>
                    <li>Develop user-centric explainable intelligent user interfaces </li>
                    <li>Generate persuasive human-centric explanations for medical diagnosis </li>
                    <li>Develop new frameworks and tools to support human in the loop in medical diagnosis </li>
                    <li>Develop human and application grounded evaluation protocols for XAI in medical diagnosis</li>
                </ul>
            </div>
        </div >
    )
}
