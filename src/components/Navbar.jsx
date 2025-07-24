import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className= "navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                Home
                </Link>
                <div className="cointainer d-flex justify-content-center">
                    <Link to="/add-contact">
                    <button
                    className="btn bg-success"
                    style={{ fontSize: "1rem"}}
                    >
                        Add New Contact
                    </button>
                    </Link>
                </div>
            </div>
        </nav>
    
)};
export default Navbar;