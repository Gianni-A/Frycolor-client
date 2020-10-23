import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Loader from '../../components/Loader';

describe('<Loader />', () => {
  test('Snapshot', () => {
    /*const loader = create(<Loader />);
    expect(loader.toJSON()).toMatchSnapshot();*/
  });

  test('Component Render', () => {
    const loader = mount(<Loader />);
    expect(loader.length).toEqual(1)
  });
});