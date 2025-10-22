import "./Navbar.css"
import Link from "next/link";
import Image from "next/image";

function NavBar () {

    const links = [
        { href:"/", label: "Home" },
        { href:"/MyStory", label: "My Story" },
        { href:"/OurValues", label: "Our Values" },
        { href: "/NordicRoots", label: "Nordic Roots" },
        { href:"/Resources", label: "Resources" },
        { href:"/InkCap", label: "InkCap" },

    ]

    return (
        <nav className="navbar-container" aria-label="Main Navigation">
            <Link href="/" className="nav-logo-link" aria-label="Home">
                <Image className="nav-logo" src="/homeEdLogo.png" alt="HomeEdventurers Logo" width={200} height={60} aria-label="HomeEdventurers Logo"/>
            </Link>

            <ul className="navbar-navlist">
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link href={href} className="nav-link" aria-label={label}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar;