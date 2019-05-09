import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editComment } from '../../actions/comment-actions';

import FormButton from '../Buttons/FormButton';

const EditCommentButtonContainer = props => (
    <FormButton 
        type='editComment'
        iconName='edit' 
        isFab={false}
        {...props}  
    />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            editComment
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentButtonContainer);