import "./Footer.css"
function Footer () {

    const links = [
        {href: "https://www.instagram.com/homeedventurers?igsh=MTgydjY5anlnamlveQ==", src:"/instagram.png", alt: "Instagram"},
        { href: "https://www.facebook.com/groups/homeedventurerscommunity/?ref=share", src: "/facebook.png", alt: "Facebook" },
        { href: "https://payhip.com/homeedventurers", src: "/payhip.svg", alt: "Payhip" },
        { href: "https://www.tiktok.com/@homeedventurers?_t=ZN-90XhWAqwzxe&_r=1", src: "/tiktok.png", alt: "TikTok" },
    ]

    return (
        <footer className="footer-container">
            <ul className="footer-list">
                {links.map(({href, src, alt}) => (
                    <li key={href}>
                        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Visit our ${alt} page`} className="footer-item">
                        <img src={src} alt={`${alt} logo`} loading={"lazy"} className="footer-img"/>
                        </a>
                    </li>
                    ))}
            </ul>
        </footer>
    )
}

export default Footer;