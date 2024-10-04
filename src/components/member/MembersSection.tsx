import { Card, Col, Divider, Row } from 'antd';
import React from 'react'
import { MemberOutputDto } from '../../models/member'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/Base.scss'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export interface MembersSectionProps {
    title: string,
    members: MemberOutputDto[];
}



export default function MembersSection(props: MembersSectionProps) {

    const { title, members } = props;

    // Action list of members's social icons
    const actionsList = (m: MemberOutputDto) => {
        var nodeList = [];
        m.homepage && nodeList.push(<a href={m.homepage} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faHome} /></a>);
        m.email && nodeList.push(<a href={"mailto:"+m.email} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>);
        // m.scholar && nodeList.push(<a href={m.scholar} target="_blank" rel="noreferrer"><i className="ai ai-google-scholar"></i></a>);
        m.linkedIn && nodeList.push(<a href={m.linkedIn} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>);
        // m.github && nodeList.push(<a href={m.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>);

        return nodeList;
    }
    

    return (
        <div>
            <div>
                <Divider>
                    <div style={{ fontFamily: "Montserrat", fontWeight: "bold", fontSize: "2.5em", }}>{title}</div>
                </Divider>
            </div>

            <Row justify="center" >
                <Col xxl={24} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={[16, 16]} justify="center" typeof="flex" >
                        {
                            members.map(m => <Col key={m.id}
                            //  xs={12} sm={8} md={8} lg={6} xl={4} xxl={6}
                            >
                                <div key={m.id}>
                                    <Card style={{ height: "100%",  width: "215px", boxShadow: "2px 2px #8888881f" }}
                                        cover={<img style={{ objectFit: "cover", height: "250px"}} 
                                                    alt="persornal_image" src={m.profileImage} />}
                                        actions={actionsList(m)}
                                    >
                                        <Card.Meta title={<div style={{ fontSize: "14px", fontFamily: "Raleway", whiteSpace: "nowrap", fontWeight: "bolder", textAlign: "center"}}>{m.name}</div>} 
                                                description={<div style={{ color: "#505050"}}>
                                                    <div style={{ fontSize: "11px", textAlign: "center", fontFamily: "sans-serif", fontWeight: "bold"}}>{m.occupationSub}</div>
                                                    <div style={{ fontSize: "11px", textAlign: "center", fontFamily: "sans-serif" }}>{m.school}</div>
                                                    <div style={{ fontSize: "11px", textAlign: "center", fontFamily: "sans-serif" , whiteSpace: "nowrap",}}>{m.university}</div>
                                                </div>} />
                                    </Card>
                                </div>
                            </Col>)
                        }
                    </Row>
                </Col>
            </Row >
        </div >
    )
}
