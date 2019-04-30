import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RootPage, PostPage, CategoryPage } from './Pages';
import {
    getAllCategories
} from '../providers/categories-provider';

const origin = 'http://localhost:3001';

class App extends Component {
    async componentDidMount() {
        const categories = await Promise.resolve(getAllCategories({origin}));
        console.log('ON MOUNTING APP', categories);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path='/' exact component={RootPage} />
                    <Route path='/category' exact component={CategoryPage} />
                    <Route path='/post' exact component={PostPage} />
                </div>
            </Router>
        );
    }
}

export default App;
