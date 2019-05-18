import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import styles from './styles/PostCardStyles';

import IMG_PLACEHOLDER from '../../images/placeholder.png';
import {TIERS} from '../../images';

import VoteOnPostButtonContainer from '../Buttons/VoteOnPostButtonContainer';
import InitialsAvatar from '../Avatars/InitialsAvatar';

import EditPostButtonContainer from '../Containers/EditPostButtonContainer';
import DeletePostButtonContainer from '../Containers/DeletePostButtonContainer';

class PostCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, post, history } = this.props;
        const { title, author, timestamp, body, category, id, voteScore, commentCount } = post;
        const date = new Date(timestamp);
        const img = IMG_PLACEHOLDER;
        
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <InitialsAvatar 
                            text={author}
                            tooltipText={`Author: ${author}`}
                        />
                    }
                    action={
                        <div className={classes.inline} >
                            <EditPostButtonContainer 
                                id={id}
                                title={title}
                                body={body}
                            />
                            <DeletePostButtonContainer
                                id={id}
                                category={category}
                                history={history}
                            />
                        </div>
                    }
                    title={title}
                    subheader={`${date.toDateString()} ${date.toTimeString()}`}
                />
                <CardMedia
                    className={classes.media}
                    image={
                        (voteScore < 3 && TIERS[0]) ||
                        (voteScore < 6 && TIERS[1]) ||
                        (voteScore < 12 && TIERS[2]) ||
                        (voteScore < 36 && TIERS[3]) ||
                        (voteScore < 64 && TIERS[4]) ||
                        (voteScore < 80 && TIERS[5]) ||
                        (voteScore >= 80 && TIERS[6]) ||
                        IMG_PLACEHOLDER
                    }
                    title={title}
                />
                <CardContent
                    className={classes.body}
                >
                    {
                        body.split('\n').map((token, index) => (
                            index === 0 ? (
                                <Fragment
                                    key={`paragraph-${index}`}
                                >
                                    <div className={classes.inline}>
                                        <Icon
                                            className={classes.enterIcon}
                                        >
                                            subdirectory_arrow_right
                                        </Icon>
                                        <Typography component='p'>
                                            {token}
                                        </Typography>
                                    </div>
                                    <p />
                                </Fragment>
                            ) 
                            :
                                <Typography component='p'>
                                    {token}
                                </Typography>
                        ))
                    }
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <div className={classes.actionsLeft} >
                        <Fragment>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;{` — Score: ${voteScore}`}</span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{`Comments: ${commentCount}`}</span>
                        </Fragment>
                    </div>
                    <div className={classes.actionsRight} >
                        <VoteOnPostButtonContainer 
                            voteType='like' 
                            style='Dark'
                            postId={id} 
                            category={category}
                        />
                    </div>
                    <div className={classes.actionsRight} >
                        <VoteOnPostButtonContainer 
                            voteType='unlike' 
                            style='Dark'
                            postId={id} 
                            category={category}
                        />
                    </div>
                </CardActions>
            </Card>
        );
    }
}

export default withRouter(withStyles(styles)(PostCard));