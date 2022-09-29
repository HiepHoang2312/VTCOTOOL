import React from 'react';

const Introduce = () => {
  return (
    <section className="md:py-16 py-8 text-center bg-white">
      <div className="container mx-auto px-5">
        <div className="flex ">
          <div className="w-1/2">
            <h1 className="TextCore font-bold text-xl md:text-4xl pb-5">
              20 chuyên viên +{' '}
            </h1>
            <p className="md:text-2xl text-sm  font-semibold">
              Đội ngũ phát triển
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="TextCore font-bold text-xl md:text-4xl pb-5">
              15k giờ+{' '}
            </h1>
            <p className="md:text-2xl text-sm font-semibold">
              Nghiên cứu cải tiến
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
