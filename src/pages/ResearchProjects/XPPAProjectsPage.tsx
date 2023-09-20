import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {Divider, Image, BackTop } from 'antd'
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../../styles/Base.scss';

export default function XPPAProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div className="section" id="Explainable-Predictive-Process-Analytics">
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

            <Image 
                width="100%" 
                // src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200030/XPPA_l740f7.png"
                // src="https://raw.githubusercontent.com/ZhipengHe/ImgRepo/master/img/XPPA.png"
                src={`${process.env.PUBLIC_URL}/assets/project/XPPA.png`}
                />
            <br/>
            <p>
                The projects under this research theme aim to address the notions of explainablility and interpretability throughout the pipeline of 
                predictive process analytics. These include but not limited to the following topics: 
            </p>
            <ul>
            <li>Interpretability-oriented feature construction from event logs and relevant contextual data </li>
            <li>XAI-enabled inspection of process predictive models </li>
            <li>Building robust and interpretable models for process predictions </li>
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
        </div >
    )
}
