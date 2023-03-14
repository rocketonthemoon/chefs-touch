import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between items-center">
        <h1 className="text-3xl font-thin text-primary">Chef's Touch</h1>
        <div className="flex w-32 sm:w-64 justify-around">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    </div>
  )
}

export default NavBar