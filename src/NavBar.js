import React from 'react';

function NavBar(props){
        return(
            <form>
                <input type="button" value="View Purchase Orders" onClick={props.parent.showOrderList} />
                <input type="button" value="Create New Order" onClick={props.parent.showOrderForm} />
                <input type="button" value="View Available Items" onClick={props.parent.showItemList} />
                <input type="button" value="View Customer List" onClick={props.parent.showCustomerList} />
                <input type="button" value="Add New Customer" onClick={props.parent.showAddCustomer} />
            </form>
        )
}

export default NavBar;