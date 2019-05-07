import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCommentsByPost } from '../../providers/comments-provider';
import { getFromPath } from '../../helpers/url-helpers';

import { setComments } from '../../actions/comment-actions';

import CommentsList from '../Lists/CommentsList';

class CommentsListContainer extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const { setComments } = this.props;
        const post = getFromPath();
        const thisPostComments = await Promise.resolve(getCommentsByPost({post}));
        setComments(thisPostComments);
    }

    render() {
        const { comments } = this.props;
        return(
            <CommentsList comments={Object.values(comments)}/>
        );
    }
}

const mapStateToProps = ({comments}) => ({comments});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            setComments
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer);