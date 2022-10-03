import './index.css';

import logo from 'src/Assets/Image/Frame.png';
import logo2 from 'src/Assets/Image/logo.png';

import { useEffect, useState } from 'react';

const Header = () => {
  const [navShow, SetNavShow] = useState(false);

  const [a, setA] = useState(true);

  useEffect(() => {
    const onscrollBackTop = () => {
      if (window.scrollY > 220) {
        setA(true);
      } else {
        setA(false);
      }
    };
    window.addEventListener('scroll', onscrollBackTop);
  }, []);

  return (
    <header
      className={
        a ? 'fixed top-0 w-full z-40  opacity-80' : 'fixed top-0 w-full z-40'
      }
      /* className="fixed top-0 w-full z-40 shadow-lg " */
    >
      <div>
        <div>
          <div className="flex items-center justify-between  border-gray-100   lg:space-x-10 lg:px-0 px-5">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="py-5 pl-8">
                <span className="sr-only">Your Company</span>
                <img
                  className={a ? 'hidden' : 'h-8 w-auto sm:h-10'}
                  src={logo}
                  alt="a"
                />
                <img
                  className={a ? 'h-8 w-auto sm:h-10' : 'hidden'}
                  src={logo2}
                  alt="a"
                />
              </div>
            </div>
            <div className="-my-2 -mr-2 lg:hidden relative">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => SetNavShow(!navShow)}
              >
                <svg
                  className="h-6 w-6"
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
                a
                  ? ' space-x-10 hidden lg:flex  lg:w-3/4 nav-menu py-5 px-10'
                  : ' space-x-10 hidden lg:flex  lg:w-3/4 nav-menu py-5 px-10  '
              }
              id="nav1"
            >
              <div className="flex flex-col text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:gap-0 xl:gap-7">
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Trang chủ
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Giới thiệu
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Chức năng
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Bẳng giá
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Sản phẩm
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Hướng dẫn
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Liên hệ
                </div>
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
              <div className="flex flex-col text-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:w-full">
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Trang chủ
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Giới thiệu
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Chức năng
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Bẳng giá
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Sản phẩm
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Hướng dẫn
                </div>
                <div className="nav-item  block py-2 pr-4  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white">
                  Liên hệ
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
