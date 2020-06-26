import React from 'react';

function OrderForm(props) {

    return (
        <div>
            <form>
                <div>
                <label for='userid'>User ID:</label>
                <select id={'userid'} onChange={props.userChanged}>
                    {
                        props.users.map(item => <option value={item}>{item}</option>)
                    }
                </select>
                </div>

                <div>
                <label for='quantity'>Quantity:</label>
                <input type={'text'} id={'quantity'}  onChange={props.qtyChanged}/>
                </div>

                <div>
                <label for='manu'>Manufacturer:</label>
                <select id={'makers'} onChange={props.makerChanged}>
                    {
                        props.makers.map(item => <option value={item}>{item}</option>)
                    }
                </select>
                </div>

                <div>
                <label for='item'>Item:</label>
                <select id={'items'} onChange={props.updateItem}>
                    {
                        props.items.map(item => <option value={item}>{item}</option>)
                    }
                </select>
                </div>

                <div>
                    <input type={'submit'} id={'submit'} value={'Submit Order'} onClick={props.submit}/>
                </div>
            </form>
        </div>
    )
}


export default OrderForm