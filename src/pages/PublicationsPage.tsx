import React, { useState } from 'react'
import { allPublications, PublicationDestination, PublicationOutputDto } from '../models/publication';
import { Button, Input, List, Modal, Row, Space, Select } from 'antd';
import PublicationQueryParams from '../queryParams/PublicationQueryParams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { RepoIcon, FileIcon, VideoIcon, RocketIcon, NoteIcon  } from '@primer/octicons-react'
import '../styles/Base.scss';


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

        // Action list of members's social icons
    const actionsList = (p: PublicationOutputDto) => {
        var nodeList = [];
        p.doi && nodeList.push( <Button className="publication-button" href={p.doi} target="_blank" rel="noreferrer"><FileIcon size={16} />&nbsp;&nbsp;Paper</Button>);
        p.arXiv && nodeList.push(<Button className="publication-button" href={p.arXiv} target="_blank" rel="noreferrer"><FileIcon size={16} />&nbsp;&nbsp;Paper</Button>);
        p.code && nodeList.push(<Button  className="publication-button" href={p.code} target="_blank" rel="noreferrer"><RepoIcon size={16} /> &nbsp;&nbsp;Code</Button>);
        p.demo && nodeList.push(<Button  className="publication-button" href={p.demo} target="_blank" rel="noreferrer"><RocketIcon   size={16} /> &nbsp;&nbsp;Demo</Button>);
        p.video && nodeList.push(<Button  className="publication-button" href={p.video} target="_blank" rel="noreferrer"><VideoIcon  size={16} /> &nbsp;&nbsp;Video</Button>);
        p.slide && nodeList.push(<Button  className="publication-button" href={p.slide} target="_blank" rel="noreferrer"><NoteIcon  size={16} /> &nbsp;&nbsp;Slide</Button>);
        return nodeList;
    }

    const getFilteredPublications = () => {
        let showingPublications = publications;

        if (queryParams.destination) {
            showingPublications = showingPublications.filter(p => p.destination === queryParams.destination);
        }

        if (queryParams.content && queryParams.content.trim() !== "") {
            showingPublications = showingPublications.filter(p => p.title.toLowerCase().includes(queryParams.content!.trim().toLowerCase()));
        }

        return showingPublications.sort((a: PublicationOutputDto, b: PublicationOutputDto) => b.publishedAt.getTime() - a.publishedAt.getTime());
    }

    return (
        <div className={`home-content`} style={{ marginLeft: screens.md ? "15%": "0%", maxWidth: screens.md ? "70%": "100%"}}>
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


            <div className="home-title title">
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
                    {
                        screens.md || <Button icon={<FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faTimes} />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: undefined })))} ></Button>
                    }
                </Space>
                <Space>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#e3812b" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Arxiv })))} >Arxiv</Button>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#a31f37" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Journals })))} >Journal</Button>
                    <Button icon={<FontAwesomeIcon style={{ marginTop: "6px", marginRight: "12px" }} size="sm" icon={faSquare} color="#32628c" />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: PublicationDestination.Conferences })))} >Conference</Button>
                    {
                        screens.md ?? <Button icon={<FontAwesomeIcon style={{ marginTop: "6px" }} size="sm" icon={faTimes} />} type="default" onClick={() => setQueryParams((prev) => (new PublicationQueryParams({ ...prev, destination: undefined })))} ></Button>
                    }
                </Space>
            </Row>

            <List style={{ marginTop: "30px" }} itemLayout="vertical">
                {
                    getFilteredPublications().map(p =>
                        <List.Item key={p.id} >
                            <List.Item.Meta
                                avatar={getColorCodeElement(p.destination)}
                                style={{ textAlign: "start", fontFamily: "Raleway", marginBottom: "-10px" }}
                                title={
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]} skipHtml={false}>
                                        {p.title}
                                    </ReactMarkdown>
                                }
                                description={actionsList(p)}
                            />
                        </List.Item>
                    )
                }
            </List>
        </div >
    )
}
