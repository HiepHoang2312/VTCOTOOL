import './index.css';

const PriceList = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="container mx-auto 2xl:px-44 mb-10">
        <div className=" w-full">
          <h1 className="mb-5 md:mb-20 font-bold text-xl py-1 md:text-4xl TextCore  text-center">
            Bảng Giá
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-8">
            <div className="p-6 h-auto  bg-white flex flex-col justify-between cardPrize">
              <div>
                <h1 className="font-semibold text-base md:text-2xl md:mb-6 mb-2">
                  Bản Trail
                </h1>
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
            <div className="p-6 h-auto  cardPrize bg-white  flex flex-col justify-between">
              <div>
                <h1 className="font-semibold text-base md:text-2xl md:mb-6 mb-2">
                  Bản chính thức
                </h1>
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
            <div className="p-6 h-auto  cardPrize bg-white  flex flex-col justify-between">
              <div>
                <h1 className="font-semibold text-base md:text-2xl md:mb-6 mb-2">
                  Gói Combo
                </h1>
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
