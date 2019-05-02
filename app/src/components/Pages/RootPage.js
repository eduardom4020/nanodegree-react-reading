import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import {
    orderPosts
} from '../../actions/post-actions';
import { Button, Icon } from '@material-ui/core';

const RootPage = ({categories, posts, postsOrder, orderPosts}) => (
    <Fragment>
        <Typography variant='h2'>
            Main Page
        </Typography>
        {
            categories &&
            categories.map((category, index) => (
                <Fragment key={`${category.path}-${index}`}>
                    {/* test only */}
                    <div style={{display: 'inline-flex'}}>
                        <Typography variant='h4'>
                            {category.name}
                        </Typography>
                        {/* <Button onClick={() => orderPosts(Object.values(posts))}>
                            <Typography variant='button'>
                                Score
                            </Typography>
                            <Icon>arrow_drop_down</Icon>
                        </Button> */}
                    </div>
                    <ItemsList 
                        data={
                            postsOrder
                                .filter(post => post.category === category.path)
                                .map(post => posts[post.id])
                        }
                    />
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
            orderPosts
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);