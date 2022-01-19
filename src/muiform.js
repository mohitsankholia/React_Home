import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const MuiForm=()=>{
    const Input = styled('input')({
        display: 'none',
      });
      
    return(
        <>
            <div className="mt-3 container" >
                <h5 className="display-4 text-center text-info">Fill this New Form</h5>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        <div>
                        <TextField 
                            required
                            id="outlined-required"
                            label="First Name"
                            variant="filled"
                            defaultValue=""
                            helperText="First Name"
                         /> 

                        <TextField className="ms-3"
                            required
                            id="filled-required"
                            label="Last Name"
                            defaultValue=""
                            variant="filled" 
                            color="secondary" 
                        />
                        </div>

                        <FormControl className='row mt-3'>
                            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                required
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <div>
                        <TextField 
                            required
                            id="outlined-number"
                            label="Age"
                            type="number"
                        />
                        </div>
                        <TextField className="form-control row mt-3"
                            id="outlined-multiline-static"
                            label="Current Address"
                            multiline
                            rows={3}
                            defaultValue=""
                        />

                        <TextField className="row mt-3"
                                required
                                id="outlined-required"
                                label="Mobile Number"
                                type="number"
                                variant="filled"
                                
                        />

                        <TextField className=" row mt-3 ms-3"
                                required
                                id="outlined-required"
                                label="Email"
                                type="email"
                                variant="filled"
                                
                        />
                        <div className="text-center row mt-3">
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                            <Button variant="contained" component="span" endIcon={<AddAPhotoIcon />}>
                                Upload Image
                            </Button>
                        </label>
                        </div> 
                        
                        <div className="row mt-3"><FormControlLabel control={<Checkbox defaultunChecked />} label="Above details are correct" /></div>
                        
                        <div className="text-center">
                        <Button variant="contained" color="success">Submit</Button>
                        <Button className="ms-3" variant="contained" color="error">Cancle</Button>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}


export default MuiForm;