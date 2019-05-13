const styles = theme => {
    const voteIconBaseLight = {
        color: 'white',
        fontSize: '.8em !important',
        transition: theme.transitions.create(
            ['color'],
            { duration: theme.transitions.duration.complex }
        )
    };

    const voteIconBaseDark = {
        color: '#00000060',
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
        likeLight: {
            ...voteIconBaseLight,
            '&:hover': {
                color: '#7cffa3'
            }
        },
        unlikeLight: {
            ...voteIconBaseLight,
            '&:hover': {
                color: '#ff4f4f'
            }
        },
        likeDark: {
            ...voteIconBaseDark,
            '&:hover': {
                color: '#7cffa3'
            }
        },
        unlikeDark: {
            ...voteIconBaseDark,
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