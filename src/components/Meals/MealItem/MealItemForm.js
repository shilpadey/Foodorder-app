
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const itmCtx = useContext(CartContext);

    const addItemToCart = (event) => {
        event.preventDefault();
        const quantity = document.getElementById("amount" + props.id).value
        itmCtx.addItem({...props.item,quantity:quantity});
    };

    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id:"amount" + props.id,
                    type:"number",
                    min: '1',
                    max: '5',
                     step: '1',
                    defaultValue: '1'
                }} 
            />
            <button onClick={addItemToCart}>+Add</button>
        </form>
    );

};

export default MealItemForm;