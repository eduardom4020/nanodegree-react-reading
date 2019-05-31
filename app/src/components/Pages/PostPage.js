import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PostCardContainer from '../Cards/PostCardContainer';
import CommentsListContainer from '../Containers/CommentsListContainer';

import AddCommentFormButtonContainer from '../Containers/AddCommentFormButtonContainer';
import ToolBarContainter from '../Headers/ToolBarContainer';

const PostPage = ({classes}) => (
    <Fragment>
        <ToolBarContainter pageTitle='Post Details' />
        <div style={{marginTop: '10%'}} >
            <PostCardContainer />
            <CommentsListContainer />
            <AddCommentFormButtonContainer textTitle='Add a comment to this post:' />
        </div>
    </Fragment>
);

export default PostPage;