import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ListLinearStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const tileData = [
    {
      img: '/static/images/grid-list/breakfast.jpg',
      title: 'Breakfast',
      author: 'jill111',
      cols: 2,
      featured: true,
    },
    {
      img: '/static/images/grid-list/burgers.jpg',
      title: 'Tasty burger',
      author: 'director90',
    },
    {
      img: '/static/images/grid-list/camera.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: '/static/images/grid-list/morning.jpg',
      title: 'Morning',
      author: 'fancycrave1',
      featured: true,
    },
    {
      img: '/static/images/grid-list/hats.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: '/static/images/grid-list/honey.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: '/static/images/grid-list/vegetables.jpg',
      title: 'Vegetables',
      author: 'jill111',
      cols: 2,
    },
    {
      img: '/static/images/grid-list/plant.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    },
    {
      img: '/static/images/grid-list/mushroom.jpg',
      title: 'Mushrooms',
      author: 'PublicDomainPictures',
    },
    {
      img: '/static/images/grid-list/olive.jpg',
      title: 'Olive oil',
      author: 'congerdesign',
    },
    {
      img: '/static/images/grid-list/star.jpg',
      title: 'Sea star',
      cols: 2,
      author: '821292',
    },
    {
      img: '/static/images/grid-list/bike.jpg',
      title: 'Bike',
      author: 'danfador',
    },
  ];  

const ListLinear = ({classes}) => (
    <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
            {
                tileData.map(tile => (
                    <GridListTile 
                        key={tile.img}
                        className={classes.tile}
                    >   
                        try {
                            <img src={tile.img} alt={tile.title} />
                        } catch(e) {
                            <img src={'/public/images/posts/image_not_available.jpg'} alt={tile.title} />
                        }
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

export default withStyles(styles)(ListLinear);