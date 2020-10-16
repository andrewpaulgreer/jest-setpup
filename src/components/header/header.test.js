import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import {findByTestAtrr} from './../../../utils'
const setUp = (props={})=> {
    const component= shallow(<Header {...props}/>)
    return component
}



describe("Header Component", () => {
// defining let component up here so it can be used beforeEach
let component;

//bfore each is ran before every single task
beforeEach(()=> {
    component = setUp()
})

  it("it should render without errors", () => {

    const wrapper = findByTestAtrr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it("it should render logo", () => {
    const logo = findByTestAtrr(component, 'logo');
    expect(logo.length).toBe(1);
  });
});
