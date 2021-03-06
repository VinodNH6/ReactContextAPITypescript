import { IOrder, IAction, ActionType } from '../Container/OrdersContainer';

export const addBookService = (dispatch: React.Dispatch<IAction>, bookData: IOrder) => {
    dispatch({type: ActionType.Loading});
    new Promise<IOrder>((resolve, reject) => {
        setTimeout(() => {
            resolve(bookData);
        }, 2500);
    })
    .then((resp:IOrder) => {
        dispatch({type: ActionType.Order, payload: resp});
    })
    .catch(e => {
        dispatch({type: ActionType.Error});
    })
    .finally(() => {
        dispatch({type: ActionType.Success});
    })
};