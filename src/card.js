import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  return (
    <>
      <div className="col-lg-4">
     <div className="card mb-5 mb-lg-0">
         <div className="card-body">
         <h5 class="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
         <h6 className="card-price text-center"><span className="fs-1">${props.data.price}</span><span className="period">/month</span></h6> 
         <hr/>
         <ul className="fa-ul">
             {
    props.data.features.map((item) =>{
       return (
        item.isEnabled? <li><FontAwesomeIcon icon={faCheck}/>{item.name}</li>:<li class="text-muted"> <FontAwesomeIcon icon={faXmark} /> {item.name} </li> 
      
           ) })
   }
 </ul>
 
 <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase rounded-pill">Button</a>
          </div>
         </div>
     </div>
 </div>
    </>
  );
}

export default Card;
