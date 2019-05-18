const styles = theme => (
    {
        root: {
            display: 'block',
            backgroundColor: theme.palette.background.paper,
            width: '90%',
            margin: '3vh 0 0 5%'
        },
        item: {
            width: '100%'
        },
        inline: {
            display: 'inline-flex',
            alignItems: 'baseline',
            width: '100%'
        },
        simpleSpacer: {
            margin: '0 0 0 1vw'
        },
        spacer: {
            margin: '0 0 0 1vw',
        },
        counter: {
            display: 'inline-flex',
            alignSelf: 'baseline',
            alignItems: 'center'
        },
        body: {
            maxWidth: '80%'
        },
    }
);

export default styles;