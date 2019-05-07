import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/AvatarStyles';

import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';

const getInitials = text => {
    const tokens = text && text.split(' ');
    if(tokens) {
        return tokens.length > 1 ? `${tokens[0]}${tokens[1]}`.toUpperCase() : text[0].toUpperCase();
    } else {
        return '?'
    }
}

const InitialsAvatar = ({ classes, text, tooltipText }) => (
    <Tooltip
        title={tooltipText}
    >
        <Avatar aria-label={tooltipText} className={classes.avatar}>
            {getInitials(text)}
        </Avatar>
    </Tooltip>
);

export default withStyles(styles)(InitialsAvatar);