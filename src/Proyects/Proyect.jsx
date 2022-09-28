import React, { useRef } from 'react'


export default function Proyect({ proyect }) {
    const proyectRef = useRef();

    const showInfo = () => {
        console.log("hiciste clik");
        proyectRef.current.classList.toggle("show-info")
    }
    return (
        <>
            <div className='proyect' ref={proyectRef}>
                <img
                    src={require(`../${proyect.image}`)}
                    alt="proyect image"
                    onClick={showInfo} />

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam consequuntur sequi quod eius error mollitia sunt tempore corporis ipsum repudiandae voluptatum ad distinctio veniam quaerat porro, illum nam quas ullam.</p>

                <div className="links">
                    <a href={proyect.github} className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        Github
                    </a>
                    <a href={proyect.deploy} className='btn-neon' target={"_blank"}>
                        <span className="span1"></span>
                        <span className="span2"></span>
                        <span className="span3"></span>
                        <span className="span4"></span>
                        Deploy
                    </a>
                </div>

            </div>
        </>
    )
}
