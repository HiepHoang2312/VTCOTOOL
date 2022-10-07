import './index.css';

import { useEffect, useState } from 'react';

import { IconPlay, IconPlayDark } from 'src/Assets/Icon';

import image17 from 'src/Assets/Image/image17.png';

import instance from 'src/Mockdata';

const GuildVideo = () => {
  const [dataCategrory, SetDataCategrory] = useState();

  const [tabCategrory, SetTabCategrory] = useState(1);

  const [contentCategrory, SetTabContentCategrory] = useState([]);

  const getAcitveTab = (index, className) =>
    tabCategrory === index ? className : '';

  useEffect(() => {
    getCategrory();

    getListCategrory(1);
  }, []);

  const getCategrory = async () => {
    const result = await instance.get('/categrory').then(function (response) {
      return response.data.categrory;
    });

    SetDataCategrory(result);

    return result;
  };

  const getListCategrory = async (index) => {
    const result = await instance.get('/categrory').then(function (response) {
      return response.data.categrory[index - 1].List;
    });

    SetTabContentCategrory(result);

    return result;
  };

  return (
    <section className="lg:py-16 py-8 mt-2">
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
                {dataCategrory?.map((data) => {
                  return (
                    <button
                      key={data?.id}
                      className={`${getAcitveTab(
                        data?.id,
                        'font-bold activeTabCategrory',
                      )} SmallText  px-2 md:px-5 py-3 rounded-lg text-sm md:text-base  z-20`}
                      onClick={() => {
                        SetTabCategrory(data?.id);
                        getListCategrory(data?.id);
                      }}
                    >
                      {data?.name}
                    </button>
                  );
                })}
              </div>
              {contentCategrory.map((content) => (
                <div key={content.id} className="flex justify-between">
                  <div
                    className={
                      content.icon
                        ? 'flex flex-row mb-7 SmallText '
                        : 'flex flex-row mb-7 SmallText pl-7'
                    }
                  >
                    <IconPlayDark
                      className={content.icon ? 'w-7 h-7' : 'hidden'}
                    />
                    <p className="pl-5">{content.content}</p>
                  </div>
                  <div>{content.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GuildVideo;
