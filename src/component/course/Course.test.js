import React from 'react';
import Course from "../Course.jsx";
import { render, fireEvent } from "@testing-library/react";

describe("Course component", () => {
    test("Course component render without crashing", () => {
      render(<Course />);
    });
    test("email inputfield present or not in add menu", () => {
        const { getByTestId } = render(<Course  />);
        const Course_IDAdd = getByTestId("courseIDAdd");
        expect(Course_IDAdd).toBeInTheDocument();
      });
      test("password inputfield present or not in add menu", () => {
        const { getByTestId } = render(<Course  />);
        const Course_NameAdd = getByTestId("courseNameAdd");
        expect(Course_NameAdd).toBeInTheDocument();
      });
      test("email inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Course  />);
        const Course_ID = getByTestId("courseID");
        expect(Course_ID).toBeInTheDocument();
      });
      test("password inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Course  />);
        const Course_Name = getByTestId("courseName");
        expect(Course_Name).toBeInTheDocument();
      });
    });