import { render, fireEvent } from "@testing-library/react";
import { shallow, mount } from "enzyme"; 
import LogIn from "./LogIn.jsx";

describe.skip("LogIn component", () => {
  test("LogIn component render without crashing", () => {
    render(<LogIn />);
  });
  test("email inputfield present or not", () => {
    const { getByTestId } = render(<LogIn />);
    const login_email = getByTestId("loginEmail");
    expect(login_email).toBeInTheDocument();
  });
  test("password inputfield present or not", () => {
    const { getByTestId } = render(<LogIn />);
    const login_password = getByTestId("loginPassword");
    expect(login_password).toBeInTheDocument();
  });
  test("password toggle eye present or not", () => {
    const { getByTestId } = render(<LogIn />);
    const toggle_password_eye = getByTestId("togglePasswordEye");
    expect(toggle_password_eye).toBeInTheDocument();
  });
  test("email state value should be empty", () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.state("email")).toEqual("");
  });
  test("email state value changing or not", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find({ name: "email" }).simulate("change", {
      target: { value: "utpalmaji.um@gmail.com" },
    });
    expect(wrapper.state("email")).toEqual("utpalmaji.um@gmail.com");
  });
  test("password state value should be empty", () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper.state("password")).toEqual("");
  });
  test("password state value changing or not", () => {
    const wrapper = shallow(<LogIn />);
    wrapper.find({ name: "password" }).simulate("change", {
      target: { value: "admin123" },
    });
    expect(wrapper.state("password")).toEqual("admin123");
  });
  // test("showPassword state value changing or not", () => {
  //   const wrapper = mount(<LogIn />);
  //   wrapper.find(".toggle-password-eye").simulate("click");
  //   expect(wrapper.state("showPassword")).toEqual(true);
  // });
});
