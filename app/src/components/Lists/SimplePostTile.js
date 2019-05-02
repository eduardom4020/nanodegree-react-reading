import React, {Fragment} from 'react';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import img_not_available from '../../images/placeholder.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ItemsListStyles';

import VoteButtonContainer from '../Buttons/VoteButtonContainer';

const SimplePostTile = ({classes, title, id, voteScore, commentCount}) => (
    <GridListTile 
        key={`${title}-${id}`}
        className={classes.sm_tile}
    >   
        <img 
            src={img_not_available} 
            alt={title} 
            className={classes.tile_img}
        />
        <GridListTileBar
            title={title}
            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
        />
        <GridListTileBar
            subtitle={
                <Fragment>
                    <span>{`Score: ${voteScore}`}</span>
                    <br />
                    <span>{`Comments: ${commentCount}`}</span>
                </Fragment>
            }
            classes={{
                root: classes.contentBar,
                title: classes.title,
            }}
            actionIcon={
                <Fragment>
                    <VoteButtonContainer voteType='like' postId={id} />
                    <VoteButtonContainer voteType='unlike' postId={id} />
                    <IconButton className={classes.contentBt}>
                        <Icon className={classes.title}>add_comment</Icon>
                    </IconButton>
                </Fragment>
            }
        />
    </GridListTile>
);

export default withStyles(styles)(SimplePostTile);