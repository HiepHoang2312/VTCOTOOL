import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { IconPlay } from 'src/Assets/Icon';
import image17 from 'src/Assets/Image/image17.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

const SliderSection = () => {
  return (
    <section className="py-8 ">
      <div className="container mx-auto 2xl:px-44 px-5">
        <div className=" w-full text-center">
          <h1 className=" mb-10 md:mb-20 font-bold text-xl md:text-4xl TextCore py-1">
            Video Hướng Dẫn
          </h1>
          <>
            <Swiper
              effect={'coverflow'}
              slidesPerView={2}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              spaceBetween={-120}
              coverflowEffect={{
                rotate: 50,
                stretch: -100,
                depth: 400,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="relative text-center">
                  <img src={image17} alt="image19" />
                  <div className="absolute w-full h-full   top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                      <IconPlay className="w-10 md:w-20 h-10 md:h-20" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <img src={image17} alt="image19" />
                  <div className="absolute w-full h-full   top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                      <IconPlay className="w-10 md:w-20 h-10 md:h-20" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <img src={image17} alt="image19" />
                  <div className="absolute w-full h-full   top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                      <IconPlay className="w-10 md:w-20 h-10 md:h-20" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
          <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base mt-5  ">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
