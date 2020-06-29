import React from 'react';
import OrderForm from './OrderForm';
import NavBar from './NavBar';
import OrderList from './OrderList';
import ItemList from './ItemList';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      users: [], 
      manufacturers: [], 
      items: [],
      page: 'orderForm'
    }
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

    response = await fetch('http://localhost:3000/orderList');
    let orderList = await response.json()

    this.setState({
        users: users, 
        manufacturers: makers, 
        items: items,
        orderList: orderList
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

  getManuId = (id) => {
    var ids = []
    for (var j=0; j< id.length; j++ ) {
      for (var i = 0; i < this.state.manufacturers.length; i++) {
        if (this.state.manufacturers[i].company_name == id) {
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
  }

  submitCustomer = async (name, email, phone, company) => {
    let response = await fetch('http://localhost:3000/customers',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({customer_name: name, 
              customer_email : email,
              customer_phone : phone,
              company_name : company })
      });
    let data = await response.json()   
  }

  showOrderForm = (event) => {
    this.setState({
      page: "orderForm"
    })
  }

  showOrderList = async (event) => {
    let response = await fetch('http://localhost:3000/orderList');
    let orderList = await response.json()
    this.setState({
      page: "orderList",
      orderList: orderList
    })
  }

  showItemList = async (event) => {
    let response = await fetch('http://localhost:3000/items');
    let itemList = await response.json()
    this.setState({
      page: "itemList",
      itemList: itemList
    })
  }

  showCustomerList = async (event) => {
    let response = await fetch('http://localhost:3000/customers');
    let customerList = await response.json()
    this.setState({
      page: "customerList",
      customerList: customerList
    })
  }

  showAddCustomer = async (event) => {    
    this.setState({
      page: "addCustomerList",
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        Purchase Order System
        </header>
        <div>
          <NavBar parent={this}/>
          {this.state.page === "orderForm" ? 
          <OrderForm 
            users={this.state.users.map(user=>user.fname)} 
            makers={this.state.manufacturers.map(maker=>maker.company_name)} 
            items={this.state.items} 
            submit={this.submitOrder}            
            /> 
            : this.state.page === "itemList" ? 
                <ItemList itemList={this.state.itemList}  />
                : this.state.page === "orderList" ?
                  <OrderList orderList={this.state.orderList}/>
                  : this.state.page === "customerList" ?
                  <CustomerList customerList={this.state.customerList} />
                  :
                  <CustomerForm submit = {this.submitCustomer}/>
          }
        </div>
      </div>
    );
  }
}

export default App;
