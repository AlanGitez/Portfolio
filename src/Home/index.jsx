import React from 'react'

export default function Home() {
    return (
        <>
            <div className="home container" >
                {/* <div className='middle' style={{ height: "80%", width: "90%", border: "1px solid blue", backgroundColor: "black" }}> */}
                <div className="title">
                    <h1 className='left-in text-shadow'>¡Hola! </h1>
                    <h1 className='right-in text-shadow'>Soy <span className="neon" style={{ fontWeight: "400" }}>Alan Benitez</span></h1>
                    <h4 className='left-in text-shadow'>Full-Stack developer</h4>
                    <p className='neon'><span className='front'>Frontend</span> / <span className='back'>Backend</span></p>
                </div>
                {/* </div> */}


            </div>
        </>
    )
}
