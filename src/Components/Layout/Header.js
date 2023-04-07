
import {Fragment}  from 'react';
import imgmeals from '../../Assets/imgmeals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>

            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={imgmeals} alt='A meal table'/>
        </div>
    </Fragment>
};

export default Header;