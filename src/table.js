import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import info,{getting} from "./list"
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import Create from "./createform"
import Edit from "./edit"
import Read from "./read"

const Table=()=>{
    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [eview,setEview]=useState(false)
    const [pos, setPos]=useState(0)
    
    const callCreate=()=>{
        setCview(true)
    }

    const [obj,setObj]=useState(
        {
            "org":"",
            "Location":"",
            "employess":"",
            "basic":"",
            "services":"",
            "benchmark":""
        }
    )

    return(
            <>
                {(cview)?
                <>
                    <Create/>
                    <div className="text-center mt-2">
                    <button className="btn btn-outline-dark" 
                    onClick={()=>setCview(false)}>
                        Back
                    </button>
                    </div>
                </>
                :
                (rview)?
                <>
                <Read corp={obj}/>
                <div className="text-center mt-2">
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
                </div>
                 </>
                :
                (eview)?
                <>
                <Edit corp={obj} order={pos}/>
                <div className="text-center mt-2">
                <button className="btn btn-outline-dark" 
                onClick={()=>setEview(false)}>
                    Back
                </button>
                </div>
                </>
                :
            <>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-dark bg-info">
                        <thead>
                            <tr>
                                <th>Name of the Corporate</th>
                                <th>Locations</th>
                                <th>Number of employees</th>
                                <th>Basic salary</th>
                                <th>Services</th>
                                <th>Benchmark's</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {info.map((data, index)=>(
                               <tr>
                                   <td onClick={
                                        ()=>{
                                            setRview(true)
                                            const tmp=getting(data.org)
                                            setObj(tmp)
                                        }}>
                                        {data.org}
                                    </td>
                                    <td>
                                        {data.Location.map((ele)=>(
                                        <p>{ele}</p>
                                        ))}</td>  
                                    <td>{data.employess}</td>
                                    <td>{data.basic}</td>
                                    <td>
                                        {data.services.map((ele)=>(
                                        <p>{ele}</p>
                                        ))}</td>
                                    <td>
                                        {data.benchmark.map((ele)=>(
                                        <p>{ele}</p>
                                        ))}</td>
                                    
                                    <td>
                                        <Button color="error" className="btn btn-outline-danger">
                                    
                                            <RemoveCircleIcon/>
                                        </Button>
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-warning"onClick={
                                            ()=>{
                                                setEview(true)
                                                const tmp=getting(data.org)
                                                setObj(tmp)
                                                setPos(index)
                                            }}>
                                            <EditIcon/>
                                        </button>
                                    </td>
                               </tr>
                           ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className =" text-center">
            <button className="btn btn-outline-success" onClick={callCreate}>
                Create
            </button> 
            </div>
        </>
        }
    </>

    );
}

export default Table;