import React from 'react';
import OrderForm from './OrderForm';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      users: [], 
      manufacturers: [], 
      items: [] }
  }

  async componentDidMount() {
    let response = await fetch('http://localhost:3000/users');
    let data = await response.json()

    let users = data.map(user => { return user.fname});

    response = await fetch('http://localhost:3000/manufacturers');
    data = await response.json()

    let makers = data.map(maker => { return maker.company_name});

    response = await fetch('http://localhost:3000/items');
    data = await response.json()

    let items = data.map(item => { return item.name});

    this.setState({
        users: users, 
        manufacturers: makers, 
        items: items,
      
        orderUser: '',
        orderQty: '',
        orderMaker: '',
        orderItem: ''
      });
  }

  updateOrderUser = (event) => {
    this.setState({orderUser: event.target.value})
  }

  updateOrderQty = (event) => {
    this.setState({orderQty: event.target.value})
  }

  updateMaker = (event) => {
    this.setState({orderMaker: event.target.value})
  }

  updateItem = (event) => {
    this.setState({orderItem: event.target.value})
  }

  submitOrder = async (event) => {
    event.preventDefault();
    console.log(this.state.orderQty, this.state.orderItem)
    let response = await fetch('http://localhost:3000/purchaseOrders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ user: '1', 
              quantity: [ '10' ],
              manufacturer : [ '1' ],
              item : [ 'Towel' ] })
      });
    let data = await response.json()
    alert (data)    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        Purchase Order System
        </header>
        <div>
          <OrderForm 
            users={this.state.users} 
            makers={this.state.manufacturers} 
            items={this.state.items} 
            submit={this.submitOrder}
            userChanged={this.updateOrderUser} 
            qtyChanged={this.updateOrderQty}
            makerChanged={this.updateMaker}
            updateItem={this.updateItem}  
            />
        </div>
      </div>
    );
  }
}

export default App;
