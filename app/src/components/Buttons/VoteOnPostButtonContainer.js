import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import VoteButton from './VoteButton';

import { orderPosts } from '../../actions/post-actions';
import { voteOnPost } from '../../actions/vote-actions';

const executeOrdering = (categories, category, orderPosts) => e => {
    const orderBy = categories.filter(someCategory => someCategory.path === category)
        .map(category => category && category.orderBy);
    
    if(orderBy.length === 1) {
        orderPosts([category], orderBy[0]);
    }
}

const VoteOnPostButtonContainer = props => {
    const { voteType, categories, orderPosts, category } = props;
    return (
        (voteType === 'like' || voteType === 'unlike') &&
        <VoteButton 
            {...props} 
            executeOrdering={executeOrdering(categories, category, orderPosts)}
        />
    );
};

const mapStateToProps = ({categories}) => ({
    categories
});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            vote: voteOnPost,
            orderPosts
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(VoteOnPostButtonContainer);