import React, { Component } from 'react';
import './MobileMenu.css';
import { Menu } from 'antd';

class MobileMenu extends Component {
    render() {
        return (
            <Menu
                style={{ width: 240, float:'right' }}
                mode="vertical" className={this.props.mobilemenuclass}>
                <Menu.Item>INVEST</Menu.Item>
                <Menu.Item>IFISA</Menu.Item>
                <Menu.Item>BORROW</Menu.Item>
                <Menu.Item>MCA</Menu.Item>
                <Menu.Item>LEARN MORE</Menu.Item>
                <Menu.Item>PARTNERS</Menu.Item>
                <Menu.Item>ABOUT US</Menu.Item>
                <Menu.Item>LOG IN</Menu.Item>
                <Menu.Item>SIGN UP</Menu.Item>
            </Menu>
        );
    }
}

export default MobileMenu;