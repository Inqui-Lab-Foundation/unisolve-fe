import React from "react";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from "../TryoutTestCase";

configure({adapter: new Adapter()})

describe('MyComponent',() =>{
    it('Should show text',() =>{
        const wrapper=shallow(<MyComponent />);
        const text = wrapper.find('div div');
        expect(text.text()).toBe('Text goes here');
    })

    it('Should hide text when button is clicked',() =>{
        const wrapper = shallow (<MyComponent />);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div div');
        expect(text.length).toBe(0);
    })
})