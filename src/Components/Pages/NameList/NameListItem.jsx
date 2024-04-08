import React from "react";
import moment from "moment";


function NameListItem(props) {
    return(
            <li className="list-group-item"> 
                <div className="row align-items-center">
                    <div className="col-2">
                        <img src={props.avatar} alt={props.name} className="border rounded-circle shadow"/>
                    </div>
                
                <div className="col-10">
                    <h4>{props.name}</h4>
                    <p>{props.city} | {props.email}</p>
                    {/* Date Fromattings */}
                    {/* <p>Birthday : {new Intl.DateTimeFormat('en-BG').format(new Date(props.birthday))}</p> */}
                    <small>{moment(props.birthday).format(`DD-MM-YYYY`)}</small>
                </div>
            </div>
            </li> 
    );
   
}

export default NameListItem;