import React from 'react';
import LoadingImage from './common/LoadingImage.react';

function Loading() {
  const componentStyle = {
    'text-align': 'center',
  };

  return (
    <div style={componentStyle}>
      <LoadingImage width="3em" />
    </div>
  );
}

module.exports = Loading;
