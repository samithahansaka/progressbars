import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function DropdownCmp({ options, onChange }) {
  return (
    <React.Fragment>
      <Dropdown
        data-test="component-dropdown"
        options={options}
        onChange={onChange}
        placeholder="Select"
      />
    </React.Fragment>
  );
}
