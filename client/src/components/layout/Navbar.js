import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'


export default class Navbar extends Component {
    render() {
        const activeItem = 'jobs';
        return (
            <Menu size='large' pointing secondary>
                <Menu.Item name='home' active={activeItem === 'home'} />
                <Menu.Item
                    name='jobs'
                    active={activeItem === 'jobs'}
                />
                <Menu.Item
                    name='services'
                    active={activeItem === 'services'}
                />

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}
