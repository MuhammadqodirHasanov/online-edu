import './navbar.css'

export function Navbar() {
    return (
        <nav className="nav">
            <a className="nav-logo" href="#">Education</a>
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#">Courses</a>
            <a className="nav-link" href="#">Page</a>
            <a className="nav-link" href="#">Blog</a>
            <a className="nav-link" href="#">Contact</a>
            <a className="nav-link ml" href="#">Singin</a>
            <button className="nav-btn">Sing Up</button>
        </nav>
    )
}
