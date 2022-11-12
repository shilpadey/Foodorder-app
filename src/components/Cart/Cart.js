import CartModal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItem = (
        <ul className={classes['cart-items']}>
            {[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <CartModal onHideCart={props.onHideCart}>
            {cartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.05</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </CartModal>
    );
};

export default Cart;