import { IconPlay, IconPlayDark } from 'src/Assets/Icon';
import image17 from 'src/Assets/Image/image17.png';

const GuildVideo = () => {
  return (
    <section className="lg:py-8 py-4 mt-2">
      <div className="p-8 bg-white ">
        <div>
          <h1 className="text-2xl font-bold mb-2 Blue">
            Tiêu đề video đặt ở đây
          </h1>
          <p className="mb-5">Help text goes here! Tell everyone what u did!</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="col-span-2">
              <div className="relative text-center">
                <img src={image17} alt="image19" className="w-full" />
                <div className="absolute w-full h-full   top-0 left-0">
                  <div className="flex justify-center items-center h-full">
                    <IconPlay className="w-10 md:w-20 h-10 md:h-20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 col-span-2">
              <div className="flex gap-5 mb-7">
                <button className="font-bold text-white ColorCore px-2 md:px-5 py-3 rounded-lg text-sm md:text-base ">
                  Category 01
                </button>
                <button className=" SmallText px-2 md:px-5 py-3 rounded-lg text-sm md:text-base ">
                  Category 01
                </button>
                <button className="  SmallText px-2 md:px-5 py-3 rounded-lg text-sm md:text-base ">
                  Category 01
                </button>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-row mb-7 SmallText">
                  <IconPlayDark className="w-5 md:w-7  h-10 md:h-7" />
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
              <div className="flex justify-between pl-7">
                <div className="flex flex-row mb-7 SmallText">
                  <p className="pl-5">Đầu mục hướng dẫn, tên video</p>
                </div>
                <div>10:15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GuildVideo;
