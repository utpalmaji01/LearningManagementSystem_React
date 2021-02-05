import { render, fireEvent } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import Appbar from "./Appbar.jsx";

describe.skip("Appbar component", () => {
  test("Appbar component render without crashing", () => {
    render(<Appbar />);
  });
  test("NavBar Toggle Button present or not", () => {
    const { getByTestId } = render(<Appbar />);
    const navBar_toggle_button = getByTestId("navBarToggleButton");
    expect(navBar_toggle_button).toBeInTheDocument();
  });
  test("lms Logo present or not", () => {
    const { getByTestId } = render(<Appbar />);
    const lms_logo = getByTestId("lmsLogo");
    expect(lms_logo).toBeInTheDocument();
  });
  test("Show Profile Button present or not", () => {
    const { getByTestId } = render(<Appbar />);
    const show_profile = getByTestId("showProfile");
    expect(show_profile).toBeInTheDocument();
  });
  test("Show Profile Card present or not", () => {
    const { getByTestId } = render(<Appbar />);
    const show_profile = getByTestId("showProfile");
    fireEvent.click(show_profile);
    const show_profile_card = getByTestId("profileCard");
    expect(show_profile_card).toBeInTheDocument();
  });
  test("isProfileClicked state chainging or not", () => {
    const wrapper = shallow(<Appbar />);
    expect(wrapper.state("isProfileClicked")).toEqual(false);
    wrapper.find(".profile-icon-button").simulate("click");
    expect(wrapper.state("isProfileClicked")).toEqual(true);
  });
});
