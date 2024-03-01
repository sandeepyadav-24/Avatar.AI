import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-28 py-10">
      <div className="text-3xl font-semibold">Journal</div>
      <div className="flex flex-row ">
        <div className="mx-5 font-semibold">
          <Link to="/todos">Notes</Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link to="/about">About</Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="mx-5 font-semibold">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
