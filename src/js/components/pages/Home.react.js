import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import variables from '../../../scss/main.scss';

const H1 = styled.h1`
  color: ${variables.fontColor};
`;

function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome to Base | Home</title>
      </Helmet>
      <H1>Welcome to the Base Form</H1>
    </Fragment>
  );
}

module.exports = Home;
