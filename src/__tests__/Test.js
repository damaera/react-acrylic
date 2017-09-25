import React from 'react';

import { mount } from 'enzyme';
import { expect } from 'chai';

import Test from '../Test';

describe('<Test />', () => {
  it('should render children when condition is true', () => {
    const Children = <span>Hello</span>
    const wrapper = mount(
      <Test condition={true}>{Children}</Test>
    );
    expect(wrapper.contains(Children)).to.equal(true);
  });

  it('should not render children when condition is false', () => {
    const Children = <span>Hai</span>
    const wrapper = mount(
      <Test condition={false}>{Children}</Test>
    );
    expect(wrapper.contains(Children)).to.equal(false);
  });
});