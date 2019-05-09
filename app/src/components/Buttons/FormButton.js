import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormButtonStyles';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class FormButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            author: '',
            comment: '',
            body: '', 
            title: '', 
            category: '' //change to dropdown
        };
    }

    handleOpen = () => {
        this.setState({
            open: true,
            author: '',
            comment: '',
            body: '', 
            title: '', 
            category: ''
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    handleConfirm = () => {
        //  triggers redux event
        const { addComment, addPost, editComment, orderPosts, type, id } = this.props;
        const { author, comment, body, title, category } = this.state;

        if(type === 'addPost') {
            addPost({author, body, title, category });
            orderPosts([category]);
        } else if(type === 'addComment') {
            addComment({author, comment});
        } else if(type === 'editComment') {
            const newComment = comment;
            editComment({id, newComment});
        }

        this.setState({
            open: false
        });
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        const { classes, textTitle, type, isFab=true, iconName } = this.props;
        const { open, author, comment, title, category, body } = this.state;

        return (
            <Fragment>
                {
                    isFab ? 
                        (
                            <Fab 
                                color={type && (
                                    (type == 'addComment' && 'secondary') ||
                                    (type == 'addPost' && 'primary')
                                )} 
                                aria-label={type} 
                                className={classes.fab}
                                onClick={this.handleOpen}
                                // fullScreen={true}
                            >
                                <Icon>
                                    {iconName || 'add'}
                                </Icon>
                            </Fab>
                        )
                    :
                        (
                            <IconButton
                                onClick={this.handleOpen}
                                aria-label={type}
                            >
                                <Icon>
                                    {iconName || 'add'}
                                </Icon>
                            </IconButton>
                        )
                }

                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-button-dialog"
                    // className={classes.dialog}
                >
                        <DialogTitle id="form-dialog-title">
                            {textTitle}
                        </DialogTitle>
                        <DialogContent>
                            {
                                type === 'addComment' || type === 'addPost' && (
                                    <TextField
                                        // id="outlined-multiline-flexible"
                                        label='Your Name'
                                        value={author}
                                        onChange={this.handleChange('author')}
                                        // className={classes.textField}
                                        margin="normal"
                                        // helperText="hello"
                                        variant="outlined"
                                        
                                    />
                                )
                            }
                            <br />
                            {
                                type === 'addComment' || type === 'editComment' && (
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
                                    />
                                )
                            }
                            {
                                type === 'addPost' && (
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
                                        />
                                        <br />
                                        <TextField
                                            // id="outlined-multiline-flexible"
                                            label='Category'
                                            value={category}
                                            onChange={this.handleChange('category')}
                                            // className={classes.textField}
                                            margin="normal"
                                            // helperText="hello"
                                            variant="outlined"
                                        />
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
                                        />
                                    </Fragment>
                                )
                            }
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleConfirm} color="primary">
                                Confirm
                            </Button>
                        </DialogActions>
                </Dialog>
            </Fragment>
        );
    }
}

export default withStyles(styles)(FormButton);