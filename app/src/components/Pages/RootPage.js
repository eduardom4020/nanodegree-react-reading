import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

import AddPostFormButtonContainer from '../Containers/AddPostFormButtonContainer';
import ToolBarContainter from '../Headers/ToolBarContainer';

const RootPage = ({categories, posts, postsOrder}) => (
    <Fragment>
        <ToolBarContainter pageTitle='Main' />
        <div style={{marginTop: '10%'}} >
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
                        <AddPostFormButtonContainer textTitle="Let's write a new post!" />
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