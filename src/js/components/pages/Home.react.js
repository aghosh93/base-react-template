import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

import Content from '../Content.react';

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome to Base | Home</title>
      </Helmet>
      <Content />
    </Fragment>
  );
}

module.exports = Home;
