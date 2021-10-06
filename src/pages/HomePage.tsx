import { Card, Col, Divider, Image, Row, Select } from 'antd'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import {isMobile, isIE} from 'react-device-detect';
import '../styles/Base.scss';

export default function HomePage() {
    // TODO: Replace all inline styles with scss styles

    const history = useHistory();

    // const screens = useBreakpoint()
    if (isIE) return (<div> IE is not supported. Download Chrome/Edge/Firefox </div>)
    var device = "desktop"
    if (isMobile) {
        device = "mobile"
    }


    return (
        <div className={`home-content ${device}`}>
            <div className="home-title">
                <div className="title">Welcome to XAMI Lab @QUT!</div>
                <div className="description">Explainable Analytics for Machine Intelligence (XAMI) Lab<br />Supporting Human-Machine Collaboration and Co-evolution</div>
                <br />
                <Divider />
                <div className="section">About us</div>
                <div className="paragraph">
                    The Explainable Analytics for Machine Intelligence Lab provides a wide range of algorithms, methods and techniques to make machine learning models
                    explainable, transparent, trustworthy and understandable to human-decision makers.
                    To learn more about this initiative, visit our <Link className="link" to="/members">team</Link>, <Link className="link" to="/research-plan">research projects</Link>,
                    or read our <Link className="link" to="/publications">publications</Link>.
                </div>

                <div className="home-video">
                    <LiteYouTubeEmbed 
                        id="xUs_H9m3DrI"
                        title='ACEMS Talk on Explainable Analytics for "Black-Box" Machine Intelligence'
                        poster="hqdefault"
                    />
                </div>
                
                <Divider />
                <div className="section">Research Themes</div>
                <Row gutter={[32, 32]} justify="center" typeof="flex">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                history.push('/research-projects')
                                // TODO: Push to research theme page.
                            }}
                            cover={<img 
                                alt="exlainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/predictive-process-analytics-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title" >{<Link className="link" to="/research-projects">Explainable Predictive Process Analytics</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" 
                            hoverable
                            onClick={() => {
                                history.push('/research-projects')
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img 
                                    alt="Probabilistic & Causal Models for Responsible AI IMG" 
                                    src={`${process.env.PUBLIC_URL}/assets/project/responsible-ai-img.png`} />}
                        >
                            <Card.Meta 
                                title={<div className="card-title" >{<Link className="link" to="/research-projects">Probabilistic & Causal Models for Responsible AI</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                history.push('/research-projects')
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img 
                                alt="exlainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/persuasive-models-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title">{<Link className="link" to="/research-projects">Persuasive Models for Explainable AI</Link>}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={6}>
                        <Card className="card" hoverable
                            onClick={() => {
                                history.push('/research-projects')
                                // TODO: Push to research theme page. 
                                // testing
                            }}
                            cover={<img 
                                alt="exlainble_predictive_process_analytics" 
                                src={`${process.env.PUBLIC_URL}/assets/project/medical-ai-img.png`} />}
                        >
                            <Card.Meta title={<div className="card-title">{<Link className="link" to="/research-projects">Explainable Medical Diagnostic Systems</Link>}</div>} />
                        </Card>
                    </Col>
                </Row>
            </div>
            {/* <LoadingContentShowingWrap error={error} isInit={isInit} isLoading={isLoading} loadingComponent={<Skeleton active paragraph={{ rows: 5, }} title={{ width: "40vw" }} />}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} skipHtml={false}>
                    {showingMd?.content ?? ""}
                </ReactMarkdown>
            </LoadingContentShowingWrap> */}
            <br />
            <br />
            {/* 
            <LoadingContentShowingWrap error={publicatinoResult.error} isInit={publicatinoResult.isInit} isLoading={publicatinoResult.loading} loadingComponent={<Skeleton active paragraph={{ rows: 5, }} title={{ width: "40vw" }} />}>
                <div>
                    <h3 style={{ fontStyle: "italic" }}>Latest Publications: </h3>
                    <List itemLayout="horizontal" >
                        {
                            publicatinoResult.publications?.map(p => <PublicationShowingListItem key={p.id} showingPublication={p} />)
                        }
                    </List>
                </div>
            </LoadingContentShowingWrap> */}
        </div>
    )
}
