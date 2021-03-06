import React from "react";
import {OrdersContext} from '../Container/OrdersContainer';

export const Orders = () => {
    const {state: {loading, error, orders}} = React.useContext(OrdersContext);

    return (
        <>
        {!loading && !error && orders && orders.length > 0 &&
        <div style={{margin: 5, padding: 5, width: 'fit-content'}}>
            <h1>ALL ORDERS</h1>
            {orders.map((order, index) => {
                return <div style={{display: 'flex', flexDirection: 'column', margin: 5, padding: 5, border: '1px solid darkgray'}}> 
                    <span>#<b>{index+1}</b></span>
                    <span>Amount: {order.amount}</span>
                    <span>Currency: {order.currency}</span>
                </div>
            })}
        </div>}
        </>
    );
};