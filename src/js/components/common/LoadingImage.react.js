import React from 'react';

import loading from '../../../img/loading.gif';

function LoadingImage(props) {
  const { width } = props;
  const imgStyle = {
    width,
  };

  return (
    <img alt="Loading..." src={loading} style={imgStyle} />
  );
}

module.exports = LoadingImage;
