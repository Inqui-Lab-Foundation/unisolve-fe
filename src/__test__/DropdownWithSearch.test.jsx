import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DropDownWithSearch } from "../stories/DropdownWithSearch/DropdownWithSearch";

configure({ adapter: new Adapter() });

describe("MyComponent", () => {
  it("can change the value of the dropdown", () => {
    const wrapper = shallow(<DropDownWithSearch />);
    const text = wrapper.find("#searchSelect").simulate("change", {
      target: { value: "item1", selectedIndex: 1 },
    });
  });
});
