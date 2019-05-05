import React, {Component} from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles/OrderButtonStyles';

class OrderButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, clickEvent, isSelected, name } = this.props;
        return (
            <Button 
                className={classes.root}
                onClick={clickEvent}
            >
                <Typography variant='button'>
                    {name}
                </Typography>
                <Icon className={isSelected ? classes.selected : ''}>
                    {
                        isSelected ? 
                            'arrow_drop_up' 
                        : 
                            'arrow_drop_down'
                    }
                </Icon>
            </Button>
        );
    }
}

export default withStyles(styles)(OrderButton);