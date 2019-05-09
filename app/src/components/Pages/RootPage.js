import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import CategoryHeader from '../Headers/CategoryHeader';

import AddPostFormButtonContainer from '../Containers/AddPostFormButtonContainer';

const RootPage = ({categories, posts, postsOrder}) => (
    <Fragment>
        <Typography variant='h2'>
            Main Page
        </Typography>
        {
            categories &&
            categories.map((category, index) => (
                <Fragment key={`${category.path}-${index}`}>
                    <CategoryHeader 
                        category={category} 
                    />
                    <ItemsList 
                        data={
                            postsOrder
                                .filter(post => !post.deleted && post.category === category.path)
                                .map(post => posts[post.id])
                        }
                    />
                    <AddPostFormButtonContainer textTitle='Are you thinking in...' />
                </Fragment>
            ))
        }
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