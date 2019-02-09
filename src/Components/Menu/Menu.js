import React from 'react';
import {Row, Col} from 'reactstrap';

function Menu(props) {
    return <Col className="border border-dark m-2">
        <h4 className="mt-3 mb-3">Меню</h4>
        <Row>
            {props.children}
        </Row>
    </Col>
}

export default Menu;