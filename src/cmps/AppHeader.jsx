import { useState } from "react";
import { Logo } from "./Logo";

export function AppHeader() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="app-header">
            <div className="container">
                <div className="logo">NeuroNet</div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <a href="#solutions">Solutions</a>
                    <a href="#how-it-works">How It Works</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}