import React from 'react';

class CustomerForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {name: '', email: '', phone: '', company: ''}
    }

    setName = (event) => {
        this.setState({name: event.target.value})
    }

    setEmail = (event) => {
        this.setState({email: event.target.value})
    }

    setPhone = (event) => {
        this.setState({phone: event.target.value})
    }

    setCompany = (event) => {
        this.setState({company: event.target.value})
    }

    sendCustomer = (event) => {
        event.preventDefault()
        if (this.state.name == '') { alert("Please enter customer name"); return; }
        this.props.submit(this.state.name, this.state.email, this.state.phone, this.state.company)
        alert("Customer Added")
    }
    

    render() {
        return (
            <div>
                <form>
                    <div>
                    <label for='name'>Name:</label>
                    <input type={'text'} id={'name'} onChange={this.setName} />
                    </div>

                    <div>
                    <label for='email'>Email:</label>
                    <input type={'text'} id={'email'}  onChange={this.setEmail}/>
                    </div>

                    <div>
                    <label for='phone'>Phone Number:</label>
                    <input type={'text'} id={'phone'}  onChange={this.setPhone}/>
                    </div>

                    <div>
                    <label for='company'>Company Name:</label>
                    <input type={'text'} id={'company'}  onChange={this.setCompany}/>
                    </div>


                    <div>
                        <input type={'submit'} id={'submit'} value={'Add Customer'} onClick={this.sendCustomer}/>
                    </div>
                </form>
            </div>
        )
    }
}


export default CustomerForm