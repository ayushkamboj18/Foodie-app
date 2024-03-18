import { Link } from "react-router-dom";
function Header() {
    return(
        <header className="flex">
            <div className="app-logo">
                <img src="https://cdn.dribbble.com/users/10789689/screenshots/20033207/media/192262447583ac2b33ca1f0835b540c2.png" alt="Foodies App Logo"/>
            </div>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}

export default Header;