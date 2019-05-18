import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { orderPosts } from '../../actions/post-actions';
import OrderButton from './OrderButton';

const clickEvent = (category, orderPosts, orderBy, invert) => e => (
    category.orderBy !== `${orderBy}${invert ? '-inverse' : ''}` && 
        orderPosts([category.path], orderBy, invert)
);

const OrderButtonContainer = ({ category, orderPosts, name, orderBy, invert }) => (
    <OrderButton 
        name={name}
        isSelected={category.orderBy === `${orderBy}${invert ? '-inverse' : ''}`}
        clickEvent={clickEvent(category, orderPosts, orderBy, invert)}
    />
);

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            orderPosts
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderButtonContainer);