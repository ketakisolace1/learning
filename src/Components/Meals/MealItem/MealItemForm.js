import Input from '../../UI/Input.js';
import classes from '../AvailableMeals.module.css'

const MealItemForm = (props)=>{
    return(
        <form className={classes.form}>
            <Input lable="Amount"
                input ={{
                    id: 'amount',
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
           <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;
