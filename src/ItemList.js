import React from 'react';
import { JsonToTable } from "react-json-to-table";

class ItemList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        
        return(
            <JsonToTable json={this.props.itemList} />
        )
        
    }
}

export default ItemList