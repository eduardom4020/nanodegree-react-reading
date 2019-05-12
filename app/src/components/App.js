import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RootPage, PostPage, CategoryPage } from './Pages';

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
            console.log(posts)
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

        return (
            <Router>
                <div>
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
                        Object.values(posts).map((post, index) => (
                            <Route
                                key={`post-${post.id}-${index}`} 
                                exact
                                path={`/${post.category}/${post.id}`}
                                component={PostPage}
                            />
                        ))
                    }
                </div>
            </Router>
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
