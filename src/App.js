import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Header, Sider, Content, Footer } = Layout
const { SubMenu } = Menu


class App extends Component {

    state = {
        collapsed: false,
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Layout id="components-layout-demo-custom-trigger">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo">Logo</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="star-o" />
                            <span>ภาพรวม</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="solution" />
                            <span>รายการสั่งซื้อ</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="skin" />
                            <span>สินค้า</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="team" />
                            <span>ลูกค้า</span>
                        </Menu.Item>
                        <SubMenu key="5" title={<span><Icon type="setting" />ตั้งค่า</span>}>
                            <Menu.Item key="sub5-1">เกี่ยวกับร้านค้า</Menu.Item>
                            <Menu.Item key="sub5-2">การจัดส่ง</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 800 }}>
                        Content
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Order Management Application ©2018 Created by kickdown.in.th
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default App