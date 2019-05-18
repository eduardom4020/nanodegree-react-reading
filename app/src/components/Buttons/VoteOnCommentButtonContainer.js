import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VoteButton from './VoteButton';

import { voteOnComment } from '../../actions/vote-actions';

const VoteOnCommentButtonContainer = props => {
    const { voteType } = props;
    return (
        (voteType === 'like' || voteType === 'unlike') &&
        <VoteButton 
            {...props} 
        />
    );
};

const mapStateToProps = ({categories}) => ({
    categories
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            vote: voteOnComment
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnCommentButtonContainer);