import React, { Component } from 'react';
import './HomeSlider.css';
import { Carousel, Button } from 'antd';
import s1 from '../../public/assets/img/s1.jpg';
import s2 from '../../public/assets/img/s2.jpg';
import s3 from '../../public/assets/img/s3.jpg';
import s4 from '../../public/assets/img/s4.jpg';

class HomeSlider extends Component {
    render() {
        return (
            <Carousel effect="fade" autoplay>
                <div style={{ height: '660px',backgroundPosition:'bottom',backgroundSize:'cover',
                    backgroundImage:"url(" + s1 + ")" }}>
                    <div className="slider-content">
                        <h1 className="slider-title">GROWTH MADE SIMPLE</h1>
                        <div className="slider-caption">
                            <h2>One of the UK’s only globally experienced P2P platforms. Consider Formax for maximising your growth.</h2>
                            <Button type="primary">VIEW INVESTMENT PRODUCTS</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '660px',backgroundPosition:'bottom',backgroundSize:'cover',
                    backgroundImage:"url(" + s2 + ")" }}>
                    <div className="slider-content">
                        <h1 className="slider-title">INNOVATIVE FINANCE ISA</h1>
                        <div className="slider-caption">
                            <h2>We will soon be launching our IFISA.Invest your tax free ISA via P2P lending and earn greater returns. Transfer your existing ISA or create a new account.</h2>
                            <Button type="primary">VIEW IFISA DETAILS</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '660px',backgroundPosition:'bottom',backgroundSize:'cover',
                    backgroundImage:"url(" + s3 + ")" }}>
                    <div className="slider-content">
                        <h1 className="slider-title">BUSINESS FINANCE</h1>
                        <div className="slider-caption">
                            <h2>Get an unsecured loan of between £5,000 to £100,000 for your business with terms of 6, 12, 24, 36, 48, or 60 months.</h2>
                            <Button type="primary">VIEW LOAN CALCULATOR</Button>
                        </div>
                    </div>
                </div>
                <div style={{ height: '660px',backgroundPosition:'bottom',backgroundSize:'cover',
                    backgroundImage:"url(" + s4 + ")" }}>
                    <div className="slider-content">
                        <h1 className="slider-title">MERCHANT CASH ADVANCE</h1>
                        <div className="slider-caption">
                            <h2>Get an advance on a percentage of the future card takings of your business with flexible repayments based on your daily revenue.</h2>
                            <Button type="primary">LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}

export default HomeSlider;