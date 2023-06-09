import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm.js';

const MealItem= (props)=> {
    const price= `$${props.price.toFixed(2)}`;
    return(
        <li>
            <div><h3>{props.name}</h3></div>
            <div className={classes.discription}>{props.discription}</div>
            <div className={classes.price}>{price}</div>
            <div><MealItemForm/></div>
        </li>
    )
}

export default MealItem ;