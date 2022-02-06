import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Read=(mohit)=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 card p-3 shadow bg-dark">
                        <h1 className="card-title text-center text-primary">{mohit.corp.org}</h1>
                        <div className="card-body">
                            <h2 className="card-text text-secondary text-center">{mohit.corp.services}</h2>
                            <h2 className="card-text text-center text-danger"> {mohit.corp.benchmark} </h2>
                            <h2 className="card-text text-success text-info text-center">{mohit.corp.employess}</h2>
                            <h2 className="card-text text-warning text-info text-center ">{mohit.corp.Location}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Read;