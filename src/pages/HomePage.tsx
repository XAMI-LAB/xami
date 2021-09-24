import { Card, Col, Divider, Image, Row, Select } from 'antd'
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom'

export default function HomePage() {

    const history = useHistory();

    const screens = useBreakpoint()

    return (
        <div style={{ textAlign: "start", padding: screens.md ? "40px 60px" : "40px 25px" }}>
            <div style={{ textAlign: "start" }}>
                <div style={{ fontSize: 42, fontWeight: 400, paddingBottom: "7px", fontFamily: "Playfair Display" }}>Welcome to XAMI Lab @QUT!</div>
                <div style={{ fontSize: 22, color: "#636363", fontFamily: "Raleway" }}>Explainable Analytics for MachineIntelligence (XAMI) Lab<br />Supporting Human-Machine Collaboration and Co-evolution</div>
                <br />
                <Divider />
                <div style={{ fontSize: 26, fontWeight: "bold", paddingBottom: "7px", fontFamily: "Playfair Display" }}>About us</div>
                <div style={{ width: screens.md ? "60vw" : "90vw", fontFamily: "Raleway" }}>
                    The Explainable Analytics for Machine Intelligence Lab provides a wide range of algorithms, methods and techniques to make machine learning models
                    explainable, transparent, trustworthy and understandable to human-decision makers.
                    To learn more about this initiative, visit our <Link to="/members">team</Link>, <Link to="/research-plan">research projects</Link>,
                    or read our <Link to="/publications">publications</Link>.
                </div>
                <Divider />
                <div style={{ fontSize: 26, fontWeight: "bold", paddingBottom: "26px", fontFamily: "Playfair Display", paddingTop: "8px" }}>Rsearch Themes</div>
                <Row gutter={[32, 32]} justify="center" typeof="flex">
                    <Col xs={24} md={12} xl={6}>
                        <Card style={{ height: "100%", borderRadius: "20px" }} hoverable
                            onClick={() => {
                                // TODO: Push to research theme page.
                            }}
                            cover={<img style={{ objectFit: "cover", height: "250px", borderRadius: "20px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }} alt="exlainble_predictive_process_analytics" src={`${process.env.PUBLIC_URL}/assets/predictive-process-analytics-img.jpeg`} />}
                        >
                            <Card.Meta title={<div style={{ fontWeight: 500, fontSize: screens.md ? "16px" : "11px", textAlign: "center", fontFamily: "Nunito" }}>{"Explainable Predictive Process Analytics"}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} md={12} xl={6}>
                        <Card style={{ height: "100%", borderRadius: "20px" }} hoverable
                            onClick={() => {
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img style={{ objectFit: "cover", height: "250px", borderRadius: "20px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }} alt="Probabilistic & Causal Models for Responsible AI IMG" src={`${process.env.PUBLIC_URL}/assets/responsible-ai-img.jpeg`} />}
                        >
                            <Card.Meta title={<div style={{ fontWeight: 500, fontSize: screens.md ? "16px" : "11px", textAlign: "center", fontFamily: "Nunito" }}>{"Probabilistic & Causal Models for Responsible AI"}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} md={12} xl={6}>
                        <Card style={{ height: "100%", borderRadius: "20px" }} hoverable
                            onClick={() => {
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img style={{ objectFit: "cover", height: "250px", borderRadius: "20px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }} alt="exlainble_predictive_process_analytics" src={`${process.env.PUBLIC_URL}/assets/persuasive-models-img.jpeg`} />}
                        >
                            <Card.Meta title={<div style={{ fontWeight: 500, fontSize: screens.md ? "16px" : "11px", textAlign: "center", fontFamily: "Nunito" }}>{"Persuasive Models for Explainable AI"}</div>} />
                        </Card>
                    </Col>
                    <Col xs={24} md={12} xl={6}>
                        <Card style={{ height: "100%", borderRadius: "20px" }} hoverable
                            onClick={() => {
                                // TODO: Push to research theme page. 
                            }}
                            cover={<img style={{ objectFit: "cover", height: "250px", borderRadius: "20px", paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }} alt="exlainble_predictive_process_analytics" src={`${process.env.PUBLIC_URL}/assets/medical-ai-img.jpeg`} />}
                        >
                            <Card.Meta title={<div style={{ fontWeight: 500, fontSize: screens.md ? "16px" : "11px", textAlign: "center", fontFamily: "Nunito" }}>{"Explainable Medical Diagnostic Systems"}</div>} />
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
