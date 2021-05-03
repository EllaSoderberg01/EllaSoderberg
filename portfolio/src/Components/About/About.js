import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/portfolio-images/Profilbild.JPG'
import ParticlesBg from 'particles-bg'
import Particles from 'react-particles-js';



const About=()=> {
    return(
        
        <div className={classes.About} id="about">
            <hr></hr>
          
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hi! I'm Ella Söderberg</h2>
                    <p>
                        Currently I am studying civil engineering in Interaction and Design at the University of Umeå.
                        I am passionete about product developing and UX design. I enjoy working in teams and see myself as a natural leader. 

                    </p>

                    <p>
                        In my sparetime I enjoy spending time with my family an friends. I also enjoy reading and take long walks in the woods. 

                    </p>
                    <p>
                    Look further down in my portofolio to see my skills and projects I have worked on.


                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="ME"></img>
                </div>
            </div>
        </div>
        

    );

}
export default About;