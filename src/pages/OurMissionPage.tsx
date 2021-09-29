import { Divider } from 'antd';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint'
import React from 'react'

export default function OurMissionPage() {
    const screens = useBreakpoint();

    return (
        <div style={{ padding: screens.md ? "40px 60px" : "40px 25px", maxWidth: "1360px" }} >
            <div style={{ marginBottom: "60px" }}>
                <div style={{ fontFamily: "Playfair Display", fontSize: screens.md ? "72px" : "46px", fontWeight: "bold", paddingBottom: "46px" }}>
                    Our Mission
                </div>

                <div style={{ width: screens.md ? "60vw" : "90vw", fontFamily: "Raleway" }}>
                    Our mission is to make current intelligent autonomous predictive models explainable, transparent and understandable to decision-makers. We aim to develop new theories, frameworks and algorithms to detect biases and provides an ethical and fair analysis of automated predictions that will result in trustworthy insights for empowering human decision-making. The technical and theoretical developments of our group will allow not only Australian businesses to streamline their businesses by capitalising on trustworthy and user-centric analytics but also other sectors such as promoting trust on artificial intelligent systems in healthcare.
                </div>
            </div>

            <Divider />
            <div style={{ marginTop: "30px", marginBottom:"200px" }}>
                <div style={{ fontFamily: "Playfair Display", fontSize: screens.md ? "46px" : "32px", fontWeight: "bold", paddingBottom: "46px" }}>
                    Our Values
                </div>

                <div style={{ width: screens.md ? "60vw" : "90vw", fontFamily: "Raleway" }}>
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
