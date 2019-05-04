import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Typography from '@material-ui/core/Typography';
import ItemsList from '../Lists/ItemsList';

import OrderButton from '../Buttons/OrderButtonContainer';

const RootPage = ({categories, posts, postsOrder}) => (
    <Fragment>
        <Typography variant='h2'>
            Main Page
        </Typography>
        {
            categories &&
            categories.map((category, index) => (
                <Fragment key={`${category.path}-${index}`}>
                    <div style={{display: 'inline-flex', alignItems: 'baseline'}}>
                        <Typography variant='h4'>
                            {category.name}
                        </Typography>
                        <div style={{marginRight: '5%'}}/>
                        <Typography variant='h6' color='textSecondary' style={{width: '20%'}}>
                            Filter By:
                        </Typography>
                        <OrderButton 
                            name='Score'
                            orderBy='voteScore'
                            category={category}
                        />
                        <OrderButton 
                            name='Comments'
                            orderBy='commentCount'
                            category={category}
                        />
                        <OrderButton 
                            name='Old'
                            orderBy='timestamp'
                            category={category}
                            invert={true}
                        />
                        <OrderButton 
                            name='New'
                            orderBy='timestamp'
                            category={category}
                        />
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
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);