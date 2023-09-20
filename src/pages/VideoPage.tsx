import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import React from 'react'
import { BackTop, Card, Row, Col, Avatar, Collapse, Tooltip } from 'antd'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
// import { LoremIpsum } from 'react-lorem-ipsum';
import '../styles/Base.scss';
// import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function VideoPahe() {
    const screens = useBreakpoint();
    const { Meta } = Card;
    const { Panel } = Collapse;

    const onChange = (key: string | string[]) => {
        console.log(key);}

    // const avatarChun = "https://res.cloudinary.com/dcd56w8gc/image/upload/v1620301124/rhju6s6uoldcnxmw7c0o.jpg"
    // const avatarBemali = "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535852/efc2p3t0h1soojoksmdi.png"
    // const avatarCat = "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535125/vtyukjmxpoy2afzfpzfj.png"
    // const avatarJorge = "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535448/jvdkcyvgrqu5foyvxpd2.jpg"
    // const avatarRoy = "https://res.cloudinary.com/zhipenghe/image/upload/v1633505346/avatar_dr4ypx.jpg"
    // const avatarMythreyi = "https://res.cloudinary.com/dcd56w8gc/image/upload/v1619535615/v2pxj7ommlm6a4uccuhp.jpg"

    const avatarChun = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/ChunOuyang.jpg"
    const avatarBemali = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Bemali.png"
    const avatarCat = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Catarina.png"
    const avatarJorge = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Joaquim.jpg"
    const avatarRoy = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Roy.jpg"
    const avatarMythreyi = "https://cdn.jsdelivr.net/gh/ZhipengHe/ImgRepo@master/img/Mythreyi.jpg"

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
            <BackTop />
            <div className="home-title title">
                XAMI-Tube
            </div>
            <Collapse ghost defaultActiveKey={['1', '2', '3']} onChange={onChange}>

            <Panel header="Getting Started" key="1" className={'section'}>
                {/* Card in grid */}
                <div className="site-card-wrapper">
                    <Row gutter={[32, 32]} justify="start" typeof="flex">
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="xUs_H9m3DrI"
                                title='ACEMS Talk on Explainable Analytics for "Black-Box" Machine Intelligence'
                                poster="maxresdefault"
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Dr. Chun Ouyang" placement="top">
                                    <Avatar src={avatarChun} />
                                    </Tooltip>
                                    <Tooltip title="Dr. Catarina Moreira" placement="top">
                                    <Avatar src={avatarCat} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="ACEMS Seminar Series"
                            description='Explainable Analytics for "Black-Box" Machine Intelligence'
                            />
                        </Card>
                    </Col>

                    </Row>
                </div>
            </Panel>

            <Panel header="XAMI@Conferences" key="2" className={'section'}>
                {/* Card in grid */}
                <div className="site-card-wrapper">
                    <Row gutter={[32, 32]} justify="start" typeof="flex">

                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="RYrrUyEvgOY"
                                title='Presentation for CAiSE2022 on “Generating Purpose-Driven Explanations”'
                                poster="maxresdefault"
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Dr. Chun Ouyang" placement="top">
                                    <Avatar src={avatarChun} />
                                    </Tooltip>
                                    <Tooltip title="Bemali Wickramanayake" placement="top">
                                    <Avatar src={avatarBemali} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="CAiSE'22"
                            description="Generating Purpose-Driven Explanations: The Case of Process Predictive Model Inspection"
                            />
                        </Card>
                    </Col>


                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="m1K5-lTEt6o"
                                title="ADSN Data Ethics Workshop #2"
                                poster="maxresdefault"
                                params='start=613'
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Dr. Catarina Moreira" placement="top">
                                    <Avatar src={avatarCat} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="ADSN Data Ethics Workshop"
                            description="Towards Human-Centric XAI using Eye Tracking in Chest Xrays"
                            />
                        </Card>
                    </Col>

                    
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="UmTMEDNCRfM"
                                title="CAiSE'21 Doctoral Consortium 2: Mining, Prediction and Recommendation"
                                poster="maxresdefault"
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Jing (Roy) Yang" placement="top">
                                    <Avatar src={avatarRoy} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="CAiSE'21 Doctoral Consortium"
                            description="Discovering Organizational Knowledge via Process Mining"
                            />
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="UmTMEDNCRfM"
                                title="CAiSE'21 Doctoral Consortium 2: Mining, Prediction and Recommendation"
                                poster="maxresdefault"
                                params='start=1330'
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Mythreyi Velmurugan" placement="top">
                                    <Avatar src={avatarMythreyi} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="CAiSE'21 Doctoral Consortium"
                            description="Design and Evaluation of Explainable Methods for Predictive Process Analytics"
                            />
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="D1yuUVD2DAY"
                                title="CAiSE '21 - Forum 1 Room 2"
                                poster="maxresdefault"
                                params=''
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Mythreyi Velmurugan" placement="top">
                                    <Avatar src={avatarMythreyi} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="CAiSE'21 Forum"
                            description="Evaluating Fidelity of Explainable Methods for Predictive Process Analytics"
                            />
                        </Card>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="3qQFkVm_x4c"
                                title="i - Waves 2020 webinar-3"
                                poster="maxresdefault"
                                params='start=538'
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                    <Tooltip title="Dr. Catarina Moreira" placement="top">
                                    <Avatar src={avatarCat} />
                                    </Tooltip>
                                </Avatar.Group>
                            }
                            title="i-Waves 2020"
                            description="Towards Explainability in Machine Learning Approaches"
                            />
                        </Card>
                    </Col>


                    </Row>
                </div>
            </Panel>
            

            <Panel header="Skills Training" key="3" className={'section'}>
                {/* Card in grid */}
                <div className="site-card-wrapper">
                    <Row gutter={[32, 32]} justify="start" typeof="flex">
                    {/* video */}
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="q9OhZdeBNDk"
                                title='IS Capability Session 1 - Prof Joaquim Jorge How to Craft and Deliver Winning Presentations'
                                poster="maxresdefault"
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                <Tooltip title="Prof. Joaquim Jorge" placement="top">
                                <Avatar src={avatarJorge} />
                                </Tooltip>
                                </Avatar.Group>
                            }
                            title={<div>IS Capability Session</div>}
                            description={
                                            <div>How to Craft and Deliver Winning Presentations?</div>
                                        }
                            />
                        </Card>
                    </Col>

                    {/* Video */}
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}  xxl={12}>
                        <Card
                            hoverable
                            cover={<LiteYouTubeEmbed 
                                id="b_zrI4FevlA"
                                title='Eng. Tomás Alves: Investigating Trust in Visualization Through the Lens of Personality in Psychology'
                                poster="maxresdefault"
                                noCookie={true}
                            />}
                        >
                            <Meta
                            avatar={
                                <Avatar.Group maxCount={2}>
                                <Tooltip title="Eng. Tomás Alves" placement="top">
                                <Avatar style={{ backgroundColor: '#1890ff' }}>TA</Avatar>
                                </Tooltip>
                                </Avatar.Group>
                            }
                            title={<div style={{whiteSpace: "pre-line"}}>IS Research Seminar Series</div>}
                            description="Investigating Trust in Visualization Through the Lens of Personality in Psychology "
                            />
                        </Card>
                    </Col>
                    </Row>
                </div>
            </Panel>
            </Collapse>

        </div >
    )
}
