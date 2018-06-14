import React, { Component } from 'react'
import { Layout, Menu, Icon, Table } from 'antd'
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

        const columns = [
            { title: 'เลขที่สั่งซื้อ', width: 100, dataIndex: 'key', key: 'เลขที่สั่งซื้อ', fixed: 'left' },
            { title: 'ชื่อลูกค้า', width: 250, dataIndex: 'name', key: 'name', fixed: 'left' },
            { title: 'ที่อยู่จัดส่ง', width: 500, dataIndex: 'address', key: 'ที่อยู่จัดส่ง' },
            { title: 'สถานะ', width: 200, dataIndex: 'status', key: 'สถานะ' },
            { title: 'ดำเนินการ', width: 100, dataIndex: '', key: 'x', 
                render: () => <div><a href="javascript:;">แก้ไข</a> <a href="javascript:;">ลบ</a></div>
            },
          ]

          
        const data = [
            { key: 1, name: 'คุณยิ่งใหญ่ จริงใจ', status: 'จัดส่งแล้ว', address: 'ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310', description: 'Product' },
            { key: 2, name: 'คุณชายกลาง หายป่วย', status: 'กำลังตรวจสอบชำระเงิน', address: 'ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310', description: 'Product' },
            { key: 3, name: 'คุณเหนื่อยนัก พักหน่อย', status: 'กำลังเตรียมสินค้าเพื่อจัดส่ง', address: 'ถนนพระราม 9 แขวงบางกะปิ เขตห้วยขวาง กรุงเทพมหานคร 10310', description: 'Product' },
        ]
          
        return (
            <Layout id="components-layout-custom-trigger">
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
                        <Table
                            columns={columns}
                            expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                            dataSource={data}
                            scroll={{ x: 1200 }}
                        />
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