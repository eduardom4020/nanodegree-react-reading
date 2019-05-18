import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PostCardContainer from '../Cards/PostCardContainer';
import CommentsListContainer from '../Containers/CommentsListContainer';

import AddCommentFormButtonContainer from '../Containers/AddCommentFormButtonContainer';

const PostPage = ({classes}) => (
    <Fragment>
        <AppBar position='fixed'>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Post Details
                </Typography>
            </Toolbar>
        </AppBar>
        <div style={{marginTop: '5%'}} >
            <PostCardContainer />
            <CommentsListContainer />
            <AddCommentFormButtonContainer textTitle='Add a comment to this post:' />
        </div>
    </Fragment>
);

export default PostPage;