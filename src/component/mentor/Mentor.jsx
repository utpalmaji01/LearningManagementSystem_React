import React from 'react';
import './mentor.scss';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import MentorDialog from '../MentorFormDialog/MentorDialog';

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
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

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
            <Card className={classes.root} variant="outlined">
                <div id="displayArea" >
                    <div id="imageArea" >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </div>
                    <div id="nameArea" >
                        <p id="mentorName" >Mentor Name</p>
                        <p id="mentorId">Mentor Id</p>
                        <p id="mentorMail" >Mentor Mail</p>
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
            </div>
        </div>
        <MentorDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </>
    )
}
export default Mentor;
