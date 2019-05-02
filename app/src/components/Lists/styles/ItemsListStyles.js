const styles = theme => (
    {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            // justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)'
        },
        sm_tile: {
            width: '20vw !important',
            height: '30vh !important',
            maxWidth: '20vw !important',
            maxHeight: '30vh !important',
            minWidth: '20vw !important',
            minHeight: '30vh !important'
        },
        tile_img: {
            '&:hover': {
                cursor: 'pointer'
            }
        },
        tile: {
            width: '40vw !important',
            height: '30vh !important'
        },
        h_tile: {
            width: '30vw !important',
            height: '45vh !important'
        },
        title: {
            color: 'white',
            fontSize: '.8em !important'
        },
        titleBar: {
            top: 0,
            background:
            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            '&:hover': {
                cursor: 'arrow'
            }
        },
        contentBar: {
            bottom: 0,
            background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            '&:hover': {
                cursor: 'arrow'
            }
        }
    }
);

export default styles;