import React, { Component } from 'react';
import { Menu } from 'antd';
import FA from 'react-fontawesome'

class MainMenu extends Component {
    render() {
        return (
            <div>
                <FA
                    className='super-crazy-colors'
                    name='rocket'
                    size='2x'
                    spin
                    style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                />
            </div>
        );
    }
}

export default MainMenu;