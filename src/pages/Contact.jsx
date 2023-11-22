import { useState } from "react"

export default function ContactPage() {
    const [alertMessage, setAlertMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()

        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const message = document.getElementById('message')

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email.value)) {
            setAlertMessage('Please enter a valid email address!')
            return
        }

        if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
            setAlertMessage('Please fill out all fields...')
            return
        } else {
            setAlertMessage('')
            return
        }
    }

    return (
        <>  
            <div className="contact-container">
                <div className="contact-section">
                    <h2>Contact Me!</h2>
                    <h3>Email:</h3> <p>rawlins.cameron00@gmail.com</p>
                    <h3>Mobile:</h3> <p>(123)456-7890</p>
                </div>

                <div className="separator"></div>

                <div className="contact-section">
                    <h3>Message Me Directly!</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />

                        <br />

                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" />

                        <br />

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4"></textarea>

                        <br />

                        <button type="submit">Submit</button>
                    </form>

                    {alertMessage && (
                        <div className="alert-message">
                            <p>{alertMessage}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}