import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow, mount } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { reducers } from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);

configure({ adapter: new ReactSixteenAdapter() });


describe('renders home page elements', () => {

  const wrapper = shallow(<App />);
  const mountComp = mount(<Provider store={store} ><App /></Provider>);
  
  it('renders checkout button', () => {
    
    expect(mountComp.find('.button').text()).toBe('Check Out >');

  });

  it('renders link button', () => {

    expect(mountComp.find('.summary-box').find('.link').text()).toBe('Clear');

  });


  //TODO: Test items, quantity - remove items, add items

});
