import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addPost, orderPosts } from '../../actions/post-actions';

import FormButton from '../Buttons/FormButton';

const AddPostFormButtonContainer = props => (
    <FormButton {...props} type={'addPost'} />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            addPost,
            orderPosts
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(AddPostFormButtonContainer);