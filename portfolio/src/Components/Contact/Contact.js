import {FaInstagramSquare,FaLinkedin} from "react-icons/fa";
import classes from './Contact.module.css'

const handleURL=(url)=>{
    return event=>window.open(url,"_blank")
}

const Contact=()=> {
    return(
        <div className={classes.Contact} id="contact">
          
            <div className={classes.ContactIcons}>
            <FaInstagramSquare color='white' size='30px' style={{padding:'1%'}}
            onClick={handleURL('https://www.instagram.com/ellasoderberg/')}/>


            <FaLinkedin color='white' size='30px' style={{padding:'1%'}}
            onClick={handleURL('https://www.linkedin.com/in/ella-söderberg-960356141/')}/>
            </div>
          
        </div>

    );

}
export default Contact;