import { Card, Col, Divider, Row } from 'antd';
import React from 'react'
import { MemberOutputDto } from '../../models/member'
import '../../styles/Base.scss'

export interface MembersSectionProps {
    title: string,
    members: MemberOutputDto[];
}

export default function MembersSection(props: MembersSectionProps) {

    const { title, members } = props;


    return (
        <div>
            <div>
                <Divider>
                    <div style={{ fontFamily: "Montserrat", fontWeight: "bold", fontSize: "2.5em", }}>{title}</div>
                </Divider>
            </div>

            <Row justify="center" >
                <Col xxl={15} xl={20} lg={24} md={24} sm={24} xs={24}>
                    <Row gutter={[16, 16]} justify="center" typeof="flex" >
                        {
                            members.map(m => <Col key={m.id}
                            //  xs={12} sm={8} md={8} lg={6} xl={4} xxl={6}
                            >
                                <div key={m.id}>
                                    <Card style={{ height: "100%", borderRadius: "20px", width: "200px", boxShadow: "2px 2px #8888881f" }}
                                        cover={<img style={{ objectFit: "cover", height: "250px", borderRadius: "20px", padding: "10px" }} alt="persornal_image" src={m.profileImage} />}
                                    >
                                        <Card.Meta title={<div style={{ fontSize: "14px", fontFamily: "Raleway",whiteSpace: "pre-line", fontWeight: "bolder", textAlign: "center" }}>{m.name}</div>} description={<div style={{ fontSize: "12px", textAlign: "center", fontFamily: "sans-serif" }}>{m.occupationSub}</div>} />
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
