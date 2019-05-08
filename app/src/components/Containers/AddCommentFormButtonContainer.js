import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addComment } from '../../actions/comment-actions';

import FormButton from '../Buttons/FormButton';

const AddCommentFormButtonContainer = props => (
    <FormButton {...props} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            addComment
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentFormButtonContainer);