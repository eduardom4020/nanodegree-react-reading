import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

import AddPostFormButtonContainer from '../Containers/AddPostFormButtonContainer';
import ToolBarContainter from '../Headers/ToolBarContainer';

const getCategoryFromPath = () => {
    const tokens = window.location.pathname.split('/');
    return tokens[tokens.length - 1];
}

const CategoryPage = ({posts, categories, postsOrder}) => (
    <Fragment>
        <ToolBarContainter pageTitle='Category' />
        <div style={{marginTop: '10%'}} >
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
        <AddPostFormButtonContainer 
            textTitle="Let's write a new post!" 
            fixedCategory={categories.filter(category => category.path === getCategoryFromPath())[0].path} 
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