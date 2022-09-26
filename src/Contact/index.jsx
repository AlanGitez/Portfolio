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
                    </a><a href="#contact" className='btn-neon' target={"_blank"}>
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
                        <img src={require("../images/networks/linkedin.png")} alt="" className="logo" />
                        <img src={require("../images/networks/github.png")} alt="" className="logo" />
                    </div>
                </div>
            </div>
        </>
    )
}
