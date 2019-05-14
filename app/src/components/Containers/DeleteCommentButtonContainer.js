import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteComment } from '../../actions/comment-actions';

import FormButton from '../Buttons/FormButton';

const DeleteCommentButtonContainer = props => (
    <FormButton 
        type='deleteComment'
        iconName='delete' 
        isFab={false}
        textTitle='Are you sure that you want to delete this comment?'
        {...props}  
    />
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCommentButtonContainer);