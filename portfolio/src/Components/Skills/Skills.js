import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import csharp from './../../img/portfolio-images/C#.png'
import js from './../../img/portfolio-images/javascript.png'
import sql from './../../img/portfolio-images/sql2.jpeg'
import 'react-slideshow-image/dist/styles.css';


const slideImages = [
    csharp, js, sql
  ];


const listTitleStyle={fontWeight:900, color: '#9b1fe8', marginBottom:'4px'}

const backSkills=
<ul>
    <li>BACKEND</li>
    <li>C# - Java - SQL</li>
    
</ul>

const frontSkills=
<ul>
    <li>FRONTEND</li>
    <li>ReactJS- HTML - CSS</li>
    
</ul>

const otherSkills=
<ul>
    <li>OTHER</li>
    <li>Figma - AdobeXD - Postman</li>
</ul>

const totalSkills =[backSkills, frontSkills, otherSkills]

const Skills=()=> {
    return(
        <div className={classes.Skills} id="skills">
            <hr></hr>
            <PageHeader title={'What about the Skills?'}/>
            <p>
                I'm goal orientated and enjoy learning new stuff!
                Below are som prgramming languages, toolkits,
                frameworks and libraries that I worked with and like. 
                Some of them I have more experinece in than others. 
            </p>

            <div className={classes.Container}>
            <div className="slide-container">
       
      </div>
           
                {totalSkills.map(skills=>{
                    return(
                        <div className={classes.List}>
                            {skills}

                        </div>

                    )
                })}

            </div>

        </div>

    );

}
export default Skills;