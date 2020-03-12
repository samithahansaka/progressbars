import React from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';

import DropDownCmp from './DropDownCmp';

const setup = (props = {}) => {
  return shallow(<DropDownCmp {...props} />);
};

test('component-dropdown renders without errors', () => {
  const wrapper = setup();
  const dropCmp = findByAttr(wrapper, 'component-dropdown');
  expect(dropCmp.length).toBe(1);
});

test('component-dropdown is invoked onChange function passed through props when option selected', () => {
  const mockOnChange = jest.fn();
  const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ];
  const wrapper = setup({ options, onChange: mockOnChange });
  const dropCmp = findByAttr(wrapper, 'component-dropdown');
  dropCmp.simulate('change', '', {
    target: { label: 'One', value: 'one' }
  });
  expect(mockOnChange).toHaveBeenCalledWith('', {
    target: { label: 'One', value: 'one' }
  });
});
