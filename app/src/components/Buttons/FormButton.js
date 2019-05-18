import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormButtonStyles';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import BaseFormDialog from '../Dialogs/BaseFormDialog';

class FormButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }
    
    handleOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        const { classes, type, isFab=true, iconName, color } = this.props;
        const { open } = this.state;

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
                                <Icon style={{color: color || '#00000060'}}>
                                    {iconName || 'add'}
                                </Icon>
                            </IconButton>
                        )
                }
                <BaseFormDialog 
                    {...this.props} 
                    type={type} 
                    open={open} 
                    handleClose={this.handleClose}
                />
            </Fragment>
        );
    }
}

export default withStyles(styles)(FormButton);