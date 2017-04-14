import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PriceItem from './PriceItem';

class PriceBox extends Component {
    render() {
        return (
            <div>
                <Row type="flex" justify="center">
                    <Col xs={20} sm={10} md={8} lg={6} order={1}>
                        <PriceItem />
                    </Col>
                    <Col xs={0} sm={1} md={1} lg={1} order={2}></Col>
                    <Col xs={20} sm={10} md={8} lg={6} order={3}>
                        <PriceItem />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PriceBox;