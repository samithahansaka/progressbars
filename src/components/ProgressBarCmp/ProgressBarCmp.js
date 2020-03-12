import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBarCmp.scss';

export default function ProgressBarCmp({ progress, exceeded }) {
  return (
    <div>
      <ProgressBar
        data-test="component-progress"
        className={exceeded ? 'redProgress ' : ''}
        now={progress}
        label={`${progress}%`}
      />
    </div>
  );
}
