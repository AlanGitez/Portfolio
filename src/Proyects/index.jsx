import React from 'react'
import useIntersectionOberserver from '../hooks/useIntersectionOberserver'

import { proyects } from '../models/proyects'
import Proyect from './Proyect';

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

                                <Proyect key={i} proyect={item} />

                            ))
                            }
                        </div >
                    </>
                }
            </div >
        </>
    )
}
