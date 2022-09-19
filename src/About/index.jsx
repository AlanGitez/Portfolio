import React from 'react'
import useIntersectionOberserver from '../hooks/useIntersectionOberserver'

export default function About() {
    const [onView, ref] = useIntersectionOberserver({});
    return (
        <>
            <div className="container" id='about' ref={ref}>
                {onView && <div className="description">
                    <h2>Desde mis comienzos en la programacion, pase por varias tecnologias.</h2>
                    <h2>Empece con C# en Unity y luego me dirigi hacia el desarrollo web, donde me desempeño actualmente. </h2>
                    <h2>Descubri que lo apasionante no es ni el frontend ni el backend en particular,</h2>
                    <h2>si no la programacion en si, resolver problemas de forma logica e ingeniosa y creativa.</h2>
                </div>}
            </div>
        </>
    )
}
