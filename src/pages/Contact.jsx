export default function ContactPage() {
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
                    <form action="/submit-form" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required></input>

                        <br></br>

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required></input>

                        <br></br>

                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>

                        <br></br>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}