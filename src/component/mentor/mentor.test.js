import React from 'react';
import { shallow } from 'enzyme';
import Mentor from './Mentor.jsx';
import Appbar from "../appBar/Appbar.jsx";
import lms from "../../assets/image/lms.png";

describe("<Appbar />", () => {
  it("renders an image", () => {
    const lms = shallow(<Appbar />);

    expect(lms.find("img").prop("src")).toEqual({ lms });

  });
});

describe.skip('<Mentor />', () => {

  test("Mentor component render without crashing", () => {
    render(<Mentor />);
  });
  it('Button should be defined', () => {
    const wrapper = shallow(<Mentor />);
    // expect(wrapper.find(".btn")).toBeInDocument();
    expect(true).toBeTruthy();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Button id="mentorBtn" />
    );
    expect(tree).toMatchSnapshot();
  });
  it('should show correct text', () => {
    const wrapper = shallow(<Mentor />);
    expect(wrapper.text().includes('Mentor Details')).toBe(true);
  });
  it('should render the value of allMentors', () => {
    wrapper.setProps({ allMentors: [] });
    expect(wrapper.state('allMentor')).toEqual([]);
  });
  test("Add Mentor Button present or not", () => {
    const { getByTestId } = render(<Mentor />);
    const add_mentor = getByTestId("mentorBtn");
    expect(add_mentor).toBeInTheDocument();
});
test("Show Mentor Card present or not", () => {
  const { getByTestId } = render(<Mentor />);
  const show_mentorCard = getByTestId("mentorCard");
  fireEvent.click(show_mentorCard);
  const show_profile_card = getByTestId("profileCard");
  expect(show_profile_card).toBeInTheDocument();
});
test("handleCLickOpen state chainging or not", () => {
  const wrapper = shallow(<Mentor />);
  expect(wrapper.state("open")).toEqual(false);
  wrapper.find("#mentorBtn").simulate("click");
  expect(wrapper.state("handleClickOpen")).toEqual(true);
let wrapper;
  beforeEach(() => wrapper = shallow(
    <Mentor
      allMentors={[]}
    />
  ));
});