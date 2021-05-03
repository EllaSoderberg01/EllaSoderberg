import React from 'react'
import boilerscan from './../../img/portfolio-images/boilerscan.png'
import spsm from './../../img/portfolio-images/SPSM.png'
import ar from './../../img/portfolio-images/arthron.png'
import classes from './work.module.css'
import PageHeader from './../PageHeader/PageHeader'

const Work=()=>{
    return (
        
        <div class={classes.work} id="work">
            <hr></hr>
            <PageHeader title={'My work'}/>
            <p>Below you can see what I have been working on recently! </p>
        <div class={classes.main}>
        
        <div class={classes.right}>
        
        
        <div class={classes.row}>
            <div class={classes.column}>
              <div class={classes.content}>
                <a href="https://boilerscan.com/"><img src={boilerscan} alt="Mountains" class={classes.img}/></a>
                <h3>Boilerscan's database</h3>
                <p>I and two other students helped a company build a database with log in functionality that stores information about the users
                    and helps the company to distrubute different files for the cutomers. 
                </p>
              </div>
            </div>
            <div class={classes.column}>
              <div class={classes.content}>
              <img src={spsm} alt="Lights" class={classes.img}/>
                <h3>SPSM wireframes</h3>
                <p>In co-operation with SPSM, Specialpedagogiska Myndigheten, we designed wireframes for their new web service.</p>
              </div>
            </div>
            <div class={classes.column}>
            <div class={classes.content}>
              <img src={ar} alt="Mountains" class={classes.img}/>
              <h3>Arthron</h3>
              <p>Together with 4 other students I worked with a company called Livsmedicin were our task was to come up with a concept regarding 
                  how to use AR as a training tool for preventing artros.
              </p>
            </div>
          </div>
        
          </div>
        
        

        
        
        
        
        </div>
        
        
        </div>
        </div>

    );
}

export default Work;
