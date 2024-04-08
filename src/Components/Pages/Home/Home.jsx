import React, { useState } from "react";
import './homeStyles.css'

//Importing assets
import NavBarLogo from '../../Assets/NavBarLogo.png';
import ImageOne from '../../Assets/ImageOne.png';
import ImageThree from '../../Assets/ImageThree.png';


function Home() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }

    return (
        <div>
            {/* Image & Description 1 - S*/}
            <div className="Page-One-Sec-One-Main"> 
                <div className="row">
                    <div className="col-md-6">
                    <div className="mb-2">
                        <div className="Img-des-one-logo">
                            <img src={NavBarLogo} alt="Logo Goes Here" style={{ width: '500px', height: 'auto' }}/>
                        </div>
                        <h1>
                            <b>The Hospital <br/> of The Future,<br/></b> Today...
                        </h1>
                    </div>
                    </div>

                    <div className="col-md-6">
                    <div className="mb-2">
                    <img src={ImageOne} class="card-img" alt="Intro-Image" style={{ width: 'auto', height: '510px' }}/>
                    </div>
                    </div>
                </div>
            </div>
            {/* Image & Description 1- E */}

    {/* Page Topic Section Ends */}
        {/* BrakerDiv
        <div className="BrakerDiv">
            <hr/>
        </div> */}

            {/* Image & Description 2 - S*/}
            <div className="Page-One-Sec-Two-Main"> 
                <div className="row">
                    
                <div className="col-md-4">
                    <div className="mb-2">
                    <img src={ImageThree} className="card-img" alt="Alz Analysing" style={{ width: 'auto', height: '300px', paddingLeft: '15%', paddingTop: '20px', paddingBottom:'20px', }}/>
                    </div>
                </div>

                <div className="col-md-8">
                    <div className="mb-2">
                        <div className="Img-des-one-logo">
                            <h3 className="Img-des-two-topic">Hello !!!</h3>
                            <p className="Img-des-two-text"> <b>Welcome to AlzDiagnoTech</b> , <br/>where cutting-edge MRI technology meets compassionate care. 
                            <br/>Our platform offers a seamless journey towards Alzheimer's awareness, <br/>
                            <b>providing personalized insights from brain scans</b> ,<br/>
                            Empower yourself with knowledge, <br/>as we guide you through the complexities of brain health, 
                            <br/>offering clarity and hope for the future</p>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Image & Description 2- E */}

        {/* Form-S */}
        
        {/* BrakerDiv */}
        <div className="BrakerDiv">
            <hr/>
        </div>

        <div className="Form-Content">
            <div className="container mt-4 shadow p-3 mb-5 bg-white rounded">
            <h3 className="Form-topic">Book Your Appoinment</h3>
                
                {/* Form Starts Here */}
                <form onSubmit={handleSubmit}>
                    <div class="form-group col-md-12 ">
                            <label for="inputUsername">Full Name</label>
                            <input type="text" name = "username" value={inputs.username || ""} onChange={handleChange} class="form-control" id="inputUsername" placeholder="David Warner"/>
                    </div>
                    
                    <div class="form-group col-md-12">
                        <label for="inputEmail">E-Mail</label>
                        <input type="email" name = "email" value={inputs.email || ""} onChange={handleChange} class="form-control" id="inputEmail" placeholder="someone@email.com"/>
                    </div>
                    
                    <div class="form-group col-md-12">
                        <label for="inputAddress2"> Date of Birth </label>
                        <input type="date" name = "dateOfBirth" value={inputs.dob|| ""} onChange={handleChange} class="form-control" id="inputDOB"/>
                    </div>
                    
                    <div className="form-group col-md-12">
                        <label for="inputCity">City</label>
                        <input type="text" name = "city" value={inputs.city || ""} onChange={handleChange} class="form-control" id="inputCity" placeholder="Colombo"/>
                    </div>
                    
                    <div className="form-group col-md-12">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                    
                </form>
                {/* Form Ends Here */}
            </div>
        </div>    
        {/* Form-E */}
    </div>
    );
}
export default Home;
