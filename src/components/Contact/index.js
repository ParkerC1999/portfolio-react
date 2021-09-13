function Contact() {
    return (
        <div>
            {/*Contact Me Section*/}
            <section id="contact-me" className="contact-me">
                <div className="section-title">
                    <h2>Contact Me</h2>
                </div>
                <div className="info">
                    <a>(nnn)-nnn-nnnn</a>
                    <a href="mailto(placeholder)">placeholder@gmail.com</a>
                    <a href="https://github.com/ParkerC1999">GitHub</a>
                    <a>FaceBook</a>
                </div>
            </section>
            <section className="contact-me">
                <div className="section-title">
                    <h2>Send Me a message</h2>
                </div>
                <div className="textBoxes">
                    <p>Your Name:</p>
                    <input></input>
                    <p>Your Email:</p>
                    <input></input>
                    <p>Message:</p>
                    <textarea rows="10" cols="80"></textarea>
                </div>
            </section>
        </div>
    )
}

export default Contact;