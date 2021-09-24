import React, { useEffect, useState } from 'react'
import { Layout, Menu } from "antd";
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faHome, faLightbulb, faScroll, faUsers } from '@fortawesome/free-solid-svg-icons';

const { Sider, Content } = Layout;

export default function DefaultLayout(props: any) {

    const screen = useBreakpoint()
    const [collapsed, setCollapsed] = useState(screen.md);

    useEffect(() => {
        setCollapsed(screen.md ? false : true)
    }, [screen.md])

    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed)
    };

    return (
        <Layout style={{ fontSize: screen.md ? "18px" : "14px" }}>
            <Sider
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
                    {/* <Menu.Item key='7' icon={<FontAwesomeIcon icon={faBrain} />}>
                    <Link to='/playground'>Algorithms in Action</Link>
                </Menu.Item> */}
                </Menu>
            </Sider>

            <Layout style={{ minHeight: "100vh" }}>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}
