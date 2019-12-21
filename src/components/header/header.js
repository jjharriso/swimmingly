import React from 'react';
import PoolIcon from '@material-ui/icons/Pool';
import {withStyles} from '@material-ui/styles';

import {styles} from './header.styles';

const Header = (props) => {
    const {classes} = props;

    return (
        <header role="banner" className={classes.root}>
            <PoolIcon className={classes.logo}/>
            <h1 className={classes.name}>
                <a className={classes.link} href="#">Swimmingly</a>
            </h1>
      </header>
    )
};

export default withStyles(styles)(Header);