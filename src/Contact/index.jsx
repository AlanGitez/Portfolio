import React from 'react'


export default function Contact() {
    return (
        <>
            <div id='contact'>
                <div className='links'>
                    <a href="#contact" className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        benitez.alanez@gmail.com
                    </a><a href="#contact" className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        WhatsApp
                    </a><a href="https://drive.google.com/file/d/1y3QpUAIZHIeJxweexFj2ZVTUd6vrLX_C/view?usp=sharing" className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        Mi CV
                    </a>
                </div>

                <div className="social-networks">
                    <h2>Social networks</h2>
                    <div className="icons">
                        <a href="https://www.linkedin.com/in/benitez-alan/" target={"_blank"}>
                            <img src={require("../images/networks/linkedin.png")} alt="Linkedin" className="logo" />
                        </a>

                        <a href="https://github.com/AlanGitez" target={"_blank"}>
                            <img src={require("../images/networks/github.png")} alt="Github" className="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
