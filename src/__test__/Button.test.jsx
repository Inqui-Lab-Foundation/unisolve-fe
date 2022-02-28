import {Button} from '../stories/Button';
import React from "react";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()})

describe('MyComponent',() =>{
    it('Should show text',() =>{
        const wrapper=shallow(<Button label="Button"/>);
        const text = wrapper.find('button');
        expect(text).toMatchSnapshot();
    });
})