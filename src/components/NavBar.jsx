import { Link } from "react-router"

const NavBar = () => {
    return <div className="d-flex justify-content-center gap-5">
        <Link to="/">HOME</Link>
        <Link to="/hello">HELLO</Link>
        <Link to="/state">STATE</Link>
        <Link to="/shdgf84rhsf">404</Link>
    </div>
}

export default NavBar