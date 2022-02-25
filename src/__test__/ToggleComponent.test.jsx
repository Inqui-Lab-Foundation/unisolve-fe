import React from 'react';
import ReactDOM from 'react-dom';
import TestHook from '../ToggleComponent';
import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16'
import { shallow,configure } from 'enzyme';
// https://dzone.com/articles/unit-testing-in-reactjs-using-jest-and-enzyme;



configure({adapter: new Adapter()})

describe("ComponentName", () => {
  it("should render my component", () => {
    const wrapper = shallow(<TestHook />);
  });
});

it("should create an entry in component state", () => {
  // given
  const component = shallow(<TestHook />);
  const form = component.find('input');
  // when
  form.props().onChange({target: {
     name: 'myName',
     value: 'myValue'
  }});
  // then
  expect(component.state('input')).toBeDefined();
});

