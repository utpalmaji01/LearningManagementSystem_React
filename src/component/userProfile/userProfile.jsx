import React from 'react';
import './userProfile.scss';
import proImg from '../../assets/image/proImg.png';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import Avatar from '@material-ui/core/Avatar';

const UserProfile = () => {
    return (
        <div className="userProfileContainer">
            <div className="profilePara">
                <p id="profileDetails">PROFILE DETAILS</p>
            </div>
            <div className="profileDisplay" >
                <div className="profileImage" >
                <Avatar alt="Remy Sharp" id="mPic" src={proImg} />
                </div>
                <div className="profileDetails" >
                    <p id="mName">Mentor Name</p>
                    <p id="mId" >Mentor Id</p>
                    <div id="mentorMail">
                        <MailIcon />
                    <p id="mMail">Mentor Mail</p>
                    </div>
                    <div id="mPh" >
                        <PhoneIcon />
                    <p id="mPhTxt" >Mentor Ph. No.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserProfile;