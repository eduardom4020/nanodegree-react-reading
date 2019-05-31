import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const getTab = level => {
    const pathnameTokens = window.location.pathname.split('/');
    return pathnameTokens[level];
}

const getAvailablePosts = posts => (
    Object.values(posts).filter(post => getTab(1) === '' || post.category === getTab(1))
)

const ToolBar = ({
    pageTitle,
    categories, 
    posts
}) => (
    <AppBar position='fixed'>
        <Toolbar variant="dense" style={{display: 'flex'}}>
            <Typography variant="h6" color="inherit" style={{flex: 1}}>
                {pageTitle}
            </Typography>
            <Tabs value={getTab(1)} style={{flex: 3}}>
                {
                    [{path: '', name: 'Main'}, ...categories].map(category => (
                        <Tab 
                            value={category.path} 
                            label={category.name}
                            component={Link} 
                            to={`/${category.path}`}
                        />
                    ))
                }
            </Tabs>
        </Toolbar>
        {
            getAvailablePosts(posts).length > 0 && (
                <Tabs 
                    value={getTab(2)} 
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    {
                        getAvailablePosts(posts).map(post => (
                            <Tab 
                                value={post.id} 
                                label={post.title}
                                component={Link} 
                                to={`/${post.category}/${post.id}`}
                            />
                        ))
                    }
                </Tabs>
            )
        }
    </AppBar>
)

export default ToolBar;