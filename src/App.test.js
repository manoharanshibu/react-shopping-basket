import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

describe('renders home page elements', () => {
  it('renders checkout button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.button').text()).toBe('Checkout');
  })
});
