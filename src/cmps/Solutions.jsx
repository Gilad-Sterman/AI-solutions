import { BrainCircuit, Settings2, LineChart, MessageCircle, ShieldCheck, Rocket } from 'lucide-react'

const solutions = [
    {
        title: 'AI Strategy',
        desc: 'Tailored AI roadmaps for scalable transformation.',
        icon: <BrainCircuit className="icon" />,
    },
    {
        title: 'Automation',
        desc: 'Streamline repetitive tasks with intelligent agents.',
        icon: <Settings2 className="icon" />,
    },
    {
        title: 'Optimization',
        desc: 'Use data to improve performance and reduce costs.',
        icon: <LineChart className="icon" />,
    },
    {
        title: 'Smart Chatbots',
        desc: 'Natural, responsive AI for onboarding and support.',
        icon: <MessageCircle className="icon" />,
    },
    {
        title: 'Security',
        desc: 'Protect your data with robust AI-based safeguards.',
        icon: <ShieldCheck className="icon" />,
    },
    {
        title: 'Speed & Scalability',
        desc: 'Fast deployment with scalable AI architecture.',
        icon: <Rocket className="icon" />,
    },
]

export function Solutions() {
    return (
        <section className="solutions" id="solutions">
            <div className="container">
                <h2 className="section-title">Our AI-Powered Solutions</h2>
                <div className="solutions-grid">
                    {solutions.map((s, i) => (
                        <div className="solution-card" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                            {s.icon}
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
