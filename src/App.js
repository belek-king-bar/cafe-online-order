import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu/Menu.js';
import OrderDetail from './Components/OrderDetail/OrderDetail.js';
import Food from './Components/Menu/Foods/Foods.js';
import Order from './Components/OrderDetail/Order/Order.js';
import {Container, Row, Col} from 'reactstrap';

const availableFoods = [
    {name: 'hamburger', price: 80, label: 'Гамбургер'},
    {name: 'coffee', price: 70, label: 'Кофе'},
    {name: 'cheeseburger', price: 90, label: 'Чизбургер'},
    {name: 'tea', price: 50, label: 'Чай'},
    {name: 'fries', price: 45, label:'Фри'},
    {name: 'cola', price: 40, label:'Кола'}
];


class App extends Component {


  state = {
      foods: {
          hamburger: {count: 0, total: 0},
          coffee: {count: 0, total: 0},
          cheeseburger: {count: 0, total: 0},
          tea: {count: 0, total: 0},
          fries: {count: 0, total: 0},
          cola: {count: 0, total: 0}
      },
      text: true
  };


  getTotal = () => {
        let total = 0;
        let keys = Object.keys(this.state.foods);
        let counter = 0;


        while(counter < keys.length){
            total += this.state.foods[keys[counter]].total;
            counter++;
        }
        return total;


    };


  checkerFunction = (foods) => {
        let keys = Object.keys(foods);
        let counter = 0;
        let totalCount = 0;
        while (counter < keys.length) {
            totalCount += foods[keys[counter]].count;
            counter++;
        }
        return totalCount <= 0;
    };


  getCount = (name) => {
    return this.state.foods[name].count;
};

  getFoodTotal = (name) => {
    return this.state.foods[name].total;
};

  isAddButtonDisabled = (name) => {
       return this.state.foods[name].count === 0;
    };

foodChanger = (name, event) => {

        let food = {...this.state.foods[name]};
        let price = availableFoods.find(item => item.name === name).price;
        if (event.target.value === 'add') {
            food.count += 1;
        }else {
            food.count -= 1;
        }

        food.total = food.count * price;

        let foods = {...this.state.foods};
        foods[name] = food;

        let state = {...this.state};

        state.text = this.checkerFunction(foods);
        state.foods = foods;

        this.setState(state);

    };

  render() {
    return (
      <div className="App">
          <Container>
            <Row>
              <Col xs={5}>
                  <OrderDetail text={this.state.text} total={this.getTotal()}>

                    {availableFoods.map(item => {
                        return <Order
                            key={item.name}
                            label={item.label}
                            count={() => this.getCount(item.name)}
                            total={() => this.getFoodTotal(item.name)}
                            isDisabled={() => this.isAddButtonDisabled(item.name)}
                            changeFood={(event) => this.foodChanger(item.name, event)}/>
                    })}
                  </OrderDetail>
              </Col>
              <Col xs={7}>
                  <Menu>
                      {availableFoods.map(item => {
                          return <Food
                          label={item.label}
                          key={item.name}
                          price={item.price}
                          changeFood={(event) => this.foodChanger(item.name, event)}/>
                          })}
                  </Menu>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
