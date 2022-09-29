import banner from 'src/Assets/Image/banner.png';
import './index.css';

const Banner = () => {
  return (
    <section>
      <div className="w-full -z-10 relative">
        <img src={banner} alt="imageBanner" className="bg-cover w-full" />
        <div className="text-center absolute md:top-1/2 top-1/2 -translate-y-1/2 w-full">
          <div className="flex justify-center">
            <div className="flex-col">
              <h1 className="text-2xl md:text-5xl md:mb-7 mb-2 Text mt-10">
                Autodesk Tools
              </h1>
              <p className="text-sm md:text-base Text md:mb-4 mb-2">
                Giới thiệu ngắn gọn: Là gì...? Lợi ích/ tại sao khách hàng nên
                dùng...? Đặt điểm nổi bật...
              </p>
              <p className="Text mb-6 md:mb-12 text-sm md:text-base">
                Đối tượng sử dụng: Các bạn sinh viên và kỹ sư ngành xây dựng cầu
                đường
              </p>
              <div>
                <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base">
                  Dùng thử miễn phí -&gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
