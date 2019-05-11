import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {clickRedirectTo} from '../../helpers/history-helper';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import img_not_available from '../../images/placeholder.png';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ItemsListStyles';

import AddCommentFormButtonContainer from '../Containers/AddCommentFormButtonContainer';
import EditPostButtonContainer from '../Containers/EditPostButtonContainer';

import VoteOnPostButtonContainer from '../Buttons/VoteOnPostButtonContainer';

const SimplePostTile = ({classes, title, id, voteScore, commentCount, category, history}) => (
    <GridListTile 
        key={`${title}-${id}`}
        className={classes.sm_tile}
    >  
        <img 
            src={img_not_available} 
            alt={title} 
            className={classes.tile_img}
            onClick={clickRedirectTo(`${category}/${id}`, history)}
        />
        <GridListTileBar
            title={title}
            classes={{
                root: classes.titleBar,
                title: classes.title,
            }}
            actionIcon={
                <Fragment>
                    <EditPostButtonContainer 
                        id={id} 
                        color='white'
                    />
                </Fragment>
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
                    <VoteOnPostButtonContainer voteType='like' postId={id} category={category}/>
                    <VoteOnPostButtonContainer voteType='unlike' postId={id} category={category}/>
                    <AddCommentFormButtonContainer 
                        iconName='add_comment' 
                        isFab={false}
                        color='white'
                    />
                </Fragment>
            }
        />
    </GridListTile>
);

export default withRouter(withStyles(styles)(SimplePostTile));