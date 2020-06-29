import React from 'react';

class SalesOrderForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { user: '', quantity: 0, customer: '', item: 0}
    }

    setUser = (event) => {
        this.setState({user: event.target.value})
    }

    setQuantity = (event) => {
        this.setState({quantity: [event.target.value]})
    }

    setCustomer = (event) => {
        this.setState({customer: event.target.value})
    }

    setItem = (event) => {
        this.setState({item: [event.target.value]})
    }

    sendOrder = (event) => {
        event.preventDefault()
        if (this.state.user == '') { alert("Please pick a user"); return; }
        if (this.state.customer == '') { alert("Please pick a customer"); return; }
        this.props.submit(this.state.user, this.state.quantity, this.state.customer, this.state.item)
        alert("Sales Order Sent!")
    }
    

    render() {
        return (
            <div class="col-md-12 text-center">
                <form>
                    <div>
                    <label for='userid'>User: </label>
                    <select id={'userid'} onChange={this.setUser}>
                        <option value={''} selected></option>
                        {
                            this.props.users.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
                    </div>


                    <div>
                    <label for='customer'>Customer: </label>
                    <select id={'customer'} onChange={this.setCustomer}>
                        <option value={''} selected></option>
                        {
                            this.props.customers.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
                    </div>

                    <div>
                    <label for='quantity'>Quantity: </label>
                    <input type={'number'} min='0' id={'quantity'}  onChange={this.setQuantity}/>
                    </div>

                    <div>
                    <label for='item'>Item: </label>
                    <select id={'items'} onChange={this.setItem}>
                        {
                            this.props.items.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
                    </div>

                    <div>
                        <input type={'submit'} id={'submit'} value={'Submit Order'} onClick={this.sendOrder}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default SalesOrderForm