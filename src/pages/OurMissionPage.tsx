import { Divider } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import React from 'react'
import {isMobile, isIE} from 'react-device-detect';
import '../styles/Base.scss'

export default function OurMissionPage() {
    // const screens = useBreakpoint();

    if (isIE) return (<div> IE is not supported. Download Chrome/Edge/Firefox </div>)
    var device = "desktop"
    if (isMobile) {
        device = "mobile"
    }

    return (
        <div className={`home-content ${device}`}>
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

        </div >
    )
}
