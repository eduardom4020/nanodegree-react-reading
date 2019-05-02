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
            clicked: false
        }
    }

    click = () => {
        this.setState({
            clicked: true
        })
    }

    componentDidUpdate() {
        const { clicked } = this.state;

        if(clicked) {
            setTimeout(() => {
                this.setState({
                    clicked: false
                })
            }, 600);
            
            try {
                const { vote, postId, voteType } = this.props;
                vote(postId, voteType);
            } catch(err) {
                console.log('No action in storage to execute', err.toString());
            }
        }
    }

    render() {
        const { classes, voteType } = this.props;
        const { clicked } = this.state;

        console.log('VOTE BUTTON PROPS', this.props)

        return (
            <IconButton 
                className={classes.root}
                onClick={this.click}
                disabled={clicked}    
            >
                <Icon 
                    className={`${classes[voteType]} ${clicked ? classes[`${voteType}Clicked`] : ''}`}
                >
                    {ICONS[voteType]}
                </Icon>
            </IconButton>
        );
    }
}

export default withStyles(styles)(VoteButton);