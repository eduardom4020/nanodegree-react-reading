import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {clickRedirectTo} from '../../helpers/history-helper';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tooltip from '@material-ui/core/Tooltip';
import IMG_PLACEHOLDER from '../../images/placeholder.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ItemsListStyles';

import AddCommentFormButtonContainer from '../Containers/AddCommentFormButtonContainer';

import EditPostButtonContainer from '../Containers/EditPostButtonContainer';
import DeletePostButtonContainer from '../Containers/DeletePostButtonContainer';

import VoteOnPostButtonContainer from '../Buttons/VoteOnPostButtonContainer';

import {TIERS} from '../../images';

const SimplePostTile = ({classes, author, title, body, id, voteScore, commentCount, category, history}) => (
    <GridListTile 
        key={`${title}-${id}`}
        className={classes.sm_tile}
    >  
        <img 
            src={
                (voteScore < 3 && TIERS[0]) ||
                (voteScore < 6 && TIERS[1]) ||
                (voteScore < 12 && TIERS[2]) ||
                (voteScore < 36 && TIERS[3]) ||
                (voteScore < 64 && TIERS[4]) ||
                (voteScore < 80 && TIERS[5]) ||
                (voteScore >= 80 && TIERS[6]) ||
                IMG_PLACEHOLDER
            } 
            alt={title} 
            className={classes.tile_img}
            onClick={clickRedirectTo(`${category}/${id}`, history)}
        />
        <GridListTileBar
            title={
                <Fragment>
                    <Tooltip title={
                        <div>
                            <h2>{title}</h2>
                            <p>{body}</p>
                            <p style={{textAlign: 'right'}}>{`Written by ${author}`}</p>
                        </div>
                    } interactive>
                        <span>{title}</span>
                    </Tooltip>
                    <p style={{textAlign: 'right', margin: 0, fontSize: '.9em'}}>{`by ${author}`}</p>
                </Fragment>
            }
            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
            actionIcon={
                <div className={classes.inline} >
                    <EditPostButtonContainer 
                        id={id} 
                        color='white'
                        title={title}
                        body={body}
                    />
                    <DeletePostButtonContainer
                        id={id} 
                        color='white'
                        category={category}
                    />
                </div>
            }
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
                    <VoteOnPostButtonContainer 
                        voteType='like' 
                        postId={id} 
                        category={category}
                    />
                    <VoteOnPostButtonContainer 
                        voteType='unlike' 
                        postId={id} 
                        category={category}
                    />
                    <AddCommentFormButtonContainer 
                        iconName='add_comment' 
                        isFab={false}
                        color='white'
                        postId={id}
                        category={category}
                    />
                </Fragment>
            }
        />
    </GridListTile>
);

export default withRouter(withStyles(styles)(SimplePostTile));