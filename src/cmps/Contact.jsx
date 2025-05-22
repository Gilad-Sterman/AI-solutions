export function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="container" data-aos="fade-up">
                <h2 className="section-title">Let’s Connect</h2>
                <p className="section-subtitle">Leave your details and we’ll get back to you</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Your full name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="4" placeholder="Tell us what you're looking for..." />
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </section>
    )
}