import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/VoteButtonStyles';

const ICONS = {
    like: 'thumb_up',
    unlike: 'thumb_down'
};

class VoteButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            ordering: false
        }
    }

    click = () => {
        this.setState({
            clicked: true
        })
    }

    componentDidUpdate() {
        const { clicked, ordering } = this.state;
        const { vote, postId, voteType, executeOrdering } = this.props;

        if(clicked && !ordering) {
            setTimeout(() => {
                this.setState({
                    clicked: false,
                    ordering: false
                })
            }, 500);
            
            try {
                vote(postId, voteType);

                if(executeOrdering) {
                    executeOrdering();
                }

                this.setState({
                    ordering: true
                });
            } catch(err) {
                console.log('No action in storage to execute', err.toString());
            }
        }
    }

    render() {
        const { classes, voteType, style='Light' } = this.props;
        const { clicked } = this.state;

        return (
            <IconButton 
                className={classes.root}
                onClick={this.click}
                disabled={clicked}    
            >
                <Icon 
                    // style={{color: color || '#00000060'}}
                    className={`${classes[`${voteType}${style}`]} ${clicked ? classes[`${voteType}Clicked`] : ''}`}
                >
                    {ICONS[voteType]}
                </Icon>
            </IconButton>
        );
    }
}

export default withStyles(styles)(VoteButton);