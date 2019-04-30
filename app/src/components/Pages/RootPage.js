import React from 'react';
import Page from '../Containers/Page';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Containers/styles/PageStyles';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

const RootPage = ({classes}) => (
    <Page>
        <Typography variant='h5'>
            Main Page
        </Typography>
        <ItemsList />
    </Page>
);

export default withStyles(styles)(RootPage);