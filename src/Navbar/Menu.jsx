import React, { useEffect, useRef } from 'react'

export default function Menu({ isMouseLeave, aboutRef }) {
    const list = useRef();



    useEffect(() => {
        list.current &&
            list.current.childNodes.forEach(item => {
                item.classList.toggle("hover-out-animation")
            })
    }, [isMouseLeave]);

    return (
        <>
            <div className="menu">
                <nav>
                    <ul className='nav-list' ref={list}>
                        <a href="#about" className='item btn btn-about'><li><div></div></li></a>
                        <a href="#skills" className='item btn btn-skills'><li><div></div></li></a>
                        <a href="#proyects" className='item btn btn-proyects'><li><div></div></li></a>
                        <a href="#contact" className='item btn btn-contact'><li ><div></div></li></a>
                    </ul>
                </nav>
            </div>
        </>


    )
}
