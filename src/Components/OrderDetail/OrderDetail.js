import React from 'react';
import {Col, Button} from 'reactstrap';

function OrderDetail(props) {
    return <Col className="border border-dark m-2 ">
                <h4 className="mt-3 mb-3">Ваш Заказ</h4>
                {props.children}
                <Button color='info' className='mb-3 mt-3'>Итого: {props.total} сом</Button>
            </Col>
}

export default OrderDetail;