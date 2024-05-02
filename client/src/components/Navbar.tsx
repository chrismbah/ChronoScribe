import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 p-2 xsm:p-4 shadow-sm z-10">
      <div className=" flex flex-wrap items-center justify-between  p-4 max-w-screen-xl mx-auto">
        <span className="self-center text-2xl font-semibold whitespace-nowrap">
          ChronoScribe
        </span>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium text-gray-500 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                to="/?category=art"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                to="/?category=science"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Science
              </Link>
            </li>
            <li>
              <Link
                to="/?category=technology"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Technology
              </Link>
            </li>
            <li>
              <Link
                to="/?category=cinema"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Cinema
              </Link>
            </li>
            <li>
              <Link
                to="/?category=design"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Design
              </Link>
            </li>
            <li>
              <Link
                to="/?category=food"
                className="block py-2 px-3 hover:text-blue-500 text-sm bg-blue-700 rounded md:bg-transparent md:p-0 "
              >
                Food
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <p>John</p>
          <span>
            <Link
              to="/write-post"
              className="font-medium underline text-gray-500"
            >
              Write a Post
            </Link>
          </span>
          <button className="p-2 rounded-md text-white font-medium bg-blue-500 text-xs">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
