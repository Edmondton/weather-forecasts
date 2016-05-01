import React from 'react';
import {IndexLink, Link} from 'react-router';
import classes from './Header.scss';

export const Header = () => (
    <div>
        <h1>Weather Forecasts</h1>
        <IndexLink to="/" activeClassName={classes.activeRoute}>
            Home
        </IndexLink>
        {' · '}
        <Link to="/weather" activeClassName={classes.activeRoute}>
            Weather Forecasts
        </Link>
    </div>
);

export default Header;
