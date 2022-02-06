import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Edit=(kalpana)=>{

    const[data,setDate]=useState(
        {
            "org":kalpana.corp.org,
            "Location":kalpana.corp.Location,
            "employess":kalpana.corp.employess,
            "basic":kalpana.corp.basic,
            "services":kalpana.corp.services,
            "benchmark":kalpana.corp.benchmark
        }
    )

    const perform=(eve)=>{
        // extraction
        const{name,value}=eve.target;
        setDate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const adding=()=>{
        alert(JSON.stringify(data));
    }

      
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
                            label="organization name"
                            onChange={perform}
                            name="org"
                            value={data.org}
                            
                         /> 

                        <TextField className="ms-3"
                            required
                            id="filled-required"
                            label="locations"
                            onChange={perform}
                            name="Location"
                            value={data.Location}
                            
                        />
                        </div>

                        <div>
                        <TextField 
                            required
                            id="outlined-number"
                            label="employees"
                            onChange={perform}
                            name="employess"
                            value={data.employess}
                        />
                        </div>
                        
                        <div>
                        <TextField 
                            required
                            id="outlined-number"
                            label="basic"
                            onChange={perform}
                            name="basic"
                            value={data.basic}
                        />
                        </div>
                        <TextField className="row mt-3"
                            required
                            id="outlined-required"
                            label="services"
                            onChange={perform}
                            name="services"
                            value={data.services}
                        />

                        <TextField 
                            required
                            id="outlined-required"
                            label="benchmarks"
                            onChange={perform}
                            name="benchmark"
                            value={data.benchmark}
                         /> 

                        <div className="text-center">
                            <Button variant="contained" color="success" onClick={adding}>Submit</Button>
                            <Button className="ms-3" variant="contained" color="error">Cancle</Button>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}


export default Edit;