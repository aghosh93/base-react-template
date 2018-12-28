import React from 'react';
import LoadingImage from './common/LoadingImage.react';

function Loading() {
  const componentStyle = {
    textAlign: 'center',
  };

  return (
    <div style={componentStyle}>
      <LoadingImage width="5em" />
    </div>
  );
}

module.exports = Loading;
