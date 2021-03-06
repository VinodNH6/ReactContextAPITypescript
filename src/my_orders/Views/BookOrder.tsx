import * as React from 'react';
import { OrdersContext } from '../Container/OrdersContainer';
import { addBookService } from '../Services/services';

export const BookOrder = () => {
    const [amount, setAmount] = React.useState<number>();
    const [currency, setCurrency] = React.useState<string>('');
    const {state: {orders, loading, error}, dispatch} = React.useContext(OrdersContext);

    React.useEffect(() => {
        setAmount(undefined);
        setCurrency('');
    }, [orders]);

    const handleBooking = () => {
        addBookService(dispatch, {amount, currency});
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>OrdersList</h1>
            <div style={{margin: 5, padding: 5}}>
                Amount: <input type="text" value={amount ? amount : ''} onChange={(e) => setAmount(+e.target.value)}/>
            </div>
            <div style={{margin: 5, padding: 5}}>
                Currency:
                <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option disabled selected value=""> -- select an option -- </option>
                    <option value="EURUSD">EURUSD</option>
                    <option value="USDJPY">USDJPY</option>
                    <option value="USDGBP">USDGBP</option>
                </select>
            </div>
            <div style={{margin: 5, padding: 5}}>
                    <span style={{display: 'flex', flexDirection: 'column'}}>
                        <span> Order summary: </span>
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: 60}}>
                            <span>Amount({amount})</span>
                            <span>Currency({currency})</span>
                        </div>
                    </span>
            </div>
            <div style={{margin: 5, padding: 5}}>
                <button onClick={handleBooking}>
                    BOOK
                </button>
            </div>
            <div>
                {loading && <h3> Booking in progess.............</h3>}
                {error && <h4 style={{color: 'red'}}> Error.. !!!!</h4>}
                {!loading && !error && orders && orders.length > 0 && <h3> Booking Successful !!!!!!!</h3>}
            </div>
        </div>
    );
};
