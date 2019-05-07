const styles = theme => (
    {
        root: {
            display: 'block',
            // overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            width: '80%',
            margin: '3vh 0 0 10%'
        },
        item: {
            width: '100%',
            alignItems: 'center'
        },
        inline: {
            display: 'inline-flex',
            alignItems: 'baseline'
        },
        spacer: {
            margin: '0 0 0 1vw'
        }
    }
);

export default styles;