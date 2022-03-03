import React from "react";
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {DropDownComp} from '../stories/DropdownComp/DropdownComp';

configure({adapter: new Adapter()})

describe('MyComponent',() =>{
    it('Should show text',() =>{
        const wrapper=shallow(<DropDownComp />);
        const text = wrapper.find('option');
        expect(text).toMatchSnapshot();
    })
})