import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Categories from '../components/Categories'

configure({ adapter: new Adapter() });

describe('Categories component testing', function () {

    it('should call the parameter function when a category is selected', () => {

        const mockCallback = jest.fn();

        const wrapper = mount(<Categories onChange={mockCallback} />);
        // const input = wrapper.find('input');
        // const searchString = 'skol'
        // input.value = searchString;

        // input.simulate('keyDown', { key: 'Enter' })

        // expect(mockCallback.mock.calls.length).toBe(1);
    });
});