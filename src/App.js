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

    // download all users and cache
    let response = await fetch('http://localhost:3000/users');
    let users = await response.json()

    // download all makers and cache
    response = await fetch('http://localhost:3000/manufacturers');
    let makers = await response.json()

    // download all items and cache
    response = await fetch('http://localhost:3000/items');
    let data = await response.json()

    let items = data.map(item => { return item.name});

    this.setState({
        users: users, 
        manufacturers: makers, 
        items: items,
      });
  }

  getUserId = (user) => {
    for (var i = 0; i < this.state.users.length; i++) {
      if (this.state.users[i].fname == user) {
        return this.state.users[i].user_id;
      }
    }

    return null;
  }

  getManuId = (name) => {
    var ids = []
    for (var j=0; j< name.length; j++ ) {
      for (var i = 0; i < this.state.manufacturers.length; i++) {
        if (this.state.manufacturers[i].company_name == name) {
          ids.push(this.state.manufacturers[i].manufacturer_id);
          break;
        }
      } 
    }

    return ids;
  }

  submitOrder = async (user, quantity, manu, item) => {
    let response = await fetch('http://localhost:3000/purchaseOrders',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ user: this.getUserId(user), 
              quantity: quantity,
              manufacturer : this.getManuId(manu),
              item : item })
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
            users={this.state.users.map(user=>user.fname)} 
            makers={this.state.manufacturers.map(maker=>maker.company_name)} 
            items={this.state.items} 
            submit={this.submitOrder}            
            />
        </div>
      </div>
    );
  }
}

export default App;
