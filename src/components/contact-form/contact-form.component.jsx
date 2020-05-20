import React, { useState } from 'react';
import InputField from '../input/input.component';
import SubmitButton from '../submit-button/submit-button.component';


const ContactForm = () => {
    const [value, setValue] = useState({
        email: '',
        query:''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setValue(prevState => ({
            ...prevState,
            [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`your name is ${value.firstName}`)
    }

    const {email, query} = value;
    return(
        <div className="form">
        <form action="" method="POST" onSubmit={handleSubmit}></form>
        <InputField
        label="Email:"
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        handleChange={handleChange}
        />
        <textarea 
        name="query" 
        id="query" 
        cols="30" 
        rows="10" 
        value={query} 
        onChange={handleChange} 
        placeholder="Ask Your question here..."
        />
        <SubmitButton 
        type="submit"
        value="SEND"
        />
        </div>

    )
}

export default ContactForm;