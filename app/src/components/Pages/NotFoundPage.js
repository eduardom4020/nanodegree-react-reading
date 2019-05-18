import React from 'react';
import {
    Icon,
    Typography
} from '@material-ui/core'

const NotFoundPage = () => (
    <div
        style={{
            width: '100%',
            height: 'inherit',
            textAlign: 'center',
            verticalAlign: 'middle'
        }}
    >
        <Icon style={{fontSize: '20em', color: '#dbdbdb'}}>error_outline</Icon>
        <Typography variant='h5'>Error 404: Page Not Found.</Typography>
    </div>
);

export default NotFoundPage;