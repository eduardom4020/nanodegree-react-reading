import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ItemsListStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import img_not_available from '../../images/placeholder.png';

const IMAGES_PATH = '../../images';

const tileData = [
    {
      title: 'Breakfast',
      author: 'jill111',
      featured: true,
    },
    {
      
      title: 'Tasty burger',
      author: 'director90',
    },
    {
      
      title: 'Camera',
      author: 'Danson67',
    },
    {
      
      title: 'Morning',
      author: 'fancycrave1',
      featured: true,
    },
    {
      
      title: 'Hats',
      author: 'Hans',
    },
    {
      
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      
      title: 'Vegetables',
      author: 'jill111',
      cols: 2,
    },
    {
      
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      
      title: 'Mushrooms',
      author: 'PublicDomainPictures',
    },
    {
      
      title: 'Olive oil',
      author: 'congerdesign',
    },
    {
      
      title: 'Sea star',
      cols: 2,
      author: '821292',
    },
    {
      
      title: 'Bike',
      author: 'danfador',
    },
  ];  

const ItemsList = ({classes, gridList='gridList'}) => (
    <div className={classes.root}>
        <GridList className={`${classes[gridList]}`}>
            {
                tileData.map((tile, index) => (
                    <GridListTile 
                        key={`${tile.title}-${tile.author}-${index}`}
                        // className={Math.random() < .3 ? classes.tile : classes.sm_tile}
                        className={classes.sm_tile}
                    >   
                        <img src={img_not_available} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton>
                                <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))
            }
        </GridList>
    </div>
);

export default withStyles(styles)(ItemsList);