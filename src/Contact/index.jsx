import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="form container">
                <form action="">
                    <div className="first-line">
                        <input type="text" id="name" placeholder='Name' />

                        <input type="email" id="email" placeholder='Email' />
                    </div>
                    <div className='subject'>
                        <input type="text" id="subject" placeholder='Subject' />
                    </div>
                    <div className="message">
                        <input type="text-area" id="message" placeholder='Message' />

                    </div>
                    {/* <label htmlFor="contact">How did you contact me?</label>
                    <input type="text" id="name"  /> */}

                </form>
            </div>
        </>
    )
}
