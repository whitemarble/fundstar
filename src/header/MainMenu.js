import React, { Component } from 'react';
import { Menu,Button} from 'antd';
import './MainMenu.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MainMenu extends Component {
    state = {
        current: '',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
        current: e.key,
        });
    }
    render() {
        return (
            <div className={this.props.menuclass}>
                <div className="logo">
                    <img src={this.props.logo} />
                </div>
                <Menu onClick={this.handleClick} 
                    selectedKeys={[this.state.current]} 
                    mode="horizontal"
                    style={{ lineHeight: '89px',borderBottom:'none',float:'right' }}>
                    <Menu.Item key="invest">
                        Invest
                    </Menu.Item>
                    <Menu.Item key="ifisa">
                        IFISA
                    </Menu.Item>
                    <Menu.Item key="borrow">
                        Borrow
                    </Menu.Item>
                    <Menu.Item key="mca">
                        MCA
                    </Menu.Item>
                    <Menu.Item key="learn">
                        Learn More
                    </Menu.Item>
                    <Menu.Item key="partners">
                        Partners
                    </Menu.Item>
                    <Menu.Item key="about">
                        About Us
                    </Menu.Item>
                    <Menu.Item>
                        <Button type="primary" ghost>LOG IN</Button>
                    </Menu.Item>    
                    <Menu.Item>
                        <Button type="primary">SIGN UP</Button>
                    </Menu.Item>       
                </Menu>
                
                    
                    
            </div>
        );
    }
}

export default MainMenu;