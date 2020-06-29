import React from 'react';
import { JsonToTable } from "react-json-to-table";

class OrderForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { user: '', quantity: 0, manu: '', item: 0, pendingItems: []}
    }

    setUser = (event) => {
        this.setState({user: event.target.value})
    }

    setQuantity = (event) => {
        this.setState({quantity: event.target.value})
    }

    setManu = (event) => {
        this.setState({manu: event.target.value})
    }

    setItem = (event) => {
        this.setState({item: event.target.value})
    }

    sendOrder = (event) => {
        event.preventDefault()
        if (this.state.pendingItems.length == 0) { alert("Please add items before submitting an order"); return }
        let quantities = [];
        let manus = [];
        let items = [];
        for (let item of this.state.pendingItems) {        
            quantities.push(item.quantity)
            manus.push(item.manufacturer)
            items.push(item.item)
        }
        this.props.submit(this.state.user, quantities, manus, items)
        alert("Order Sent!")
    }
    
    addItem = (event) => {
        if (this.state.user == '') { alert("Please pick a user"); return; }
        if (this.state.manu == '') { alert("Please pick a manufacturer"); return; }
        this.setState({
            pendingItems : this.state.pendingItems.concat({quantity : this.state.quantity, manufacturer : this.state.manu, item : this.state.item})
        })


    }

    render() {
        return (
            <div class="col-md-12 text-center">
                <div class="pendingItems">
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
                        <label for='quantity'>Quantity: </label>
                        <input type={'number'} id={'quantity'} min='0' onChange={this.setQuantity}/>
                        </div>

                        <div>
                        <label for='manu'>Manufacturer: </label>
                        <select id={'makers'} onChange={this.setManu}>
                            <option value={''} selected></option>
                            {
                                this.props.makers.map(item => <option value={item}>{item}</option>)
                            }
                        </select>
                        </div>

                        <div>
                        <label for='item'>Item: </label>
                        <select id={'items'} onChange={this.setItem}>
                            {
                                this.props.items.map(item => <option value={item}>{item}</option>)
                            }
                        </select>
                        </div>     
                        <input type="button" value="Add Item" onClick={this.addItem} />                   
                    </form>
                </div>
                <div class='pendingItems' >                    
                    <JsonToTable json={this.state.pendingItems} />
                    <div>
                        <input type={'submit'} id={'submit'} value={'Submit Order'} onClick={this.sendOrder}/>
                    </div>
                </div>                    
            </div>
        )
    }
}


export default OrderForm