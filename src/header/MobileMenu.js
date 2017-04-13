import React, { Component } from 'react';
import './MobileMenu.css';
import { Menu } from 'antd';

class MobileMenu extends Component {
    render() {
        return (
            <Menu
                style={{ width: 240, float:'right' }}
                mode="vertical" className={this.props.mobilemenuclass}>
                <Menu.Item>Invest</Menu.Item>
                <Menu.Item>IFISA</Menu.Item>
                <Menu.Item>Borrow</Menu.Item>
                <Menu.Item>MCA</Menu.Item>
                <Menu.Item>Learn More</Menu.Item>
                <Menu.Item>Partners</Menu.Item>
                <Menu.Item>About Us</Menu.Item>
                <Menu.Item>LOG IN</Menu.Item>
                <Menu.Item>SIGN UP</Menu.Item>
            </Menu>
        );
    }
}

export default MobileMenu;