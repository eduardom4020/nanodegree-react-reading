import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VoteButton from './VoteButton';

import { vote } from '../../actions/post-actions';

const VoteButtonContainer = props => (
    (props.voteType === 'like' || props.voteType === 'unlike') &&
    <VoteButton {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            vote
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(VoteButtonContainer);