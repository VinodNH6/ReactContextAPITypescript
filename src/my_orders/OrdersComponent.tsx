import React from "react";
import {BookOrder} from "./Views/BookOrder";
import { Orders } from "./Views/Orders";
import {OrdersContainer} from './Container/OrdersContainer';

export const OrdersComponent = () => (
    <OrdersContainer>
        <BookOrder/>
        <Orders />
    </OrdersContainer>
);
