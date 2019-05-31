import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolBar from './ToolBar';

const ToolBarContainer = props => (
    <ToolBar {...props} />
);

const mapStateToProps = ({categories, posts}) => ({categories, posts});

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
        }, 
        dispatch
    )
);

export default connect(mapStateToProps, mapDispatchToProps)(ToolBarContainer);