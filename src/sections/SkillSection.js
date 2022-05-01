import '../styles/styles.css'

import react from '../assets/imgs/react.png'
import html from '../assets/imgs/html.png'
import node from '../assets/imgs/node.png'
import css from '../assets/imgs/css.png'
import js from '../assets/imgs/js.png'
import git from '../assets/imgs/git.png'
import github from '../assets/imgs/github.png'


const SkillSection = () => {
    return(
        <>
            <section className="section skill-section"  data-aos="fade-up" id="#skillSection">
                <div className="skill-container">
                    <h4>SKILLS</h4>
                    <div className="row skill-tools g-0">
                        <div className="col col-3">
                            <img className="img-fluid" src={react} />
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={git} />
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={github} />
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={node} />
                        </div>
                    </div>

                    <div className="row skill-tools g-0">
                        <div className="col col-3">
                            <img className="img-fluid" src={html} />
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={css} />
                        </div>
                        <div className="col col-3">
                            <img className="img-fluid" src={js} />
                        </div>
                       
                    </div>
                </div> 

            </section>
        
        
        </>
    )


}


export default SkillSection