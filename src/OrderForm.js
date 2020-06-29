import React from 'react';

class OrderForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { user: '', quantity: 0, manu: '', item: 0}
    }

    setUser = (event) => {
        this.setState({user: event.target.value})
    }

    setQuantity = (event) => {
        this.setState({quantity: [event.target.value]})
    }

    setManu = (event) => {
        this.setState({manu: [event.target.value]})
    }

    setItem = (event) => {
        this.setState({item: [event.target.value]})
    }

    sendOrder = (event) => {
        event.preventDefault()
        if (this.state.user == '') { alert("Please pick a user"); return; }
        if (this.state.manu == '') { alert("Please pick a manufacturer"); return; }
        this.props.submit(this.state.user, this.state.quantity, this.state.manu, this.state.item)
    }
    

    render() {
        return (
            <div>
                <form>
                    <div>
                    <label for='userid'>User ID:</label>
                    <select id={'userid'} onChange={this.setUser}>
                        <option value={''} selected></option>
                        {
                            this.props.users.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
                    </div>

                    <div>
                    <label for='quantity'>Quantity:</label>
                    <input type={'text'} id={'quantity'}  onChange={this.setQuantity}/>
                    </div>

                    <div>
                    <label for='manu'>Manufacturer:</label>
                    <select id={'makers'} onChange={this.setManu}>
                        <option value={''} selected></option>
                        {
                            this.props.makers.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
                    </div>

                    <div>
                    <label for='item'>Item:</label>
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


export default OrderForm