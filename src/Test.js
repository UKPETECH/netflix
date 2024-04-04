import { FaHome } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";




function Test() {
    return(
        <div>
            <FaHome size={70} color="red"/> 
            <h1 className="text-danger bg-success">this is my home </h1>
            
        <h2> this is a test component </h2>
        <IoCarSportOutline size={70} color="brown" />
        
        </div>
         
      
    )
}


export default Test