import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class DeleteButton extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = event => {
        const { deleteComment, id } = this.props;
        deleteComment({id});
    }

    render() {
        const {color} = this.props;
        return (
            <IconButton
                onClick={this.handleClick}
            >
                <Icon style={{color: color || '#00000060'}}>
                    delete
                </Icon>
            </IconButton>
        );
    }
}

export default DeleteButton;