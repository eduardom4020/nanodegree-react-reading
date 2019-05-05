import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

const getCategoryFromPath = () => {
    const tokens = window.location.pathname.split('/');
    return tokens[tokens.length - 1];
}

const CategoryPage = ({posts, categories, postsOrder}) => (
    <Fragment>
        <Typography variant='h2'>
            Category Page
        </Typography>
        <CategoryHeader 
            category={categories.filter(category => category.path === getCategoryFromPath())[0]} 
        />
        <ItemsList 
            data={
                postsOrder
                    .filter(post => !post.deleted && post.category === getCategoryFromPath())
                    .map(post => posts[post.id])
            }
            gridList='wrappedList'
        />
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