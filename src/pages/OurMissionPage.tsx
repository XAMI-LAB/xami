import { Divider } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import { LoremIpsum } from 'react-lorem-ipsum';
import React from 'react'
import '../styles/Base.scss'

export default function OurMissionPage() {
    const screen = useBreakpoint();

    return (
        <div className={`home-content`} style={{ marginLeft: screen.md ? "15%": "0%", maxWidth: screen.md ? "70%": "100%"}}>
            <div className="home-title">
                <div className="title">
                    Our Vision
                </div>

                <div className="paragraph">
                <LoremIpsum p={1} />
                </div>
            </div>
            
            <Divider />
            <div className="home-title">
                <div className="title">
                    Our Mission
                </div>

                <div className="paragraph">
                    Our mission is to make current intelligent autonomous predictive models explainable, transparent and understandable to decision-makers. We aim to develop new theories, frameworks and algorithms to detect biases and provides an ethical and fair analysis of automated predictions that will result in trustworthy insights for empowering human decision-making. The technical and theoretical developments of our group will allow not only Australian businesses to streamline their businesses by capitalising on trustworthy and user-centric analytics but also other sectors such as promoting trust on artificial intelligent systems in healthcare.
                </div>
            </div>

            <Divider />
            <div className="home-title">
                <div className="title">
                    Our Values
                </div>

                <div className="paragraph">
                    <div>
                        AI for Social Good
                    </div>

                    <div>
                        Pursuit of Excellence
                    </div>

                    <div>
                        Creativity and Independent Thinking
                    </div>

                    <div>
                        Diversity and Inclusion
                    </div>
                </div>
            </div>

            <Divider />
            <div className="home-title">
                <div className="title">
                Acknowledgement
                </div>

                <div className="paragraph">
                <LoremIpsum p={1} />
                </div>
            </div>

        </div >
    )
}
