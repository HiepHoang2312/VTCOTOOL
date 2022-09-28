import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import playButton from 'src/Assets/Icon/Play.svg';

import image17 from 'src/Assets/Image/image17.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';

const SliderSection = () => {
  return (
    <section className="py-8 md:py-16">
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
              spaceBetween={-100}
              coverflowEffect={{
                rotate: 50,
                stretch: 100,
                depth: 100,
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
                      <img src={playButton} alt="play" width={84} height={84} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <img src={image17} alt="image19" />
                  <div className="absolute w-full h-full   top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                      <img src={playButton} alt="play" width={84} height={84} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative text-center">
                  <img src={image17} alt="image19" />
                  <div className="absolute w-full h-full   top-0 left-0">
                    <div className="flex justify-center items-center h-full">
                      <img src={playButton} alt="play" width={84} height={84} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
