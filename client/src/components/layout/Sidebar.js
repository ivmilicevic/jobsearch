import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import categories from '../../config/categories';


const { SubMenu } = Menu;
const { Sider } = Layout;

export default class Sidebar extends Component {

    render() {

        const subMenus = categories.map((category, index) => (
            <SubMenu
                key={category.categoryName}
                title={<span><Icon type="laptop" />{category.categoryName}</span>}
            >
                {category.items.map(position => (
                    <Menu.Item
                        key={position}
                        onClick={this.props.categoryClickHandler}
                    >
                        {position}
                    </Menu.Item>))}
            </SubMenu>
        ));

        return (

            <Sider width="100%" style={{ background: '#fff', marginTop: "14px" }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0, width: "100%" }}
                >
                    {subMenus}
                </Menu>
            </Sider>

        )
    }
}
