const styles = theme => (
    {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)'
        },
        wrappedList: {
            flexFlow: 'row wrap',
            margin: '6vh 0 0 8% !important'
        },
        sm_tile: {
            width: '20vw !important',
            height: '30vh !important',
            maxWidth: '20vw !important',
            maxHeight: '30vh !important',
            minWidth: '20vw !important',
            minHeight: '30vh !important',
            margin: '.4vh .1vw .4vh .1vw'
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
        },
        inline: {
            display: 'inline-flex',
            alignItems: 'center',
            width: '100%'
        },
    }
);

export default styles;