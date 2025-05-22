export function Logo() {
    function scrollToTop() {
        window.scrollTo(0, 0)
    }

    return (
        <section className="logo" onClick={() => scrollToTop()} >
            <span className="title">שירה ישראלי</span>
            <span className="sub-title">מנחה למיניות בריאה</span>
        </section>
    )
}