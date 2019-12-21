import React from 'react';
import {withStyles} from '@material-ui/styles';


import {styles} from './footer.styles';

const Footer = (props) => {
    const {classes} = props;

    return (
        <footer role="contentinfo" className={classes.root}>
            <p>Built for fun by Wait, What?! development.</p>
        </footer>
    )
};

export default withStyles(styles)(Footer);