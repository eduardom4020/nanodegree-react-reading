const styles = theme => {
    const voteIconBase = {
        color: 'white',
        fontSize: '.8em !important',
        transition: theme.transitions.create(
            ['color'],
            { duration: theme.transitions.duration.complex }
        )
    };

    return {
        root: {
            padding: '8px !important',
            verticalAlign: 'center',
            alignSelf: 'center'
        },
        like: {
            ...voteIconBase,
            '&:hover': {
                color: '#7cffa3'
            }
        },
        unlike: {
            ...voteIconBase,
            '&:hover': {
                color: '#ff4f4f'
            }
        },
        likeClicked: {
            color: '#7cffa3 !important'
        },
        unlikeClicked: {
            color: '#ff4f4f !important'
        },
    }
};

export default styles;