import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Input } from 'antd';
import CategorySelectionButtons from '../common/CategorySelectionButtons';

const Search = Input.Search;

const { SubMenu } = Menu;
const { Sider } = Layout;

export default class Sidebar extends Component {

    render() {
        const menuPositionNames = [
            {
                categoryName: "Developer",
                items: [
                    "Developer",
                    "Frontend Developer",
                    "Backend Developer",
                    "Fullstack Developer",
                    "Android Developer",
                    "iOS Developer",
                    ".NET Developer"
                ]
            },
            {
                categoryName: "Designer",
                items: [
                    "Designer",
                    "UI Designer",
                    "UX Designer",
                    "Graphic Designer",
                    "Mobile Designer"
                ]
            },
            {
                categoryName: "Sales",
                items: [
                    "Sales",
                    "Sales Manager",
                    "Sales Representative",
                    "Sales Engineer"
                ]
            },
            {
                categoryName: "Ugostiteljstvo",
                items: [
                    "Konobar",
                    "Kuhar",
                    "Pekar",
                    "Dostavljac",
                    "Recepcija"
                ]
            }
        ];



        const subMenus = menuPositionNames.map((category, index) => (
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

        // console.log(subMenus);

        return (

            <Sider width="100%" style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0, width: "100%" }}
                >
                    <Menu.Item key="1">
                        <Search
                            placeholder="Search..."
                            onSearch={this.props.categorySearchHandler}
                            enterButton
                        />
                    </Menu.Item>
                    <CategorySelectionButtons
                        selectedCategories={this.props.selectedCategories}
                        removeCategoryHandler={this.props.removeCategoryHandler}
                    />
                    {subMenus}
                </Menu>
            </Sider>

        )
    }
}
