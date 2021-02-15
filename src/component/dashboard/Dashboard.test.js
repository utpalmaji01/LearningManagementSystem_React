import { shallow } from "enzyme";
import Dashboard from "./Dashboard.jsx";

describe.skip("Dashboard component", () => {
  test("Dashboard component render without crashing", () => {
    shallow(<Dashboard />);
  });
  test("dashboard-header div present or not", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div.dashboard-header').length).toEqual(1);
  }); 
  test("dashboard-side-navbar div present or not", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div.dashboard-side-navbar').length).toEqual(1);
  }); 
  test("dashboard-details div present or not", () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find('div.dashboard-details').length).toEqual(1);
  }); 
});
