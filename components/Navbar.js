import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h2>Product Management System</h2>

      <Link to="/">Home</Link>

      <hr />
    </div>
  );
}

export default Navbar;