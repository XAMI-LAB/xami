import { Divider, BackTop } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { LoremIpsum } from 'react-lorem-ipsum';
import React from 'react'
import '../styles/Base.scss'

export default function OurMissionPage() {
    const screen = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screen.md ? "15%": "0%", maxWidth: screen.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title">
                <div className="title">
                    Our Vision
                </div>

                <div className="paragraph">
                To support human-machine collaboration and co-evolution by making machine intelligence explainable, transparent, fair and understandable to human decision-makers.
                </div>
            </div>
            
            <Divider />
            <div className="home-title">
                <div className="title">
                    Our Mission
                </div>

                <div className="paragraph">
                    <ul>
                        <li>Create breakthroughs in building explainable analytics for machine intelligence</li>
                            <ul>
                                <li>Devise new methods and techniques to build robust and interpretable models underpinned by machine intelligence</li>
                                <li>Design new theories and algorithms to detect biases and provide ethical and fair analyses of machine learned predictions</li>
                                <li>Develop new frameworks and tools for user-centric intelligent predictive systems that incorporate human-in-the-loop mechanisms</li>
                            </ul>
                        <li>Apply explainable machine intelligence to a wide range of application domains and industry sectors to promote innovative and sustainable industrialization</li>
                        <li>Build collaborative networks and foster multi-stakeholder partnerships in the context of explainable machine intelligence</li>
                        <li>Cultivate young research students to become new generations of career excellence achievers in Data Science for Social Good</li>
                    </ul>
                </div>
            </div>

            <Divider />
            <div className="home-title">
                <div className="title">
                    Our Values
                </div>

                <div className="paragraph">
                <ul>
                    <li>
                        Data Science for Social Good
                    </li>

                    <li>
                        Pursuit of Excellence
                    </li>

                    <li>
                        Creativity and Critical Thinking
                    </li>

                    <li>
                        Diversity and Inclusiveness
                    </li>
                    <li>
                        Positivity and Passion
                    </li>
                </ul>
                </div>
            </div>

            <Divider />
            <div className="home-title">
                <div className="title">
                Acknowledgement
                </div>

                <div className="paragraph">
                <ul>
                    <li>
                    QUT Women in Research Grant Scheme 2021 
                    </li>

                    <li>
                    QUT Center for Data Science First Byte Funding Program 2021 
                    </li>

                    <li>
                    Australian Government Research Training Program (International) Scholarship 2019 – 2022 
                    </li>

                    <li>
                    Australian Government Research Training Program (International) Scholarship 2020 – 2023 
                    </li>

                    <li>
                    Australian Government Research Training Program (Domestic) Scholarship 2020 – 2023 
                    </li>

                    <li>
                    QUT Science and Engineering Faculty Diversity Scholarship 2020 – 2023  
                    </li>

                    <li>
                    QUT Postgraduate Research Award (International) Scholarship 2021 – 2024
                    </li>

                    <li>
                    QUT Science and Engineering Faculty Scholarship 2021 – 2024 
                    </li>

                    <li>
                    QUT Centre for Data Science Higher Degree Research Scholarship 2021 – 2024
                    </li>

                    <li>
                    QUT Center for Data Science Top Up Scholarship 2021 – 2024
                    </li>

                    <li>
                    QUT Vacation Research Experience Scheme Scholarship 2020
                    </li>

                    <li>
                    QUT International Merit Scholarship 2021 
                    </li>

                    <li>
                    Higher Degree Research Internship Industry Scholarship 2021 
                    </li>
                </ul>
                </div>
            </div>

        </div >
    )
}
