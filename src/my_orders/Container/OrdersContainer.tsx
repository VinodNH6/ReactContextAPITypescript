import React from "react";
import { ordersReducer } from "./OrdersReducer";

export enum ActionType {
    Order = 'ORDER',
    Loading = 'LOADING',
    Success = 'SUCCESS',
    Error = 'ERROR'
};

export interface IOrder {
    amount: number,
    currency: string
}

export type IAction = 
    | 
        { 
            type: ActionType.Order,
            payload: IOrder
        }
    | 
        { 
            type: ActionType.Loading
        }
    |
        { 
            type: ActionType.Success
        }
    |
        {
            type: ActionType.Error
        }


export interface IState {
    loading: boolean
    error: boolean
    orders: IOrder[]
};

export interface IContext {
    state: IState
    dispatch: React.Dispatch<IAction>
};

const initialState:IState = {
    loading: false, 
    error: false, 
    orders: []
};


export const OrdersContext = React.createContext<IContext>({} as IContext);

export const OrdersContainer = ({ children }: any) => {
    const [state, dispatch] = React.useReducer<React.Reducer<IState, IAction>>(
        ordersReducer,
        initialState
      );

    return (
      <OrdersContext.Provider value={{state, dispatch}}>
        {children}
      </OrdersContext.Provider>
    );
};