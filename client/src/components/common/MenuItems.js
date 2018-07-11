import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;


export default class MenuItems extends Component {
    render() {
        return (
            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
        )
    }
}
