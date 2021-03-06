import { ActionType, IAction, IState } from "./OrdersContainer";

export const ordersReducer: React.Reducer<IState, IAction> = (state, action) => {
    switch (action.type) {

        case ActionType.Order: 
            return {
                ...state,
                orders: [...state.orders, action.payload]
            };

        case ActionType.Loading: 
            return {
                ...state,
                loading: true,
                error: false
            };

        case ActionType.Success: 
            return {
                ...state,
                loading: false,
                error: false
            };

        case ActionType.Error: 
            return {
                ...state,
                loading: false,
                error: true
            };

        default:
            return state;
    }
};

