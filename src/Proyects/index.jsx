import React from 'react'
import useIntersectionOberserver from '../hooks/useIntersectionOberserver'

import { proyects } from '../models/proyects'

export default function Proyects() {
    const [onView, ref] = useIntersectionOberserver({});

    return (
        <>
            <div className="container" id='proyects' ref={ref}>

                {onView &&
                    <>
                        <h1 className="title neon">Proyectos</h1>
                        <div className='list'>
                            {proyects.map((item, i) => (

                                <div className='proyect'>
                                    {/* <div className='proyect-img'> */}
                                    <img src={require(`../${item.image}`)} alt="proyect image" />
                                    {/* </div> */}
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam consequuntur sequi quod eius error mollitia sunt tempore corporis ipsum repudiandae voluptatum ad distinctio veniam quaerat porro, illum nam quas ullam.</p>

                                    <div className="links">
                                        <a href="#">Github</a>
                                        <a href="#">Deploy</a>
                                    </div>
                                    {/* <div className="menu">
                                        <button className="btn github">Github</button>
                                        <button className="btn deploy">Deploy</button>
                                    </div> */}
                                </div>

                            ))}
                        </div>
                    </>
                }
            </div>
        </>
    )
}
