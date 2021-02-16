import React from 'react';
import { shallow } from 'enzyme';
import MentorDialog from './MentorDialog.jsx';


describe('<MentorDialog />', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(
    <MentorDialog
    />
  ));

  it('Button should be defined', () => {
    expect(Button).toBeDefined();
  });
  it('should render correctly', () => {
    const tree = shallow(
      <Button id="cancel" />
    );
    expect(tree).toMatchSnapshot();
  });


  it('should show correct text', () => {
    const wrapper = shallow(<MentorDialog />);
    expect(wrapper.text().includes("Add Mentor")).toBe(true);
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MentorDialog />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});