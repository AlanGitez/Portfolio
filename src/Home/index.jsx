import React from 'react'

export default function Home() {
    return (
        <>
            <div className="container" id='home'>

                {<div className="title">
                    <h1 className='left-in text-shadow'>¡Hola! </h1>
                    <h1 className='right-in text-shadow'>Soy <span className="neon" style={{ fontWeight: "400" }}>Alan Benitez</span></h1>
                    <h4 className='left-in text-shadow'>Full-Stack developer</h4>
                    <p className='neon'><span className='front'>Frontend</span> / <span className='back'>Backend</span></p>
                </div>}

                <div className='options'>

                    <a href="#contact" className='btn-neon'>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>Contactame!</a>
                    <a href="https://drive.google.com/file/d/1y3QpUAIZHIeJxweexFj2ZVTUd6vrLX_C/view?usp=sharing" className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>Mi CV</a>
                </div>
            </div>
        </>
    )
}
