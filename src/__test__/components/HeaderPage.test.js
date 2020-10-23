import React from 'react';
import { mount } from 'enzyme';
import HeaderPage from '../../components/HeaderPage';

describe('<HeaderPage />', () => {
  test('Snapshot', () => {
    const header = mount(<HeaderPage />);
    expect(header.length).toEqual(1)
  })
});