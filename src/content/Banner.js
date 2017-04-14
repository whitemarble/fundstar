import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './Banner.css'

class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <Row className='bannerContent'>
                    <Col span={24}>
                        <h1>Formax is designed to ensure both businesses and investors get the best possible deal, no matter how big or small.</h1>
                        <h2>Formax Credit links eligible borrowers with appropriate lenders creating a mutually beneficial agreement 
                            between all parties, with low interest rates for our borrowers and higher than average returns for our investors.</h2>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banner;