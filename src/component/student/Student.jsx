import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { StylesProvider } from "@material-ui/core/styles";
import "./student.scss";
import UploadIcon from "../../assets/student-upload-icon.png";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import axiosServices from "../../services/axios_service.js";
import adminServices from "../../services/admin_service.js";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];
const mentors = [
  {
    value: "USD",
    label: "mentor1",
  },
  {
    value: "EUR",
    label: "mentor2",
  },
  {
    value: "BTC",
    label: "mentor3",
  },
  {
    value: "JPY",
    label: "mentor4",
  },
];

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(
//   Student_ID,
//   Name,
//   Email_ID,
//   Mobile_No,
//   Course,
//   Mentor,
//   Current_score
// ) {
//   return {
//     Student_ID,
//     Name,
//     Email_ID,
//     Mobile_No,
//     Course,
//     Mentor,
//     Current_score,
//   };
// }

// const rows = [
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
//   createData(
//     "id17354",
//     "Abhds sdddaa",
//     "kkkasdk@gmail.com ",
//     12213546667,
//     "courceABCD",
//     "mentor1",
//     "4.5/5"
//   ),
// ];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
      menu1: "Java Full Stack",
      menu2: "Mentor1",
      openUploadDialog: false,
      allStudentData: null,
    };
  }
  componentDidMount(){
    adminServices
      .fetchAllStudents()
      .then((responce) => {
        console.log(responce);
        this.setState({
          allStudentData: responce.data,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleChangemenu1 = (event) => {
    this.setState({ menu1: event.target.value });
  };
  handleChangemenu2 = (event) => {
    this.setState({ menu2: event.target.value });
  };
  handleClickOpen = () => {
    this.setState({
      openDialog: true,
    });
  };
  handleClose = () => {
    this.setState({
      openDialog: false,
    });
  };
  handleClickOpenUpload = () => {
    this.setState({
      openUploadDialog: true,
    });
  };
  handleCloseUpload = () => {
    this.setState({
      openUploadDialog: false,
    });
  };
  render() {
    return (
      
      <div className="student-outer-container">
        <StylesProvider>
          <Dialog
            open={this.state.openDialog}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            data-testid="studentDialogAdd"
          >
            <div className="box-top-header">Add Student</div>
            <div className="box-content">
              {" "}
              <form noValidate autoComplete="off">
                <div className="text-fields-student">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Student id"
                    variant="outlined"
                    size="small"
                    data-testid="StudentID"
                  />
                </div>

                <div className="text-fields-student">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    size="small"
                    data-testid="StudentName"
                  />
                </div>
                <div className="text-fields-student">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Email id"
                    variant="outlined"
                    size="small"
                    data-testid="StudentEmailId"
                  />
                </div>
                <div className="text-fields-student">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Mobile Number"
                    variant="outlined"
                    size="small"
                    data-testid="StudentMobileNumber"
                  />
                </div>
                <div className="text-fields-student">
                  {" "}
                  <TextField
                    fullWidth
                    id="outlined-select-currency-native"
                    select
                    label="Course"
                    value={this.state.menu1}
                    size="small"
                    onChange={(e) => this.handleChangemenu1(e)}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    data-testid="StudentCourseDropDownMenu"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                    
                  </TextField>
                </div>
                <div className="text-fields-student">
                  {" "}
                  <TextField
                    fullWidth
                    id="outlined-select-currency-native"
                    select
                    label="Mentor"
                    value={this.state.menu2}
                    size="small"
                    onChange={(e) => this.handleChangemenu2(e)}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                    data-testid="StudentMentorDropDownMenu"
                  >
                    {mentors.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </div>
                <div className="student-buttton-container">
                  <div
                    className="student-form-cancel-button"
                    onClick={this.handleClose}
                  >
                    Cancel
                  </div>
                  <div className="student-form-add-button">Add</div>
                </div>
              </form>
            </div>
          </Dialog>
          <Dialog
            open={this.state.openUploadDialog}
            onClose={this.handleCloseUpload}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="outer-box-upload">
              <div className="upload-header-container">
                <div className="upload-box-header">Upload Engineers Data</div>
                <CloseIcon
                  onClick={this.handleCloseUpload}
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="inner-upload-container">
                <div>
                  <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                </div>
                <div>
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      <CloudUploadIcon />
                      Upload
                    </Button>
                  </label>
                </div>
              </div>
            </div>
          </Dialog>
          <div className="header-student">
            <div className="header-student-text">Student Details</div>
            <div className="student-upload-button-container">
              <div
                className="icon-image-container"
                onClick={this.handleClickOpenUpload}
              >
                <img className="icon-image" src={UploadIcon} alt="" />
              </div>
              <div
                className="add-student-button"
                onClick={this.handleClickOpen}
              >
                Add Student
              </div>
            </div>
          </div>
          <div className='table-main'>
            <TableContainer component={Paper}>
              <Table className="njn" aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Student ID</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Email ID</StyledTableCell>
                    <StyledTableCell align="right">Mobile No.</StyledTableCell>
                    <StyledTableCell align="right">Course</StyledTableCell>
                    <StyledTableCell align="right">Mentor</StyledTableCell>
                    <StyledTableCell align="right">
                      Current Score
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.allStudentData &&
                    this.state.allStudentData .map((row) => (
                      <StyledTableRow key={row.sId}>
                        <StyledTableCell component="th" scope="row">
                          {row.sId}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.sName}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.mobileNo}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                        {row.assignCourcesId}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {row.assignMentorsId}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          4.5
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </StylesProvider>
      </div>
    );
  }
}

export default Student;
