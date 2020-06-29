import React from 'react';

function NavBar(props){
        return(
            <form>
                <input type="button" value="Create New Purchase Order" onClick={props.parent.showOrderForm} />
                <input type="button" value="View Purchase Orders" onClick={props.parent.showOrderList} />
                <br></br>
                <input type="button" value="Create New Sales Order" onClick={props.parent.showSalesOrderForm} />
                <input type="button" value="View Sales Orders" onClick={props.parent.showSalesOrderList} />
                <br></br>
                <input type="button" value="Add New Customer" onClick={props.parent.showCustomerForm} />
                <input type="button" value="View Customer List" onClick={props.parent.showCustomerList} />
                <br></br>
                <input type="button" value="View Available Items" onClick={props.parent.showItemList} />
            </form>
        )
}

export default NavBar