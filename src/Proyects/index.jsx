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
                        <ul className='list'>
                            {proyects.map((item, i) => (

                                <li>
                                    <div className="proyect" key={i}>
                                        <img src={require(`../${item.image}`)} alt="proyect image" />
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </>
                }
            </div>
        </>
    )
}
