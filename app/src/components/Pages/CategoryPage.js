import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Containers/styles/PageStyles';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

const CategoryPage = ({classes}) => (
    <Fragment>
        <Typography variant='h2'>
            Category Page
        </Typography>
        <ItemsList gridList={null} />
    </Fragment>
);

export default withStyles(styles)(CategoryPage);