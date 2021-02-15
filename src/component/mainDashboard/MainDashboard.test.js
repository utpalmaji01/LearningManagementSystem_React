import { render, fireEvent } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import MainDashboard from "./MainDashboard.jsx";

describe("MainDashboard component", () => {
  test("MainDashboard component render without crashing", () => {
    shallow(<MainDashboard />);
  });
  test("main_dashboard_container_header exist or not", () => {
    const { getByTestId } = render(<MainDashboard />);
    const main_dashboard_container_header = getByTestId(
      "main-dashboard-container-header"
    );
    expect(main_dashboard_container_header).toBeInTheDocument();
  });
  test("main-dashboard-container-header text is same as expected or not", () => {
    const wrapper = shallow(<MainDashboard />);
    expect(wrapper.find('.main-dashboard-container-header').text()).toBe("DASHBOARD DETAILS");
  });
  // test("each-cource", () => {
  //   const wrapper = shallow(<MainDashboard />);
  //   expect(wrapper.find("div.each-cource").hasClass('each-cource')).toBeTruthy();
  // });
});
