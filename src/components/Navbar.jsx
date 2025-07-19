import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="container">
        <nav className="navbar navbar-light bg-light">
            <div className="container ">
                <div className="ml-auto">
                    <Link to="/demo">
                        <button className="btn bg-success">Add new contact</button>
                    </Link>
                </div>
            </div>
        </nav>
        </div>
    );
};
export default Navbar;