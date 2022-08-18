/* eslint-disable no-undef */
// import {fireEvent, render, screen} from "@testing-library/react";
import renderer from 'react-test-renderer';
// import React from 'react';

// import InputWithSearchComp from "./InputWithSearch";
//https://stackoverflow.com/questions/41991077/testing-react-select-component


it('checkButtonRender' ,() => {
    const component = renderer.create(`<InputWithSearchComp />`);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

// describe('changeInput',() => {
//     it('onChange',() => {
//         const component = renderer.create(`<InputWithSearchComp />`)
//         let tree = component.toJSON();
//     fireEvent.change(component,{target:{value:"letscode"}})
//     expect(component.value).toBe('letscode')
//     })
// })