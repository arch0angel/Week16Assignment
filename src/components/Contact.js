import React from 'react'
import Form from './Form'
import Button from 'react-bootstrap/Button'
import '../index.css'

function Contact() {
    return (
        <div className='contact'>
            <h1>Get in touch with us!</h1>
            <>
            <Form/>
            <Button class='Button' variant="primary">Submit</Button>
            </>
        </div>
    )
}

export default Contact