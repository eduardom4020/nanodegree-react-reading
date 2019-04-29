import React from 'react';
import Page from '../Containers/Page';
import { withStyles } from '@material-ui/core/styles';
import styles from '../Containers/styles/PageStyles';
import Typography from '@material-ui/core/Typography';

const PostPage = ({classes}) => (
    <Page>
        <Typography variant='h2'>
            Post Page
        </Typography>
    </Page>
);

export default withStyles(styles)(PostPage);