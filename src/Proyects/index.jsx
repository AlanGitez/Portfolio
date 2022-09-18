import React, { useState } from 'react'
import { proyects } from '../models/proyects'

export default function Proyects() {
    return (
        <>
            <div className="proyects container">

                <h1 className="title">Proyectos</h1>

                <ul className='list'>
                    {proyects.map((item, i) => (

                        <li>
                            <div className="proyect" key={i}>
                                <img src={require(`../${item.image}`)} alt="proyect image" />
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </>
    )
}
