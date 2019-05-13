import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { editPost } from '../../actions/post-actions';

import FormButton from '../Buttons/FormButton';

const EditPostButtonContainer = props => (
    <FormButton 
        type='editPost'
        iconName='edit' 
        isFab={false}
        {...props}  
    />
);

const mapStateToProps = ({categories}) => ({categories});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            editPost
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(EditPostButtonContainer);