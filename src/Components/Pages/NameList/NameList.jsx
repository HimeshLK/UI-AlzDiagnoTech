import React, {useState} from "react";
import NameListItem from "./NameListItem";

//Importing assets
import NavBarLogo from '../../Assets/NavBarLogo.png';
import ImageOne from '../../Assets/ImageOne.png';
import ImageFour from '../../Assets/ImageFour.png';


//import styles 
import './nameList.css'

function NameList() {

//Storage For States #hook set
const [NameList,setNameList] = useState(
    [
        // person one
        {
        id : 1,
        name: {
            "title": "Miss",
            "first": "Jennie",
            "last": "Nichols"
        },
        location: {
            "city": "Billings",
        },
        email: "jennie.nichols@example.com",
        dob: {
            "date": "1992-03-08T15:13:16.688Z",
            "age": 30
        },
        picture: {
            "large": "https://randomuser.me/api/portraits/men/75.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },              
        },
     
        //person 2
        {
            id : 2,
            name: {
                "title": "Mr",
                "first": "Saman",
                "last": "Lenin"
            },
            location: {
                "city": "colombo",
            },
            email: "samanlenin@example.com",
            dob: {
                "date": "1992-05-20T15:13:16.688Z",
                "age": 30
            },
            picture: {
                "large": "https://randomuser.me/api/portraits/men/71.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
            },              
        },
        //person 3
        {
            id : 3,
            name: {
                "title": "Mrs",
                "first": "Kamala",
                "last": "Roy"
            },
            location: {
                "city": "Daka",
            },
            email: "kroy@example.com",
            dob: {
                "date": "1992-06-06T15:13:16.688Z",
                "age": 30
            },
            picture: {
                "large": "https://randomuser.me/api/portraits/men/73.jpg",
                "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
            },              
        },
    ]);


const NameListComponent = () => {
    return (
        NameList.map(aName => {
            return(
            <NameListItem
                key = {aName.id}
                name={`${aName.name.first} ${aName.name.last}`} 
                city = {aName.location.city}
                email = {aName.email}
                birthday = {aName.dob.date}
                avatar = {aName.picture.medium}
            />)
        })
    );
};

//UseEffectHook
// useEffect(()=> {
//     //Calling API for a random user 
//     fetch("https://randomuser.me/").then((response)=>{
//         return response.json();
//     }).then(responseData =>{
//         console.log(responseData.results[0]);
//     });
//     });


//checkButton --> UseStateHook To add New Users 
const addUserHandler = () => {
    console.log("Button Clicked");
    const newUser = {
        //Hardcoded New user
        id : new Date(),
            name: {
                "title": "Mr",
                "first": "Minura",
                "last": "Perera"
            },
            location: {
                "city": "Daka",
            },
            email: "kroy@example.com",
            dob: {
                "date": "1992-06-06T15:13:16.688Z",
                "age": 30
            },
            picture: {
                "medium": "https://randomuser.me/api/portraits/med/men/78.jpg",
            },
    };
    //setNameList((NameList) => NameList.concat(newUser));

    //Spread operator
    setNameList(NameList => ([...NameList, newUser]))
};
    
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
                    <img src={ImageFour} class="card-img" alt="Intro-Image" style={{ width: '500px', height: 'auto'}}/>
                    </div>
                    </div>
                </div>
            </div>
            {/* Image & Description 1- E */}

            <div className="Page-Two-Sec-One-Main"> 
                <div className="row">
                    <div className="col-md-6">
                    <div className="mb-2">
                        <h1>
                            <b>Registered <br/></b> Patients
                        </h1>
                    </div>
                    </div>

                    <div className="col-md-6">
                    <div className="mb-2">
                    <h3>
                            <b>Your one time Stop <br/> For All Your,<br/></b> Brain Scans..
                    </h3>
                    </div>
                    </div>
                </div>
            </div>

        {/* Page Topic Section Ends */}
    
    
        {/* Name List Section Starts */}
        <div className="container mt-5">
            
            <div className="Name-List-Section" >
                {/* Add User Button */}
                <button className="btn btn-primary mb-2" onClick={addUserHandler}>
                    Add Name
                </button>
                {/* Button Ends Here */}

                {/* List Starts Here */}
                <ul className="list-group list-group-flush shadow">
                    {NameListComponent()}
                </ul>
                {/* NameList Ends Here */}
            {/* Name List Section Starts */}
        </div>
        </div>
    </div>  
  );



}
export default NameList;