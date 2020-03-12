import React, { useState } from 'react';
import { shallow } from 'enzyme';

import { findByAttr } from '../../utils/testUtils';

import ButtonCmp from './ButtonCmp';

const setup = (props = {}) => {
  return shallow(<ButtonCmp {...props} />);
};

test('component-button renders without errors', () => {
  const wrapper = setup();
  const btnCmp = findByAttr(wrapper, 'component-button');
  expect(btnCmp.length).toBe(1);
});

test('component-button should render button with `text` which passed through props', () => {
  const text = '+23';
  const wrapper = setup({ text });
  const btnCmp = findByAttr(wrapper, 'component-button');
  expect(btnCmp.text()).toBe(text);
});

test('component-button should invoke function onClick passed through props', () => {
  const onClickMock = jest.fn();
  const wrapper = setup({ text, onClick: onClickMock });
  const btnCmp = findByAttr(wrapper, 'component-button');
  btnCmp.simulate('click');
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
