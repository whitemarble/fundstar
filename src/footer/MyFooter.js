import React, { Component } from 'react';
import './MyFooter.css';
import { Row, Col,Button } from 'antd';
import FA from 'react-fontawesome';
import mylogo from '../../public/assets/img/logo-formax-subpage.svg';

class MyFooter extends Component {
    render() {
        return (
            <div className='myfooter'>
                <Row className='footerRow1'>
                    <Col xs={24} sm={8} md={8} xl={12} lg={12} className='footerLOGO'>
                        <img src={mylogo} alt="logo" />
                    </Col>
                    <Col xs={24} sm={8} md={8} xl={6} lg={6} className='footerMenu'>
                        <h3>MENU</h3>
                        <ul>
                            <li><a href="">Invest</a></li>
                            <li><a href="">Borrow</a></li>
                            <li><a href="">Learn More</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </Col>
                    <Col xs={24} sm={8} md={8} xl={6} lg={6} className='footerMenu'>
                        <h3>LEGAL & SUPPORT</h3>
                        <ul>
                            <li><a href="">Terms and Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Partners</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className='footerRow2'>
                    <Col xs={24} sm={12} md={5} xl={4} lg={4}>
                        <h3>GET IN TOUCH</h3>
                    </Col>
                    <Col xs={24} sm={12} md={5} xl={4} lg={4} className='footerContact'>
                        <a href="">info@formaxcredit.co.uk</a>
                    </Col>
                    <Col xs={24} sm={12} md={8} xl={8} lg={8} className='footerContact'>
                        <p>107 Cheapside, London, EC2V 6DN, UK</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} xl={8} lg={8} className='footerSocial'>
                        <Button shape="circle"><FA name='twitter'/></Button>
                        <Button shape="circle"><FA name='linkedin'/></Button>
                        <Button shape="circle"><FA name='facebook'/></Button>
                    </Col>
                </Row>

                <Row className='footerRow3'>
                    <Col span={24}>
                    <p>By visiting this site, you agree to be bound by its <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>.</p>
                    <p>Formax Credit UK, company registration number 09044698 is incorporated in England and Wales and is authorised and regulated by the 
                        Financial Conduct Authority (Ref. 628890). Our registered offices are at Suite 627, 107 Cheapside, London, EC2V 6DN. Loans are subject 
                        to availability, the rate and fee applicable will depend on individual credit assessments. Your actual return may be higher or lower 
                        as your capital is at risk and not protected under the Financial Services Compensations Scheme (FSCS). Applicants must be over 21 to 
                        apply for a loan. Please read Formax Credit’s Terms of Use for more detailed terms and conditions to which users of Formax Credit are subject.</p>
                    </Col>
                </Row>

                <Row className='footerRow4'>
                    <Col xs={24} sm={12} md={12} xl={12} lg={12} className="copyright">
                        <p>Copyright © Formax Credit UK Ltd. 2017. All rights reserved.</p>
                    </Col>
                    <Col xs={24} sm={12} md={12} xl={12} lg={12} className="poweredby">
                        <p>Powered by<a href="http://nebulahub.com"> Nebulahub</a></p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MyFooter;