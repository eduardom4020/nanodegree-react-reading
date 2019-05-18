import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootPage, PostPage, CategoryPage, NotFoundPage } from './Pages';

import {
    getAllCategories
} from '../providers/categories-provider';

import {
    getPostsByCatagory
} from '../providers/posts-provider';

import {
    setCategories
} from '../actions/category-actions';

import {
    setPosts,
    orderPosts
} from '../actions/post-actions';

import Icon from '@material-ui/core/Icon';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstLoad: null
        }
    }

    async componentDidMount() {
        const { setCategories, setPosts } = this.props;

        const { categories } = await Promise.resolve(getAllCategories());
        
        if(categories && categories.length > 0) {
            const posts = await Promise.all(categories.map(category => (
                getPostsByCatagory({category: category.path})
            )));

            setCategories(categories);

            if(posts && posts.length > 0) {
                setPosts(posts);
            }
        }

        this.setState({
            firstLoad: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { firstLoad } = this.state;

        if(firstLoad === false) {
            const { categories, orderPosts } = this.props;
            const categoriesPaths = categories.map(category => category.path);
            orderPosts(categoriesPaths);

            this.setState({
                firstLoad: true
            })
        }
    }

    render() {
        const { categories, posts } = this.props;
        const { firstLoad } = this.state;

        return (
            firstLoad ? (
                <Router>
                    <Switch>
                        <Route path='/' exact component={RootPage} />
                        {
                            categories &&
                            categories.map((category, index) => (
                                <Route
                                    key={`route-${category.path}-${index}`} 
                                    exact
                                    path={`/${category.path}`}
                                    component={CategoryPage}
                                />
                            ))
                        }
                        {
                            posts &&
                            Object.values(posts).filter(post => !post.deleted)
                                .map((post, index) => (
                                    <Route
                                        key={`post-${post.id}-${index}`} 
                                        exact
                                        path={`/${post.category}/${post.id}`}
                                        component={PostPage}
                                    />
                                )
                            )
                        }
                        <Route path="*" component={NotFoundPage} />
                    </Switch>
                </Router>
            ) :
            <div style={{width: '100%', textAlign: 'center'}} >
                <Icon style={{fontSize: '20em', color: '#dbdbdb'}}>hourglass_empty</Icon>
                <p>Loading...</p>
            </div>
        );
    }
}

const mapStateToProps = ({categories, posts}) => ({
    posts,
    categories,
    posts
});


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        { 
            setCategories,
            setPosts,
            orderPosts
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
