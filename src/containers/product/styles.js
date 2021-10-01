import { lighten } from '@material-ui/core/styles';
const styles = (theme) => ({
  root: {
    width: '100%',
  },
  SearchField: {
    marginTop: '20px',
    width: '50%',
  },
  TextField: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  totalBar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  modal: {
    boxShadow: theme.shadows[5],
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemModal: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  header: {
    color: '#3f50b5',
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleModal: {
    color: '#3f50b5',
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 30,
  },
  content: {
    padding: theme.spacing(2),
  },

});
export default styles;
