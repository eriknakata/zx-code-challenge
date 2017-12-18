import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Product from '../components/Product';

configure({ adapter: new Adapter() });

describe('Product card testing', function () {

  const wrapper = shallow(<Product productName="Budweiser 350ml - Unidade" price="3,49" quantity="0" />);

  it('Test rendering', () => {
    expect(wrapper.find('.product-price').at(0).text()).toBe('R$ 3,49');
    expect(wrapper.find('.product-title').at(0).text()).toBe('Budweiser 350ml - Unidade');
  });

  it('should add a product and increment the quantity', function() {
    wrapper.find('.btn-plus').simulate('click');
    expect(wrapper.find('.product-quantity span').at(0).text()).toBe(1);
  });

  it('should keep the quantity 0', function() {
    wrapper.find('.btn-subtract').simulate('click');
    expect(wrapper.find('.product-quantity span').at(0).text()).toBe(0);
  });

});