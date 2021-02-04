import React , {useState , useEffect} from 'react';
import './mentor.scss';
import { Divider , IconButton , Card , Button , Menu,
    MenuItem, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import MentorDialog from '../MentorFormDialog/MentorDialog';
import axiosServices from "../../services/axios_service.js";
import adminServices from '../../services/admin_service.js';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const Mentor = (props) => {
    const [open, setOpen] = useState(false);
    const [ anchorEl , setAnchorEl ] = useState(null);
    const [ allMentors , setAllMentors ] = useState([]);

    useEffect(() => {
        getAllMentors();
      }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

    const getAllMentors = () => {
        axiosServices
          .getServices("http://localhost:3000/mentors")
          .then((responce) => {
            console.log(responce);
            setAllMentors(responce.data);
          })
          .catch((error) => {
            console.log(error);
          });
    }

    const handleClickOpenMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorEl(null);
    }
    const deleteMentor = (eachMentor) => {
      console.log(eachMentor.mId);
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
        <div className="mentorContainer" >
            <div id="firstPart" >
                <p id="mentorPara" >Mentor Details</p>
                <Button variant="contained" onClick={handleClickOpen} id="mentorBtn" color="primary">
                    Add Mentor
                 </Button>
            </div>
            <div id="cardContain">
                {allMentors.map((eachMentor)=> (
            <Card key={eachMentor.mID} className="eachMentorCard" variant="outlined">
                <div id="displayArea" >
                    <div id="imageArea" >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div id="nameArea" >
                        <p id="mentorName" >{eachMentor.mName}</p>
                        <p id="mentorId">{eachMentor.mID}</p>
                        <p id="mentorMail" >Mentor Mail</p>
                    </div>
                    <div className="openMenu">
                    <IconButton
                        aria-controls="cource-menu"
                        aria-haspopup="true"
                        onClick={handleClickOpenMenu}
                        className="cource-action-button" className="iconButtonMenu"
                      >
                        <MoreVertIcon fontSize="small" />
                      </IconButton>
                      <Menu
                        id="cource-menu"
                        elevation={0}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                      >
                        <MenuItem dense onClick={handleCloseMenu}>
                          Edit
                        </MenuItem>
                        <MenuItem dense onClick={deleteMentor(eachMentor)}>
                          Delete
                        </MenuItem>
                      </Menu>
                      </div>
                </div>
                {/* <div id="borderDiv" /> */}
                <Divider className="divide" />
                <div id="content" >
                    <p id="cName" >Course Name</p>
                    <p id="nStud" >No. of Students</p>
                </div>
                <div id="classContainer" >
                    <p id="course" >Java Full Stack</p>
                    <div id="studNumber">
                        <p id="studN" >25</p>
                    </div>
                </div>
            </Card>
            ))}
            </div>
        </div>
        <MentorDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </>
    )
}
export default Mentor;
