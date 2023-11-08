import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../Provider/AuthProvider";
import logo from "../../assets/Logo-removebg-preview.png";
import { TbLogout } from "react-icons/tb";
const Navbar = () => {
  const { user, logOut, updatedUser } = useContext(AuthContext);

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  const NavLinks = (
    <>
      <li className="text-base text-black font-medium ">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-blue-700 underline bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      {!user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
      {!user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/register"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            Register
          </NavLink>
        </li>
      )}
      {user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/createAssignment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            Create Assignment
          </NavLink>
        </li>
      )}
      {user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/allAssignment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            Assignments
          </NavLink>
        </li>
      )}
      {user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/myAssignment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            My Assignments
          </NavLink>
        </li>
      )}
      {user && (
        <li className="text-base text-black font-medium ">
          <NavLink
            to="/submittedAssignment"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-blue-700 underline" : ""
            }
          >
            Submitted Assignments
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div
        data-aos="fade-down"
        className="navbar px-2 md:px-10 lg:px-16 py-5 md:py-10 shadow-lg"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 gap-10 bg-blue-300"
            >
              {NavLinks}
            </ul>
          </div>
          <Link to="/">
            <img className="w-[180px] h-[70px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-10">{NavLinks}</ul>
        </div>
        <div className="navbar-end gap-2 md:gap-4">
          <div>
            {user ? (
              <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-2">
                <p className="w-max text-sm md:text-base"></p>
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={user.photoURL || updatedUser}
                      title={user.displayName}
                    />
                  </div>
                </label>
              </div>
            ) : (
              <FaUserCircle className="text-3xl hover:text-blue-700"></FaUserCircle>
            )}
          </div>

          <div>
            {user && (
              <Link
                onClick={handleSignOut}
                className="text-3xl text-black font-medium uppercase"
              >
                <TbLogout title="Log Out" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
