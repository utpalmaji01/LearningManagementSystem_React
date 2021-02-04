import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import Appbar from "./Appbar.jsx";

describe("Appbar", () => {
  test("Appbar renders without crashing", () => {
    shallow(<Appbar />);
  });
});
