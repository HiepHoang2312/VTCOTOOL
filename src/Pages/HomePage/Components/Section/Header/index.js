import './index.css';

import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [navShow, SetNavShow] = useState(false);

  const [a, setA] = useState(true);

  const [logo, SetLogo] = useState();

  useEffect(() => {
    SetLogo(props.logo);

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    setA(false);

    const onScroll = () => {
      if (window.scrollY > 220) {
        setA(true);
      } else {
        setA(false);
      }
    };
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        a ? 'fixed top-2 w-full   opacity-80 z-20 ' : 'fixed top-0 w-full z-20 '
      }
    >
      <div>
        <div>
          <div className="flex items-center justify-between  border-gray-100   lg:space-x-10 lg:px-0 px-5 z-20">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="py-5 pl-8">
                <img
                  className={a ? 'hidden' : 'h-8 w-auto sm:h-10'}
                  src={logo}
                  alt="a"
                />
              </div>
            </div>
            <div className=" lg:hidden relative">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md ColorCore p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => SetNavShow(!navShow)}
              >
                <svg
                  className="h-6 w-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <nav
              className={
                ' space-x-10 hidden lg:block  lg:w-3/4 nav-menu  px-10'
              }
              id="nav1"
            >
              <div className="flex flex-col text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-0 xl:gap-10">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white';
                  }}
                  to="/"
                  end
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item py-5  block   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item py-5  block   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Giới thiệu
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Chức năng
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Bẳng giá
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white';
                  }}
                  to="/VtcoTool"
                >
                  Sản phẩm
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Hướng dẫn
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Liên hệ
                </NavLink>
              </div>
            </nav>
            <nav
              className={
                navShow
                  ? ' space-x-10 lg:hidden flex justify-center lg:w-1/2 ColorCore py-5 px-10 absolute top-16 w-full left-0'
                  : 'hidden'
              }
              id="nav1"
            >
              <div className="flex flex-col text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:gap-0 xl:gap-7">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white';
                  }}
                  to="/"
                  end
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item py-5  block   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item py-5  block   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Giới thiệu
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Chức năng
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Bẳng giá
                </NavLink>
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white';
                  }}
                  to="/VtcoTool"
                >
                  Sản phẩm
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Hướng dẫn
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white NavActive'
                      : 'nav-item  block py-5   text-white  bg-primary-700  lg:text-primary-700  dark:text-white'
                  }
                  to="/introduce"
                >
                  Liên hệ
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
