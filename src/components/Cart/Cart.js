import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartModal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    let totalAmount = 0;
    let hasItem = cartCtx.items.length > 0;
    const cartItem = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <li key={item.id}>
                    {item.fooditem}
                    {item.quantity}
                    {item.price}
                </li>
            ))}
        </ul>
    );
    
    cartCtx.items.forEach(itm => {
        totalAmount = totalAmount + (Number(itm.quantity) * itm.price);
    });
    totalAmount = `$${totalAmount.toFixed(2)}`;

    return (
        <CartModal onHideCart={props.onHideCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItem && <button className={classes.button}>Order</button>}
            </div>
        </CartModal>
    );
};

export default Cart;