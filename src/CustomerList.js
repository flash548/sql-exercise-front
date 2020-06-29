import React from 'react';
import { JsonToTable } from "react-json-to-table";

class CustomerList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class = "col-md-12 text-center table">
                <JsonToTable json={this.props.customerList} />
            </div>
        )   
    }
}

export default CustomerList
