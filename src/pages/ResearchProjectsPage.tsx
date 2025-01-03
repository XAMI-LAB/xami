import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import { BackTop, Row, Card, Col } from 'antd'
import { Link, useNavigate } from 'react-router-dom';
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../styles/Base.scss';

export default function ResearchProjectsPage() {
    const screens = useBreakpoint();

    const navigate = useNavigate();

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                Research Projects
            </div>

            <div>
                <Row gutter={[32, 32]} justify="center" typeof="flex">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                navigate('/Explainable-Predictive-Process-Analytics')
                                // TODO: Push to research theme page.
                            }}
                            cover={<img 
                                alt="explainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/predictive-process-analytics-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title" >{<Link className="link" 
                                to={"/Explainable-Predictive-Process-Analytics"}>Explainable Predictive Process Analytics</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" 
                            hoverable
                            onClick={() => {
                                navigate('/Causal-Models')
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img 
                                    alt="Probabilistic & Causal Models for Responsible AI IMG" 
                                    src={`${process.env.PUBLIC_URL}/assets/project/responsible-ai-img.png`} />}
                        >
                            <Card.Meta 
                                title={<div className="card-title">{<Link className="link" to="/Causal-Models">Probabilistic & Causal Models for Responsible AI</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                navigate('/Persuasive-Models')
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img 
                                alt="exlainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/persuasive-models-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title">{<Link className="link" to="/Persuasive-Models">Persuasive Models for Explainable AI</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                navigate('/Explainable-Medical')
                                // TODO: Push to research theme page. 
                                // testing
                            }}
                            cover={<img 
                                alt="exlainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/medical-ai-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title">{<Link className="link" to="/Explainable-Medical">Explainable Medical Diagnostic Systems</Link>}</div>} />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div >
    )
}
