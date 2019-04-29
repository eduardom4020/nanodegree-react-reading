import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PageStyles';

const Page = ({classes, children}) => (
    <div className={classes.root}>
        {children}
    </div>
);

export default withStyles(styles)(Page);