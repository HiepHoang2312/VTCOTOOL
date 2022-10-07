import { useState } from 'react';

import './index.css';

import {
  IconCoordinates,
  IconPrint,
  IconStatistic,
  IconVector,
  CarVector,
  IconCompareArrow,
  IconGetApp,
  IconLabel,
  IconMore,
  IconDataExploration,
  IconWebHook,
} from 'src/Assets/Icon';

const Outstanding = () => {
  const [tab, setTab] = useState(false);

  return (
    <section className="md:py-16 py-8">
      <div className="container mx-auto">
        <div className=" w-full text-center">
          <h1 className="md:mb-10 mb-5 font-bold text-xl md:text-4xl TextCore py-1">
            Chức năng nổi bật
          </h1>
          <div className="mb-10">
            <button
              className={tab ? ' p-2' : 'tabButton p-2'}
              onClick={() => setTab(false)}
            >
              AutoCAD
            </button>
            <button
              className={tab ? 'tabButton p-2' : ' p-2'}
              onClick={() => setTab(true)}
            >
              Civil 3D
            </button>
          </div>
          <div
            className={tab ? 'hidden' : 'grid grid-cols-3 gap-3 md:mx-8 px-5'}
          >
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center item-center">
                  <CarVector />
                </div>
              </div>
              <p className="md:text-base text-xs">Tổ chức giao thông</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconStatistic />
                </div>
              </div>
              <p className="md:text-base text-xs">Thống kê khối lượng</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconPrint />
                </div>
              </div>
              <p className="md:text-base text-xs">In ấn hàng loạt bản vẽ</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconCoordinates />
                </div>
              </div>
              <p className="md:text-base text-xs">Trích xuất tọa độ điểm</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconStatistic />
                </div>
              </div>
              <p className="md:text-base text-xs">Thống kê khối lượng</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconVector />
                </div>
              </div>
              <p className="md:text-base text-xs">
                Hơn 60 chức năng hỗ trợ khác
              </p>
            </div>
          </div>
          <div
            className={tab ? 'grid grid-cols-3 gap-3 md:mx-8 px-5' : 'hidden'}
          >
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center item-center">
                  <IconDataExploration />
                </div>
              </div>
              <p className="md:text-base text-xs">Xử lý số liệu khảo sát</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconWebHook />
                </div>
              </div>
              <p className="md:text-base text-xs">Nút giao</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconCompareArrow />
                </div>
              </div>
              <p className="md:text-base text-xs">Chế độ điều hướng</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconGetApp />
                </div>
              </div>
              <p className="md:text-base text-xs">San nền</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconLabel />
                </div>
              </div>
              <p className="md:text-base text-xs">Thoát nước</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12 flex justify-center items-center ">
                  <IconMore />
                </div>
              </div>
              <p className="md:text-base text-xs">
                Hơn 40 chức năng hỗ trợ khác
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outstanding;
