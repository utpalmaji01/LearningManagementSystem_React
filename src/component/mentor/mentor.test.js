import React from 'react'; 
import {shallow} from 'enzyme';
import Mentor from './Mentor.jsx';
import Appbar from "../appBar/Appbar.jsx"; 
import lms from "../../assets/image/lms.png";

describe("<Appbar />", () => {
    it("renders an image", () => {
        const lms = shallow(<Appbar />);

        expect(logo.find("img").prop("src")).toEqual(logoImage);

     });
 });

 describe('<Mentor />', () => {

    let wrapper;
    beforeEach(() => wrapper = shallow(
        <Mentor
            allMentors={[]}
        />
    ));

    it('Button should be defined', () => {
      expect(Mentor.Button).toBeDefined();
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
    wrapper.setProps({ allMentors : [] });
    expect(wrapper.state('color')).toEqual('transparent');
 });

});