import React from 'react';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';

function Order(props) {
    return <ListGroup>
        <ListGroupItem className='bg-dark text-warning'>
            <span>{props.label} </span>
            <span> x{props.count()} = {props.total()} сом</span>
            <Button color='danger' disabled={props.isDisabled()} className="float-right" onClick={(event) => props.changeFood(event)}>X</Button>
        </ListGroupItem>
    </ListGroup>
}


export default Order;