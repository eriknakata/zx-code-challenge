import React from 'react';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import SearchBox from '../components/SearchBox'

configure({ adapter: new Adapter() });

describe('SearchBox component testing', function () {

    it('should call the parameter function when press enter', () => {

        const mockCallback = jest.fn();

        const wrapper = mount(<SearchBox onKeyDown={mockCallback} />);
        const input = wrapper.find('input');
        const searchString = 'skol'
        input.value = searchString;

        input.simulate('keyDown', { key: 'Enter' })

        expect(mockCallback.mock.calls.length).toBe(1);
    });
});