import "./Navbar.css"
import Link from "next/link";


function NavBar () {
    return (
        <div className="navbar-container">
            <img className="nav-logo" src="/homeEdLogo.png" alt="Website Logo"/>
            <ul className="navbar-navlist">
                <Link className="nav-link" href="/">Home</Link>
                <Link className="nav-link"  href="/MyStory">My Story</Link>
                <Link className="nav-link"  href="/OurEthos">Our Ethos</Link>
                <Link className="nav-link"  href="/Blog">Blog</Link>
                <Link className="nav-link"  href="/Resources">Resources</Link>
                <Link className="nav-link"  href="/InkCap">InkCap</Link>
            </ul>
            {/*<button className="nav-button">Account</button>*/}
        </div>
    )
}

export default NavBar;