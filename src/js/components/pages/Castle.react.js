import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import variables from '../../../scss/main.scss';

const H1 = styled.h1`
  color: ${variables.fontColor};
`;

function Castle() {
  return (
    <Fragment>
      <Helmet>
        <title>Welcome to Base | Castle</title>
      </Helmet>
      <H1>This is a Super Saiyan</H1>
    </Fragment>
  );
}

module.exports = Castle;
