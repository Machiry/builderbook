/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import Head from 'next/head';

import withLayout from '../lib/withLayout';

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index page</title>
      <meta name="description" content="Fuck this shit" />
    </Head>
    <p>Change this content</p>
    <p>Email: {user.email}</p>
  </div>
);

Index.getInitialProps = async ({ query }) => ({ user: query.user });

Index.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
};

Index.defaultProps = {
  user: null,
};

export default withLayout(Index);
