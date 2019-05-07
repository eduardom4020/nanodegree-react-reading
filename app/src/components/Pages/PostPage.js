import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PostCardContainer from '../Cards/PostCardContainer';
import CommentsListContainer from '../Containers/CommentsListContainer';

import FormButton from '../Buttons/FormButton';

const PostPage = ({classes}) => (
    <Fragment>
        <Typography variant='h2'>
            Post Page
        </Typography>
        <PostCardContainer />
        <CommentsListContainer />
        <FormButton 
            title='Add a comment to this post:'
            form={
                <Fragment>
                    <TextField
                        // id="outlined-multiline-flexible"
                        label='Your Name'
                        // value={this.state.multiline}
                        // onChange={this.handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                        // helperText="hello"
                        variant="outlined"
                        
                    />
                    <br />
                    <TextField
                        // id="outlined-multiline-flexible"
                        label='Comment'
                        multiline
                        // value={this.state.multiline}
                        // onChange={this.handleChange('multiline')}
                        // className={classes.textField}
                        margin="normal"
                        // helperText="hello"
                        variant="outlined"
                    />
                </Fragment>
            }
        />
    </Fragment>
);

export default PostPage;