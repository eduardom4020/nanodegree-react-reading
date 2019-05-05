import React from 'react';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/CategoryHeaderStyles';

import OrderButton from '../Buttons/OrderButtonContainer';


const CategoryHeader = ({classes, category}) => (
    <div className={classes.root} >
        <Typography variant='h4'>
            {category.name}
        </Typography>
        <div className={classes.smVerticalSpacer} />
        <Typography 
            variant='h6' 
            color='textSecondary' 
            className={classes.smWidth}
        >
            Filter By:
        </Typography>
        <OrderButton 
            name='Score'
            orderBy='voteScore'
            category={category}
        />
        <OrderButton 
            name='Comments'
            orderBy='commentCount'
            category={category}
        />
        <OrderButton 
            name='Old'
            orderBy='timestamp'
            category={category}
            invert={true}
        />
        <OrderButton 
            name='New'
            orderBy='timestamp'
            category={category}
        />
    </div>
);

export default withStyles(styles)(CategoryHeader);