import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { InputWithMobileNoComp } from "../stories/InputWithMobileNo/InputWithMobileNo";

configure({ adapter: new Adapter() });

describe("MyComponent", () => {
  it("Should show text", () => {
    const wrapper = shallow(<InputWithMobileNoComp />);
    const text = wrapper.find("#searchPhnSelect");
    expect(text.length).toBe(1);
  });
});
