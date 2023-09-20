import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {Divider, Image, BackTop } from 'antd'
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../../styles/Base.scss';

export default function PersuasiveModelsProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div className="section" id="Persuasive-Models">
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
                    // src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200109/Persuaive_oxtfgq.png"
                    // src="https://raw.githubusercontent.com/ZhipengHe/ImgRepo/master/img/Persuasive.png"
                    src={`${process.env.PUBLIC_URL}/assets/project/Persuasive.png`}
                />
                <br/>
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
        </div >
    )
}
