import React from 'react';
import './mentorFormDialog.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const MentorDialog = (props) => {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title" className="addMentorDialog" >
      
      <div className="addMentor" >Add Mentor</div>
        <div className="fullDialog" >
        <DialogContent>
        <TextField
          label="Mentor ID"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Name"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="E-mail"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <TextField
          label="Phone"
          variant="outlined"
          margin="dense"
          fullWidth
        />
        <FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-age-native-simple"  >Course</InputLabel>
        <Select
          native
          size="small"
          id="demo-customized-select-native"
          onChange={handleChange}
          label="Course"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="fullStack">Full Stack Development</option>
          <option value="angular">Angular</option>
          <option value="react">React</option>
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} id="cancel" >
            Cancel
          </Button>
          <Button onClick={props.handleClose} id="addBtn" >
            ADD
          </Button>
        </DialogActions>
        </div>
    </Dialog>

  );
}
export default MentorDialog;