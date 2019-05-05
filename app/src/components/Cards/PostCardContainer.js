import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getFromPath } from '../../helpers/url-helpers';

import PostCard from './PostCard';

const PostCardContainer = props => (
    <PostCard {...props} />
);

const mapStateToProps = ({posts}) => {
    const postId = getFromPath();
    const post = posts[postId];
    
    return {
        post
    };
};


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(PostCardContainer);