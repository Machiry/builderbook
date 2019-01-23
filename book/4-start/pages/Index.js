import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
export class Index extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      displayName: PropTypes.string,
      email: PropTypes.string.isRequired,
    }),
  };
  static defaultProps = {
    user: null,
  };
  render() {
    const { user } = this.props;
    return (<div style={{ padding: '10px 45px' }}>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="List of purchased books." />
      </Head>
      <p>List of purchased books</p>
      <p>Email: {user.email}</p>
    </div>);
  }
}
