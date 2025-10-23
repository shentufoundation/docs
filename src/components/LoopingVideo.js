import React from 'react';

export default function LoopingVideo({ src, width = '100%' }) {
    return (
      <video
        autoPlay
        playsInline
        loop
        muted
        src={src}
        width={width}
        style={{ maxWidth: '100%' }}
      >
        Your browser does not support the video tag.
      </video>
    );
  }