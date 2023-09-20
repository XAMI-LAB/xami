import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import {Divider, Image, BackTop } from 'antd'
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../../styles/Base.scss';

export default function ExplainableMedicalProjectsPage() {
    const screens = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div className="section" id="Explainable-Medical">
                Explainable Medical Diagnostic Systems
            </div>
            <div className="paragraph">
                <p>
                    This research theme is focused in building human-centric explainable intelligent interfaces that can assist physicians in understanding the predictions of deep learning models in the medical diagnosis of chest X-ray images. 
                </p>
                <Image 
                    width="100%"
                    // src="https://res.cloudinary.com/zhipenghe/image/upload/v1635200117/Medical_yilp18.png"
                    // src="https://raw.githubusercontent.com/ZhipengHe/ImgRepo/master/img/MedicalXAI.png"
                    src={`${process.env.PUBLIC_URL}/assets/project/MedicalXAI.png`}
                />
                <br/>
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
            <Divider />
        </div >
    )
}
