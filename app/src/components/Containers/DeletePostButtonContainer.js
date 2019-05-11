import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteComment } from '../../actions/comment-actions';

import DeleteButton from '../Buttons/DeleteButton';

const DeletePostButtonContainer = props => (
    <DeleteButton {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            deleteComment
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(DeletePostButtonContainer);