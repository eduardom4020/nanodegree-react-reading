import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ItemsListStyles';
import GridList from '@material-ui/core/GridList';
import SimplePostTile from './SimplePostTile';

const ItemsList = ({classes, data, gridList='gridList'}) => (
    <div className={classes.root}>
        <GridList className={`${classes[gridList]}`}>
            {
                data.map(tile => (
                    <SimplePostTile 
                        key={`item-on-list-${tile.id}-${tile.title}`}
                        {...tile} 
                    />
                ))
            }
        </GridList>
    </div>
);

export default withStyles(styles)(ItemsList);