import React, { useState } from 'react'
import { allPublications, PublicationDestination, PublicationOutputDto } from '../models/publication';
import { Button, Col, Input, List, Modal, Row, Space, Select, Card } from 'antd';
import PublicationQueryParams from '../queryParams/PublicationQueryParams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCross, faFilter, faSearch, faSort, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';


const getColorCodeElement = (destination: PublicationDestination) => {
    switch (destination) {
        case PublicationDestination.Journals: {
            return <FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faSquare} color="#a31f37" />
        }
        case PublicationDestination.Conferences: {
            return <FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faSquare} color="#32628c" />
        }
        case PublicationDestination.Arxiv: {
            return <FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faSquare} color="#e3812b" />
        }
        default: {
            return <div></div>
        }
    }
}



export default function PublicationsPage() {

    const publications = allPublications;
    const [queryParams, setQueryParams] = useState<PublicationQueryParams>(new PublicationQueryParams());
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const screens = useBreakpoint();

    const getFilteredPublications = () => {
        let showingPublications = publications;

        if (queryParams.destination) {
            showingPublications = showingPublications.filter(p => p.destination == queryParams.destination);
        }

        if (queryParams.content && queryParams.content.trim() !== "") {
            showingPublications = showingPublications.filter(p => p.title.toLowerCase().includes(queryParams.content!.trim().toLowerCase()));
        }

        return showingPublications.sort((a: PublicationOutputDto, b: PublicationOutputDto) => b.publishedAt.getTime() - a.publishedAt.getTime());
    }

    return (
        <div style={{ padding: "40px", maxWidth: "1360px" }} >


            <Modal visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)} footer={null}>
                <Space direction="horizontal" size="middle">
                    <div >
                        Publish to:
                    </div>
                    <Select style={{ width: "150px" }} dropdownMatchSelectWidth allowClear={true} value={queryParams.destination} onChange={(v) => {
                        setQueryParams((prev) => {
                            return new PublicationQueryParams({ ...prev, destination: v })
                        })
                    }} >
                        {
                            Object.keys(PublicationDestination).map(k => <Select.Option key={k} value={k}>{k}</Select.Option>)
                        }
                    </Select>
                </Space>
            </Modal>


            <div style={{ fontFamily: "Playfair Display", fontSize: screens.md ? "72px" : "46px", fontWeight: "bold", paddingBottom: "46px" }}>
                Publications
            </div>
            <Row justify="space-between" gutter={[24, 24]}>
                <Space direction="horizontal">
                    <Input style={{ maxWidth: "800px", }} placeholder="Search..." onChange={(e) => {
                        setQueryParams(
                            {
                                ...queryParams,
                                content: e.target.value,
                            }
                        )
                    }}></Input>
                    <Button icon={<FontAwesomeIcon icon={faFilter} />} type="default" onClick={() => setIsModalVisible(true)}></Button>
                </Space>
                <Space>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#e3812b" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Arxiv })))} >Arxiv</Button>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#a31f37" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Journals })))} >Journal</Button>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#32628c" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Conferences })))} >Conference</Button>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faTimes} />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: undefined })))} ></Button>
                </Space>
            </Row>

            <List style={{ marginTop: "30px" }}>
                {
                    getFilteredPublications().map(p =>
                        <List.Item key={p.id}>
                            <List.Item.Meta
                                avatar={getColorCodeElement(p.destination)}
                                style={{ textAlign: "start", fontFamily: "Raleway" }}
                                title={
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} skipHtml={false}>
                                        {p.title}
                                    </ReactMarkdown>
                                }
                            />
                        </List.Item>
                    )
                }
            </List>
        </div >
    )
}
