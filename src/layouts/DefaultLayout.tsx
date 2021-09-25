import React, { useEffect, useState } from 'react'
import { Button, Drawer, Layout, Menu, Row } from "antd";
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';
import { faBars, faFlag, faHome, faLightbulb, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Header } from 'antd/lib/layout/layout';

const { Sider, Content } = Layout;

export default function DefaultLayout(props: any) {

    const screen = useBreakpoint()
    const [collapsed, setCollapsed] = useState(screen.md);
    const history = useHistory();

    const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

    useEffect(() => {
        setCollapsed(screen.md ? false : true)
    }, [screen.md])

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed)
    };

    return (
        <Layout style={{ fontSize: screen.md ? "18px" : "14px" }}>
            {screen.md ? <Sider
                theme="dark"
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
            >
                <div style={{ textAlign: "center", paddingBottom: "16px", paddingTop: "6px" }}>
                    <NavLink to="/">
                        {
                            // collapsed ? <img height={"50px"} width={"40px"} style={{ objectFit: "contain", paddingTop: "7px", marginBottom: "7px" }} src={process.env.PUBLIC_URL + '/assets/qut_square_logo.png'} /> :
                            //     <img height={"50px"} width={"200px"} style={{ objectFit: "contain", paddingTop: "7px", marginBottom: "7px" }} src={process.env.PUBLIC_URL + '/assets/qut_logo_t.png'} />
                            collapsed ? <img alt="logo_small" height={"60px"} width={"60px"} style={{ objectFit: "cover", marginTop: "4px", marginBottom: "2px" }} src={process.env.PUBLIC_URL + '/assets/XAMI-Lab-Collapsed.png'} /> :
                                <img alt="logo_full" height={"80px"} style={{ objectFit: "cover", marginTop: "10px", marginBottom: "2px" }} src={process.env.PUBLIC_URL + '/assets/XAMI-Lab-C4-mini.png'} />
                        }
                    </NavLink>
                </div>
                <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
                    <Menu.Item key='1' icon={<FontAwesomeIcon icon={faHome} />}>
                        <Link to='/' style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<FontAwesomeIcon icon={faFlag} />}>
                        <Link to='/mission' style={{ fontFamily: "Raleway", fontWeight: "bold" }} >Our Mission</Link>
                    </Menu.Item>
                    <Menu.Item key='3' icon={<FontAwesomeIcon icon={faUsers} />}>
                        <Link to='/members' style={{ fontFamily: "Raleway", fontWeight: "bold" }}>People</Link>
                    </Menu.Item>
                    <Menu.Item key='4' icon={<FontAwesomeIcon icon={faLightbulb} />}>
                        <Link to='/research-plan' style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Research Projects</Link>
                    </Menu.Item>
                    <Menu.Item key='5' icon={<FontAwesomeIcon icon={faScroll} />}>
                        <Link to='/publications' style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Publications</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
                : <Drawer placement="left" onClose={() => setDrawerVisible(false)} visible={drawerVisible} width="256px" bodyStyle={{ padding: 0, backgroundColor: "#001628", minHeight: "100vh" }} style={{ zIndex: 10000, }}>
                    <div style={{ textAlign: "center", paddingBottom: "16px", paddingTop: "26px", width: "256px" }}>
                        <NavLink to="/">
                            {
                                <img alt="logo_full" height={"80px"} style={{ objectFit: "cover", marginTop: "10px", marginBottom: "2px" }} src={process.env.PUBLIC_URL + '/assets/XAMI-Lab-C4-mini.png'} />
                            }
                        </NavLink>
                    </div>
                    <Menu theme='dark' mode="inline" defaultSelectedKeys={["1"]} style={{ width: "256px" }}>
                        <Menu.Item key='1' icon={<FontAwesomeIcon icon={faHome} />} onClick={() => {
                            history.push("/");
                            setDrawerVisible(false);
                        }}>
                            <div style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Home</div>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<FontAwesomeIcon icon={faFlag} />} onClick={() => {
                            history.push("/mission");
                            setDrawerVisible(false);
                        }}>
                            <div style={{ fontFamily: "Raleway", fontWeight: "bold" }} >Our Mission</div>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<FontAwesomeIcon icon={faUsers} />} onClick={() => {
                            history.push("/members");
                            setDrawerVisible(false);
                        }}>
                            <div style={{ fontFamily: "Raleway", fontWeight: "bold" }}>People</div>
                        </Menu.Item>
                        <Menu.Item key='4' icon={<FontAwesomeIcon icon={faLightbulb} onClick={() => {
                            history.push("/research-plan");
                            setDrawerVisible(false);
                        }} />}>
                            <div style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Research Projects</div>
                        </Menu.Item>
                        <Menu.Item key='5' icon={<FontAwesomeIcon icon={faScroll} />} onClick={() => {
                            history.push("/publications");
                            setDrawerVisible(false);
                        }}>
                            <div style={{ fontFamily: "Raleway", fontWeight: "bold" }}>Publications</div>
                        </Menu.Item>
                        {/* <Menu.Item key='7' icon={<FontAwesomeIcon icon={faBrain} />}>
                    <Link to='/playground'>Algorithms in Action</Link>
                </Menu.Item> */}
                    </Menu>
                </Drawer>

            }
            {
                screen.md || <Button onClick={() => setDrawerVisible(true)} icon={<FontAwesomeIcon icon={faBars} />} style={{ position: "fixed", top: "35px", zIndex: 9999, color: "#111d2c" }} ></Button>
            }
            {
                screen.md || <Header style={{ height: "100px" }}>
                    <Row justify="center">
                        <NavLink to="/">
                            {

                                <img alt="logo_full" height={"80px"} style={{ objectFit: "cover", marginTop: "10px", marginBottom: "2px" }} src={process.env.PUBLIC_URL + '/assets/XAMI-Lab-C4-mini.png'} />
                            }
                        </NavLink>
                    </Row>
                </Header>
            }
            <Layout style={{ minHeight: "100vh" }}>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
