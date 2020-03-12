import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBarCmp.scss';

export default function ProgressBarCmp({ progress, exceeded }) {
  return (
    <React.Fragment>
      <ProgressBar
        className={exceeded ? 'redProgress ' : ''}
        now={progress}
        label={`${progress}%`}
      />
    </React.Fragment>
  );
}
