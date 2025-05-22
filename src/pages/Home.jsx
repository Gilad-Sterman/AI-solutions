import { Contact } from "../cmps/Contact";
import { HowItWorks } from "../cmps/HowItWorks";
import { Solutions } from "../cmps/Solutions";


export function Home() {
    return (
        <section className="home-page">
            <section className="hero">
                <div className="content" data-aos="fade-up">
                    <h1>
                        Transforming Businesses with <span>Intelligent AI Solutions</span>
                    </h1>
                    <p>
                        From automation to insights, our AI systems empower your organization
                        to move faster, smarter, and with confidence.
                    </p>
                    <a href="#contact" className="cta-button" data-aos="zoom-in" data-aos-delay="200">
                        Get Started
                    </a>
                </div>
                <div className="visual" data-aos="fade-left">
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1747915744/AIPic_fcnxoe.jpg" alt="AI abstract visualization" />
                </div>
            </section>
            <Solutions />
            <HowItWorks />
            <Contact />
        </section>
    )
}