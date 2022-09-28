import carVector from 'src/Assets/Icon/CarVector.svg';

const Outstanding = () => {
  return (
    <section className="md:py-16 py-8">
      <div className="container mx-auto">
        <div className=" w-full text-center">
          <h1 className="md:mb-20 mb-10 font-bold text-xl md:text-4xl TextCore py-1">
            Chức năng nổi bật
          </h1>
          <div className=" grid grid-cols-3 gap-3 md:mx-8 px-5">
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">Tổ chức giao thông</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">Thống kê khối lượng</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">In ấn hàng loạt bản vẽ</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">Trích xuất tọa độ điểm</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">Thống kê khối lượng</p>
            </div>
            <div className="md:mb-14 mb-5">
              <div className="flex justify-center mb-5">
                <div className="ColorCore p-4 rounded-lg w-12 h-12  ">
                  <img src={carVector} alt="carVector" />
                </div>
              </div>
              <p className="md:text-base text-xs">
                Hơn 100 chức năng hỗ trợ khác
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outstanding;
