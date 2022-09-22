import React from 'react';
import { skills } from '../models/skills';
import useIntersectionObserver from "../hooks/useIntersectionOberserver"
export default function Skills() {

    const [onView, ref] = useIntersectionObserver({});

    return (
        <>
            <div className='container' id='skills' ref={ref}>
                {onView &&
                    <>
                        <h1 className="title neon">Skills</h1>
                        <div className="rotated">
                            <div className="skills-container">
                                {skills.map((item, i) => (
                                    item && item.url &&
                                    <div className="skill" key={i} style={item.styles()}>
                                        <img src={require(`../${item.url}`)} alt={`skill-${i}`} />
                                        <p>{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                }


            </div>
        </>
    )
}
