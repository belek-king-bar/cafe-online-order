import React from 'react';
import {Card, CardTitle, CardText, Button, Col} from 'reactstrap';

function Food(props) {

    return (
        <Col xs={6}>
            <Card body inverse className="mb-3 bg-dark">
                <CardTitle>{props.label}</CardTitle>
                <CardText>{props.price} сом </CardText>
                <Button color="warning" value='add'  onClick={(event) => props.changeFood(event)}>Добавить</Button>
            </Card>
        </Col>
    )

}

export default Food;