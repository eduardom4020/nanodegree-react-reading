import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';

// import { getFromPath } from '../../helpers/url-helpers';
import PostCardContainer from '../Cards/PostCardContainer';

const PostPage = ({post}) => (
    <Fragment>
        <Typography variant='h2'>
            Post Page
        </Typography>
        <PostCardContainer />
        {/* <p>{`Post Info:\n\n${JSON.stringify(post)}`}</p> */}
    </Fragment>
);

export default PostPage;

// const mapStateToProps = ({posts}) => {
//     // const postId = getFromPath();
//     // const post = posts[postId];
    
//     // return {
//     //     post
//     // };
// };


// const mapDispatchToProps = dispatch => (
//     bindActionCreators(
//         {
//         }, 
//         dispatch
//     )
// );

// export default connect(mapStateToProps, mapDispatchToProps)(PostPage);