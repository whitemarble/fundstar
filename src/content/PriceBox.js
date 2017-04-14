import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import './PriceBox.css';
import { Card } from 'antd';
import img1 from '../../public/assets/img/business-loan.svg';
import img2 from '../../public/assets/img/investment.svg';

class PriceBox extends Component {
    render() {
        return (
            <div className="pricebox">
                <Row type="flex" justify="center">
                    <Col xs={20} sm={10} md={8} lg={7} order={1}>
                        <Card className='priceitem'>
                            <img src={img1} alt='img'/>
                            <h1>Business Loan</h1>
                            <h2>Get loans from</h2>
                            <h3>5.7% <sup>*</sup></h3>
                            <Button type="primary">GET A QUOTE</Button>
                            <ul>
                                <li>Unsecured loans from £5,000 to £100,000</li>
                                <li>Choose a repayment term from 6 to 60 months</li>
                                <li>No early repayment fees</li>
                            </ul>
                            <p>*Your actual fixed interest rate will depend on your credit profile and the term of your loan.<br/>&nbsp;</p>
                            <p>This is a fixed rate per annum and is based on our lowest risk band for a 12-month-loan, 
                                assuming the completion fee is paid upfront.</p>
                        </Card>
                    </Col>
                    <Col xs={0} sm={1} md={1} lg={1} order={2}></Col>
                    <Col xs={20} sm={10} md={8} lg={7} order={3}>
                        <Card className='priceitem'>
                            <img src={img2} alt='img'/>
                            <h1>Invest</h1>
                            <h2>Get annual returns up to</h2>
                            <h3>9.4% <sup>**</sup></h3>
                            <Button type="primary">START YOUR INVESTMENT</Button>
                            <ul>
                                <li>Invest as little as £100</li>
                                <li>Choose a commitment of between 12, 36, 60 months</li>
                                <li>Earn significant returns whilst helping British Businesses grow</li>
                            </ul>
                            <p>**Based on our highest risk product for a 60-month-investment before bad debt.<br/>&nbsp;</p>
                            <p>Your actual annual return may be lower as your capital is at risk.
                                Your investment is not protected by the FSCS.</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PriceBox;