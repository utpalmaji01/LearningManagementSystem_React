import { render, fireEvent } from "@testing-library/react";
import { shallow, configure } from "enzyme";
import MainDashboard from "./MainDashboard.jsx";

describe.skip("MainDashboard component", () => {
  test("MainDashboard component render without crashing", () => {
    shallow(<MainDashboard />); 
  });
});