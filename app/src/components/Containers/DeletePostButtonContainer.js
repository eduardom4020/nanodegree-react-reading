import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deletePost } from '../../actions/post-actions';

import FormButton from '../Buttons/FormButton';

const DeletePostButtonContainer = props => (
    <FormButton 
        type='deletePost'
        iconName='delete' 
        isFab={false}
        textTitle='Are you sure that you want to delete this post?'
        {...props}  
    />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            deletePost
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(DeletePostButtonContainer);