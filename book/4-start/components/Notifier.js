import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

let openSnackbarFn;

class Notifier extends React.Component {
  state = {
    open: false,
    message: '',
  };

  componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }

  handleSnackbarRequestClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };

  openSnackbar = ({ message }) => {
    this.setState({ open: true, message });
  };

  render() {
    const { open, message } = this.state;
    const messageN = (
      <span id="snackbar-message-id" dangerouslySetInnerHTML={{ __html: message }} />
    );

    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={messageN}
        autoHideDuration={5000}
        onClose={this.handleSnackbarRequestClose}
        open={open}
        ContentProps={{
          'aria-describedby': 'snackbar-message-id',
        }}
      />
    );
  }
}

function openSnackbar({ message }) {
  openSnackbarFn({ message });
}

export function notify(obj) {
  openSnackbar({ message: obj.message || obj.toString() });
}

export default Notifier;
