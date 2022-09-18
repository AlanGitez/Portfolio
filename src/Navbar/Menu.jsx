import React, { useEffect, useRef } from 'react'

export default function Menu({ isMouseLeave }) {
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
                        <li className='item btn btn-about'><div></div></li>
                        <li className='item btn btn-skills'><div></div></li>
                        <li className='item btn btn-proyects'><div></div></li>
                        <li className='item btn btn-contact'><div></div></li>
                    </ul>
                </nav>
            </div>
        </>


    )
}
