import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {Divider, Image, BackTop } from 'antd'
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../../styles/Base.scss';

export default function CausalModelsProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div className="section" id="Causal-Models">
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
                    // src="https://res.cloudinary.com/zhipenghe/image/upload/v1635199750/XAI_fo0tpg.png"
                    // src='https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Counterfactual.png'
                    src={`${process.env.PUBLIC_URL}/assets/project/Counterfactual.png`}
                />
                <br/>
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
        </div >
    )
}
