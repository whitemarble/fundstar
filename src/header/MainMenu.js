import React, { Component } from 'react';
import { Menu,Button} from 'antd';
import './MainMenu.css';
import MobileMenu from './MobileMenu';
import FA from 'react-fontawesome';


class MainMenu extends Component {
    state = {
        current: '',
        mobilemenuclass: 'mobilemenu'
    }
    mmswitch = () =>{
        if(this.state.mobilemenuclass === 'mobilemenu')
            this.setState({
                mobilemenuclass: 'mobilemenu display-block',
            });
        else
            this.setState({
                mobilemenuclass: 'mobilemenu',
            });
    }
    handleClick = (e) => {
        console.log('click ', e);
        if(e.key !== 'b1' && e.key !== 'b2' && e.key !== 'b3')
        {
            this.setState({
                current: e.key,
            });
        }
        
    console.log(e.key);
    }
    render() {
        return (
            <div className={this.props.menuclass}>
                <div className="logo">
                    <img src={this.props.logo} alt='logo'/>
                </div>
                <Menu onClick={this.handleClick} 
                    selectedKeys={[this.state.current]} 
                    mode="horizontal" className='desktopmenu'
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
                    <Menu.Item key="b1">
                        <Button type="primary" ghost>LOG IN</Button>
                    </Menu.Item>    
                    <Menu.Item key="b2">
                        <Button type="primary">SIGN UP</Button>
                    </Menu.Item> 
                    <Menu.Item key="b3" className="menubutton">
                        <Button type="primary" ghost onClick={this.mmswitch}><FA name="bars" /></Button>
                    </Menu.Item>          
                </Menu>
                <div style={{ height: '90px',width:'0px' }}></div>
                <MobileMenu mobilemenuclass={this.state.mobilemenuclass}/>
                    
                    
            </div>
        );
    }
}

export default MainMenu;