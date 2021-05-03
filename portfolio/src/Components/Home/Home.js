import classes from './Home.module.css'
import code from './../../img/portfolio-images/coding.jpg'
const Home=()=> {
    return(
        <div className={classes.Home}>
            <div className={classes.Container} id="home">

                <h1 className={classes.Intro}>THE PORTFOLIO OF</h1>
                <h1 className={classes.Name}>ELLA SÖDERBERG</h1>
                <h1 className={classes.Intro}>STUDENT IN INTERAKTION AND DESIGN</h1>
            </div>
           
        </div>

    );

}
export default Home;
// <img className={classes.Code} src={code} alt="code"></img>