import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RootPage, PostPage, CategoryPage } from './Pages';
import {
    getAllCategories,
    getPostsByCatagory
} from '../providers/categories-provider';

const origin = 'http://localhost:3001';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: null
        };
    }

    async componentDidMount() {
        const { categories } = await Promise.resolve(getAllCategories({origin}));
        const posts = await Promise.all(categories.map(category => (
            getPostsByCatagory({origin, category: category.path})
        )));
        console.log('ON MOUNTING APP', categories, posts);

        this.setState({
            categories
        })
    }

    render() {
        const { categories } = this.state;

        return (
            <Router>
                <div>
                    <Route path='/' exact component={RootPage} />
                    {
                        categories &&
                        categories.map(category => (
                            <Route 
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

export default App;
