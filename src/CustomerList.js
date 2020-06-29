import React from 'react';
import { JsonToTable } from "react-json-to-table";

class CustomerList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <JsonToTable json={this.props.customerList} />
        )   
    }
}

export default CustomerList