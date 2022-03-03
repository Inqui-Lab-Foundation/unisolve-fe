import React from "react";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {InputWithRadioComp} from "../stories/InputWithRadio/InputWithRadio";

configure({adapter: new Adapter()})

describe('MyComponent',() =>{
    it('Should show text',() =>{
        const wrapper=shallow(<InputWithRadioComp />);
        const text = wrapper.find('input');
        expect(text).toMatchSnapshot();
    })
})