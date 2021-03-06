import React from 'react';
import { JsonToTable } from "react-json-to-table";

class OrderList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <div class = "col-md-12 text-center table">
                <JsonToTable json={this.props.orderList} />
            </div> 
        )
        
    }
}

export default OrderList