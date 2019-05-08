import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PostCardContainer from '../Cards/PostCardContainer';
import CommentsListContainer from '../Containers/CommentsListContainer';

import AddCommentFormButtonContainer from '../Containers/AddCommentFormButtonContainer';

const PostPage = ({classes}) => (
    <Fragment>
        <Typography variant='h2'>
            Post Page
        </Typography>
        <PostCardContainer />
        <CommentsListContainer />
        <AddCommentFormButtonContainer title='Add a comment to this post:' />
    </Fragment>
);

export default PostPage;