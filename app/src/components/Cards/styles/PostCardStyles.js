const styles = theme => ({
    card: {
      width: '90%',
      margin: '2vh 0 0 5%'
    },
    media: {
      height: 0,
      maxHeight: '10%',
      paddingTop: '15%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    enterIcon: {
        fontSize: '2.3em !important',
        color: '#dbdbdb'
    },
    body: {
        display: 'inline-flex',
        alignItems: 'baseline'
    }
});

export default styles;