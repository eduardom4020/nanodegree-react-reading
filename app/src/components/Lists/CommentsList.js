import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/CommentsListStyle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import InitialsAvatar from '../Avatars/InitialsAvatar';

const CommentsList = ({classes, comments=[]}) => (
    <List className={classes.root}>
        {
            comments.map(comment => (
                <ListItem 
                    alignItems="flex-start"
                    className={classes.item}
                >
                    <ListItemAvatar>
                        <InitialsAvatar 
                            text={comment.author}
                            tooltipText={`Author: ${comment.author}`}
                        />
                    </ListItemAvatar>
                    <ListItemText
                    primary={
                        <div className={classes.inline}>
                            <Typography variant='h6' color="textPrimary">
                                {comment.author}
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography component='p' color="textSecondary">
                                wrote in
                            </Typography>
                            <div className={classes.spacer} />
                            <Typography component='p' color="textPrimary">
                                {new Date(comment.timestamp).toDateString()}
                            </Typography>
                        </div>
                    }
                    secondary={
                        <div className={classes.inline}>
                            <Typography component='p' color="textPrimary">
                                {comment.body}
                            </Typography>
                            <div className={classes.spacer} />
                            {` — Score: ${comment.voteScore}`}
                        </div>
                    }
                    />
                </ListItem>
            ))
        }
    </List>
);

export default withStyles(styles)(CommentsList);