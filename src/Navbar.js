import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Lively</h1>
            <p className="glow">Glow of good heath</p>
            <div className="Links">
                <Link to="/Category" className="Home1">Category</Link>
                <Link to="/" className="Home1">Preview</Link>
                <Link to="/" className="Home1">Contact</Link>
                <Link to="/" className="Home">Home</Link>

                <button className="B1" ><Link to='/Create'>New Blog</Link></button>
            </div>

        </nav>
     );
}
 
export default Navbar;