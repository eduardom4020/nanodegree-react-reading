import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles/PostCardStyles';

import IMG_PLACEHOLDER from '../../images/placeholder.png';

class PostCard extends Component {
    constructor(props) {
        super(props);
    }

    getInitials = text => {
        const tokens = text && text.split(' ');
        if(tokens) {
            return tokens.length > 1 ? `${tokens[0]}${tokens[1]}`.toUpperCase() : text[0].toUpperCase();
        } else {
            return '?'
        }
    }

    render() {
        const { classes, post } = this.props;
        const { title, author, timestamp, body } = post;
        const date = new Date(timestamp);
        const img = IMG_PLACEHOLDER;
        
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Tooltip
                            title={`Author: ${author}`}
                        >
                            <Avatar aria-label="Author" className={classes.avatar}>
                                {this.getInitials(author)}
                            </Avatar>
                        </Tooltip>
                    }
                    // action={
                    //     <IconButton>
                    //     <MoreVertIcon />
                    //     </IconButton>
                    // }
                    title={title}
                    subheader={`${date.toDateString()} ${date.toTimeString()}`}
                />
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={title}
                />
                <CardContent
                    className={classes.body}
                >
                    <Icon
                        className={classes.enterIcon}
                    >
                        subdirectory_arrow_right
                    </Icon>
                    <Typography component='p'>
                        {body}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                {/* <IconButton aria-label="Add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
                </CardActions>
                {/* <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                        </Typography>
                        <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                        </Typography>
                        <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                        cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                        </Typography>
                        <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                        </Typography>
                    </CardContent>
                </Collapse> */}
            </Card>
        );
    }
}

export default withStyles(styles)(PostCard);