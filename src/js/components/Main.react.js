import React from 'react';

import Loading from './Loading.react';

const Content = React.lazy(() => import('./Content.react'));

require('../../scss/main.scss');

function Main() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<Loading />}>
        <Content />
      </React.Suspense>
    </React.Fragment>
  );
}

module.exports = Main;
