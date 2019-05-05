import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RootPage, PostPage, CategoryPage } from './Pages';

import {
    getAllCategories,
    getPostsByCatagory
} from '../providers/categories-provider';

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
        const posts = await Promise.all(categories.map(category => (
            getPostsByCatagory({category: category.path})
        )));
        // console.log('ON MOUNTING APP', categories, posts);

        setCategories(categories);
        setPosts(posts);

        this.setState({
            firstLoad: false
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // const { posts: prevPosts } = prevProps;
        // const { posts, categories, orderPosts } = this.props;

        // if(JSON.stringify(prevPosts) !== JSON.stringify(posts)) {
        //     // console.log('BEFORE ORDERING POSTS', Object.values(posts))
        //     const categoriesPaths = categories.map(category => category.path);
        //     orderPosts(categoriesPaths);
        // }
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
        const { categories } = this.props;

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
                                path={`/category/${category.path}`}
                                component={CategoryPage}
                            />
                        ))
                    }
                    <Route path='/post' exact component={PostPage} />
                </div>
            </Router>
        );
    }
}

const mapStateToProps = ({categories, posts}) => ({
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
