import React from 'react';
import Page from '../Containers/Page';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Containers/styles/PageStyles';
import Typography from '@material-ui/core/Typography';
import ListLinear from '../Lists/ListLinear';

const RootPage = ({classes}) => (
    <Page>
        <Typography variant='h5'>
            Main Page
        </Typography>
        <ListLinear />
    </Page>
);

export default withStyles(styles)(RootPage);