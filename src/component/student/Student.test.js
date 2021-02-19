import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Student from "./Student.jsx"

describe("Student component", () => {
    test("Student component render without crashing", () => {
      render(<Student />);
    });
    test("email inputfield present or not in add menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_DialogAdd = getByTestId("studentDialogAdd");
        expect(Student_DialogAdd).toBeInTheDocument();
      });
      test("password inputfield present or not in add menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_StudentID = getByTestId("StudentID");
        expect(Student_StudentID).toBeInTheDocument();
      });
      test("email inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_StudentName = getByTestId("StudentName");
        expect( Student_StudentName ).toBeInTheDocument();
      });
      test("password inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_StudentEmailId = getByTestId("StudentEmailId");
        expect(Student_StudentEmailId).toBeInTheDocument();
      });
      test("password inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_MobileNumber = getByTestId("StudentMobileNumber");
        expect(Student_MobileNumber).toBeInTheDocument();
      });
      test("password inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_DropDownMenu= getByTestId("StudentDropDownMenu");
        expect(Student_DropDownMenu).toBeInTheDocument();
      });
      test("password inputfield present or not in edit menu", () => {
        const { getByTestId } = render(<Student  />);
        const Student_MentorDropDownMenu = getByTestId("StudentMentorDropDownMenu");
        expect(Student_MentorDropDownMenu ).toBeInTheDocument();
      });
    });
