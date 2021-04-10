import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">  
                <h1 style={{color:'#3a4256'}}>Your New Smile <br/>Starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eos provident reprehenderit maxime debitis optio quis!</p>
                <button style={{backgroundColor:'#1cc7c1', color:'white'}} className="btn ">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;