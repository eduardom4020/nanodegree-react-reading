import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

const getCategoryFromPath = () => {
    const tokens = window.location.pathname.split('/');
    return tokens[tokens.length - 1];
}

const CategoryPage = ({posts, categories, postsOrder}) => (
    <Fragment>
        <AppBar position='fixed'>
            <Toolbar variant="dense">
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" color="inherit">
                Category: {categories.filter(category => category.path === getCategoryFromPath())[0].name}
            </Typography>
            </Toolbar>
        </AppBar>
        <div style={{marginTop: '5%'}} >
            <CategoryHeader 
                category={categories.filter(category => category.path === getCategoryFromPath())[0]} 
                hideCategoryName={true}
            />
            <ItemsList 
                data={
                    postsOrder
                        .filter(post => !post.deleted && post.category === getCategoryFromPath())
                        .map(post => posts[post.id])
                }
                gridList='wrappedList'
            />
        </div>
    </Fragment>
);

const mapStateToProps = ({posts, categories, postsOrder}) => ({
    posts,
    categories,
    postsOrder: postsOrder && postsOrder.constructor === Array ? postsOrder : []
});


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);