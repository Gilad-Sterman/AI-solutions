import { Lightbulb, ClipboardList, Cpu, CheckCircle2 } from 'lucide-react'

const steps = [
    {
        title: '1. Discovery',
        desc: 'We analyze your goals, data, and workflows to identify key opportunities.',
        icon: <Lightbulb className="icon" />,
    },
    {
        title: '2. Planning',
        desc: 'We design a custom AI strategy aligned with your business needs.',
        icon: <ClipboardList className="icon" />,
    },
    {
        title: '3. Development',
        desc: 'We build and integrate AI solutions using state-of-the-art tools.',
        icon: <Cpu className="icon" />,
    },
    {
        title: '4. Launch & Support',
        desc: 'We deploy, optimize, and provide ongoing support and refinement.',
        icon: <CheckCircle2 className="icon" />,
    },
]

export function HowItWorks() {
    return (
        <section className="how-it-works" id='how-it-works'>
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            {step.icon}
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="cta-wrapper" data-aos="fade-up" data-aos-delay="400">
                <a href="#contact" className="cta-btn">
                    Get Started Today
                </a>
            </div>
        </section>
    )
}
