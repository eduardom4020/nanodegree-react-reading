import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormButtonStyles';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
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
            comment: ''
        };
    }

    handleOpen = () => {
        this.setState({
            open: true,
            author: '',
            comment: ''
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    handleConfirm = () => {
        //  triggers redux event
        const { addComment } = this.props;
        const { author, comment } = this.state;
        addComment({author, comment});

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
        const { classes, title, form, actions } = this.props;
        const { open, author, comment } = this.state;

        return (
            <Fragment>
                <Fab 
                    color="secondary" 
                    aria-label="Add" 
                    className={classes.fab}
                    onClick={this.handleOpen}
                    // fullScreen={true}
                >
                    <Icon>add</Icon>
                </Fab>

                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-button-dialog"
                    // className={classes.dialog}
                >
                        <DialogTitle id="form-dialog-title">
                            {title}
                        </DialogTitle>
                        <DialogContent>
                            {
                                form || (
                                    <Fragment>
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
                                        <br />
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