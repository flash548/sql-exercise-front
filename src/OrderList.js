import React from 'react';
import { JsonToTable } from "react-json-to-table";

class OrderList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        console.log("Orderlist: ", this.props.orderList)
        return(
            <JsonToTable json={this.props.orderList} />
        )
        
    }
}

export default OrderList