import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <nav className="navbar navbar-dark navbar-fixed" >
        <h1>Rudeep's Blog</h1>
        <div className="links">
        <Link to="/" style={{textDecoration:'none', margin:'5px'}}>Home</Link>
        <Link to="/create" style={{textDecoration:'none', background:'#fff', borderRadius:'15px' ,padding:'5px'}}>+NewBlog</Link>
        </div>
        </nav>
        </>
     );
}
 
export default Navbar;