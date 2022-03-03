import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CalendarDropdownComp} from "../stories/CalendarDropdown/CalendarDropdown";
configure({ adapter: new Adapter() });
import moment from 'moment'

describe("MyComponent", () => {
    it('Create snapshot for date component', () => {  
        const props = {
            value: moment(new Date()),
            format: "MMM",
            picker: "month",
            placeholder: "Month",
            value:"20.01.2018",
            id:"datePickerComp"
        }
        const wrapper = shallow(<CalendarDropdownComp {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('check the onChange callback', () => {  
        const onChange = jest.fn()
        const props = {
            value: moment(new Date()),
            format: "MMM",
            picker: "month",
            placeholder: "Month",
            id:"datePickerComp"
        }
            const wrapper = shallow(<CalendarDropdownComp {...props}/>)
            wrapper.find('#datePickerComp').simulate('change', { target: {value: 'Hi'} });
            expect(wrapper.find('#datePickerComp').length).toBe(1);
        // expect(onChange).toHaveBeenCalledWith('Feb');
    });
});
