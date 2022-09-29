import logo from 'src/Assets/logo.png';
import linkin from 'src/Assets/Icon/linked_in.svg';
import fb from 'src/Assets/Icon/f.svg';
import instagram from 'src/Assets/Icon/instagram.svg';
import twitter from 'src/Assets/Icon/twitter.svg';

const Footer = () => {
  return (
    <footer className=" bg-black">
      <div className="pt-8 md:pt-16">
        <div className="container mx-auto  md:px-2 2xl:px-44 px-5">
          <div className="grid grid-cols-5 Text gap-2 md:gap-10 pb-8">
            <div className="col-span-2">
              <div className="flex-row">
                <img src={logo} alt="logo" />
                <p className="my-5">Tools hỗ trợ chuyên ngành cầu đường</p>
                <div className="flex gap-6">
                  <img src={linkin} alt="linkin" />
                  <img src={fb} alt="linkin" />
                  <img src={instagram} alt="linkin" />
                  <img src={twitter} alt="linkin" />
                </div>
              </div>
            </div>
            <div>
              <h3>Explore</h3>
              <p className="SmallText">Cookies</p>
              <p className="SmallText">About</p>
              <p className="SmallText">Privacy Policy</p>
              <p className="SmallText">Licenses</p>
            </div>
            <div>
              <h3>Important</h3>
              <p className="SmallText">Timeline</p>
              <p className="SmallText">News</p>
              <p className="SmallText">Licensing</p>
              <p className="SmallText">Josight</p>
            </div>
            <div>
              <h3>Categories</h3>
              <p className="SmallText">categories</p>
              <p className="SmallText">Term & conditions</p>
              <p className="SmallText">Services</p>
              <p className="SmallText">FAQ</p>
            </div>
          </div>
        </div>
        <div className="py-10 border-t border-zinc-700">
          <div className="container mx-auto 2xl:px-44">
            <div className="flex items-center justify-between">
              <p className="SmallText ml-5 md:ml-0">
                Copyright 2021 VTCO. All rights reserved.
              </p>
              <nav className="hidden md:flex space-x-10  text-left w-1/2 py-5 px-10">
                <div className="block text-white">Trang chủ</div>
                <div className="block text-white">Giới thiệu</div>
                <div className="block text-white">Chức năng</div>
                <div className="block text-white">Bẳng giá</div>
                <div className="block text-white">Liên hệ</div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
