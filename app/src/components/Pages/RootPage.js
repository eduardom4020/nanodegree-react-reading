import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

import AddPostFormButtonContainer from '../Containers/AddPostFormButtonContainer';

const RootPage = ({categories, posts, postsOrder}) => (
    <Fragment>
        <AppBar position='fixed'>
            <Toolbar variant="dense">
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit">
                Main
            </Typography>
            </Toolbar>
        </AppBar>
        <div style={{marginTop: '5%'}} >
            {
                categories &&
                categories.map((category, index) => (
                    <Fragment key={`${category.path}-${index}`} >
                        <CategoryHeader 
                            category={category} 
                        />
                        <ItemsList 
                            data={
                                postsOrder
                                    .filter(post => posts[post.id] && !posts[post.id].deleted && post.category === category.path)
                                    .map(post => posts[post.id])
                            }
                        />
                        <AddPostFormButtonContainer textTitle='Are you thinking in...' />
                    </Fragment>
                ))
            }
        </div>
    </Fragment>
);

const mapStateToProps = ({categories, posts, postsOrder}) => ({
    categories,
    posts,
    postsOrder: postsOrder && postsOrder.constructor === Array ? postsOrder : []
});


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);