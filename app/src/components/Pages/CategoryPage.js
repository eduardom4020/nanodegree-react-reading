import React from 'react';
import Page from '../Containers/Page';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Containers/styles/PageStyles';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

const CategoryPage = ({classes}) => (
    <Page>
        <Typography variant='h2'>
            Category Page
        </Typography>
        <ItemsList gridList={null} />
    </Page>
);

export default withStyles(styles)(CategoryPage);