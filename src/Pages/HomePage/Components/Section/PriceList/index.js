import { useEffect, useState } from 'react';
import './index.css';

const PriceList = ({ Rectangle }) => {
  const [tab, setTab] = useState(false);

  const [rectangle, SetRectangle] = useState(true);

  useEffect(() => {
    SetRectangle(Rectangle);
  }, []);

  return (
    <section className="py-20 md:py-32 relative">
      <div
        className={
          rectangle
            ? 'lg:block hidden w-full ColorCore h-16 absolute -z-10 top-2/3 -translate-y-2/3'
            : 'hidden'
        }
      ></div>
      <div className="container mx-auto 2xl:px-44 mb-10">
        <div className=" w-full">
          <h1 className=" mb-5 font-bold text-xl py-1 md:text-4xl TextCore  text-center">
            Bảng Giá
          </h1>
          <div className="mb-5 md:mb-20 lg:-z-30 z-30 flex justify-center">
            <button
              className={tab ? 'SmallText p-2 z-30' : 'tabButton p-2 z-30'}
              onClick={() => setTab(false)}
            >
              AutoCAD
            </button>
            <button
              className={tab ? 'tabButton p-2 z-30' : 'SmallText p-2 z-30'}
              onClick={() => setTab(true)}
            >
              Civil 3D
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 ">
            <div className="mx-10 lg:mx-0 p-6 h-auto  bg-white flex flex-col justify-between cardPrize">
              <div>
                <div className="-translate-x-8  borderImagine ColorCore w-2/3 md:mb-6 mb-2 p-2 ">
                  <h1 className="font-semibold  text-base md:text-2xl ">
                    Bản Trail
                  </h1>
                </div>
                <p className="SmallText mb-2 text-xs md:text-base">Chỉ từ</p>
                <h2 className="font-bold text-xl md:text-4xl mb-2 TextCore">
                  0 đ
                </h2>
                <p className="SmallText mb-2"> / máy /năm</p>
                <ul className="list-disc px-4">
                  <li>Giới hạn chức năng </li>
                  <li>Dùng thử miễn phí</li>
                </ul>
              </div>
              <div className="md:text-center text-left">
                <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base mt-5  ">
                  Dùng thử miễn phí
                </button>
              </div>
            </div>
            <div className="mx-10 lg:mx-0 p-6 h-auto  cardPrize bg-white  flex flex-col justify-between">
              <div>
                <div className="-translate-x-8  borderImagine ColorCore w-2/3 md:mb-6 mb-2 p-2">
                  <h1 className="font-semibold text-base md:text-2xl">
                    Bản chính thức
                  </h1>
                </div>
                <p className="SmallText mb-2 text-xs md:text-base">Chỉ từ</p>
                <h2 className="font-bold text-xl md:text-4xl mb-2 TextCore">
                  1.900.000 đ
                </h2>
                <p className="SmallText mb-2 text-xs md:text-base">
                  {' '}
                  / máy /năm
                </p>
                <ul className="list-disc px-4">
                  <li>Thời hạn 1 năm: 1.900.000đ/1 máy</li>
                  <li>Thời hạn vĩnh viễn: 3.800.000đ/1 máy</li>
                </ul>
              </div>
              <div className="text-left md:text-center">
                <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base mt-5  ">
                  Liên hệ
                </button>
              </div>
            </div>
            <div className="mx-10 lg:mx-0 p-6 h-auto  cardPrize bg-white  flex flex-col justify-between">
              <div>
                <div className="-translate-x-8  borderImagine ColorCore w-2/3 md:mb-6 mb-2 p-2">
                  <h1 className="font-semibold text-base md:text-2xl">
                    Gói Combo
                  </h1>
                </div>
                <p className="SmallText mb-2 text-xs md:text-base">Chỉ từ</p>
                <h2 className="font-bold text-xl md:text-4xl mb-2 TextCore">
                  0 đ
                </h2>
                <p className="SmallText mb-2 text-xs md:text-base">
                  {' '}
                  / máy /năm
                </p>
                <ul className="list-disc px-4">
                  <li>Combo 5 máy (theo năm): 6.650.000đ/ 1 năm</li>
                  <li>Combo 5 máy (vĩnh viễn): 12.500.000đ.</li>
                  <li>Combo trên 15 máy (theo năm): 19.950.000đ/1 năm</li>
                  <li>Combo trên 15 máy (vĩnh viễn): 39.900.000đ</li>
                </ul>
              </div>
              <div className="text-left md:text-center">
                <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base mt-5  ">
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
