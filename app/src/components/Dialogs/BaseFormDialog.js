import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/BaseFormDialog';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

class BaseFormDialog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            author: '',
            comment: '',
            body: '', 
            title: '', 
            category: '' //change to dropdown
        };
    }

    handleConfirm = () => {
        //  triggers redux event
        const { 
            addComment, 
            addPost, 
            editComment, 
            orderPosts, 
            editPost,
            deletePost,
            deleteComment,
            type, 
            id,
            handleClose,
            postId,
            history
        } = this.props;

        const { 
            author, 
            comment, 
            body, 
            title, 
            category 
        } = this.state;

        //TODO start a saga here
        switch(type) {
            case 'addPost':
                addPost({author, body, title, category });
                orderPosts([category]);
                break;
            case 'addComment':
                addComment({author, comment, parentId: postId});
                if(category) {
                    orderPosts([category]);
                }
                break;
            case 'editComment':
                editComment({id, newComment: comment});
                break;
            case 'editPost':
                editPost({id, newTitle: title, newBody: body});
                break;
            case 'deletePost':
                deletePost({id, history});
                if(category) {
                    orderPosts([category]);
                }
                break;
            case 'deleteComment':
                deleteComment({id});
                if(category) {
                    orderPosts([category]);
                }
                break;
            default:
                alert('No Action Was Executed!');
                break;
        }

        handleClose();

        this.setState({
            author: '',
            comment: '',
            body: '', 
            title: '', 
            category: ''
        })
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    componentDidMount() {
        const { comment, title, body, open } = this.props;

        if(comment || title || body) {
            this.setState({
                open,
                comment, 
                title, 
                body
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { comment, title, body } = this.props;

        if(
            (JSON.stringify(comment) !== JSON.stringify(prevProps.comment)) ||
            (JSON.stringify(title) !== JSON.stringify(prevProps.title)) ||
            (JSON.stringify(body) !== JSON.stringify(prevProps.body))
        ) {
            this.setState({
                comment, 
                title, 
                body
            });
        }
    }

    render () {
        const { classes, type, textTitle, open, handleClose, categories } = this.props;
        const { author, comment, title, category, body } = this.state;

        return (
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-button-dialog"
                fullWidth
                maxWidth='md'
                scroll='body'
            >
                    <DialogTitle id="form-dialog-title">
                        {textTitle}
                    </DialogTitle>
                    <DialogContent>
                        {
                            (type === 'addComment' || type === 'addPost') && (
                                <TextField
                                    // id="outlined-multiline-flexible"
                                    label='Your Name'
                                    value={author}
                                    onChange={this.handleChange('author')}
                                    // className={classes.textField}
                                    margin="normal"
                                    // helperText="hello"
                                    variant="outlined"
                                    fullWidth
                                />
                            )
                        }
                        <br />
                        {
                            (type === 'addComment' || type === 'editComment') && (
                                <TextField
                                    // id="outlined-multiline-flexible"
                                    label='Comment'
                                    multiline
                                    value={comment}
                                    onChange={this.handleChange('comment')}
                                    // className={classes.textField}
                                    margin="normal"
                                    // helperText="hello"
                                    variant="outlined"
                                    fullWidth
                                />
                            )
                        }
                        {
                            (type === 'addPost' || type === 'editPost') && (
                                <Fragment>
                                    <TextField
                                        // id="outlined-multiline-flexible"
                                        label='Title'
                                        value={title}
                                        onChange={this.handleChange('title')}
                                        // className={classes.textField}
                                        margin="normal"
                                        // helperText="hello"
                                        variant="outlined"
                                        fullWidth
                                    />
                                    <br />
                                    {
                                        (type === 'addPost') && (
                                            <FormControl 
                                                variant='outlined' 
                                                className={classes.formControl}
                                                fullWidth
                                            >
                                                <InputLabel
                                                    ref={ref => {
                                                        this.InputLabelRef = ref;
                                                    }}
                                                    htmlFor='outlined-category-simple'
                                                >
                                                    Category
                                                </InputLabel>
                                                <Select
                                                    value={category}
                                                    onChange={this.handleChange('category')}
                                                    input={
                                                        <OutlinedInput
                                                            labelWidth='100%'
                                                            name='Category'
                                                            id='outlined-category-simple'
                                                        />
                                                    }
                                                >
                                                    {
                                                        categories.map(itemCategory => (
                                                            <MenuItem value={itemCategory.path}>{itemCategory.name}</MenuItem>
                                                        ))
                                                    }
                                                </Select>
                                            </FormControl>
                                        )
                                    }
                                    <br />
                                    <TextField
                                        // id="outlined-multiline-flexible"
                                        label='Discussion'
                                        multiline
                                        value={body}
                                        onChange={this.handleChange('body')}
                                        // className={classes.textField}
                                        margin="normal"
                                        // helperText="hello"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </Fragment>
                            )
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleConfirm} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
            </Dialog>
        );
    }
}

export default withStyles(styles)(BaseFormDialog);