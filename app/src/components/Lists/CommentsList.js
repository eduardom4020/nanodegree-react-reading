import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/CommentsListStyle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import InitialsAvatar from '../Avatars/InitialsAvatar';
import DeleteCommentButtonContainer from '../Containers/DeleteCommentButtonContainer';
import EditCommentButtonContainer from '../Containers/EditCommentButtonContainer';

import VoteOnCommentButtonContainer from '../Buttons/VoteOnCommentButtonContainer';

const CommentsList = ({classes, comments=[]}) => (
    <List className={classes.root}>
        {   
            comments.filter(comment => comment.deleted === false)
                .map(comment => (
                <ListItem 
                    alignItems='flex-start'
                    className={classes.item}
                    key={`comment-${comment.id}`}
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
                            <Typography
                                variant='h6' 
                                color="textPrimary"
                            >
                                {comment.author}
                            </Typography>
                            <div className={classes.simpleSpacer} />
                            <Typography
                                variant='body1'  
                                color="textSecondary"
                            >
                                wrote in
                            </Typography>
                            <div className={classes.simpleSpacer} />
                            <Typography
                                variant='body1' 
                                color="textPrimary"
                            >
                                {new Date(comment.timestamp).toDateString()}
                            </Typography>
                            <VoteOnCommentButtonContainer 
                                    voteType='like' 
                                    style='Dark'
                                    postId={comment.id}
                                />
                            <VoteOnCommentButtonContainer 
                                voteType='unlike' 
                                style='Dark'
                                postId={comment.id}
                            />
                        </div>
                    }
                    secondary={
                        <div className={classes.inline}>
                            <Typography 
                                className={classes.body}
                                variant='body1' 
                                color='textPrimary'
                            >
                                {comment.body}
                            </Typography>
                            <div className={classes.spacer} />
                            <div className={classes.counter} >
                                <Typography
                                    className={classes.body}
                                    variant='body2' 
                                    color='textSecondary'
                                >
                                    {` — Score: ${comment.voteScore}`}
                                </Typography>
                                <EditCommentButtonContainer 
                                    id={comment.id}
                                    comment={comment.body}
                                />
                                <DeleteCommentButtonContainer id={comment.id} />
                            </div>
                        </div>
                    }
                    />
                </ListItem>
            ))
        }
    </List>
);

export default withStyles(styles)(CommentsList);