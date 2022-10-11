import './index.css';

import { useForm } from 'react-hook-form';

import emailjs from '@emailjs/browser';

const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .send('service_ck0rxma', 'template_u1mte4i', data, 'LRAbLp_-EoYljq2tN')
      .then(
        (result) => {
          console.log(result.text, 'test');
        },
        (error) => {
          console.log(error.text, 's');
        },
      );
  };

  return (
    <section className="py-10 md:py-20 registerBackground">
      <div className="container mx-auto 2xl:px-44 px-5">
        <div className="flex justify-center">
          <div className="  p-7 Text  formRegister z-10 rounded-xl">
            <h1 className="font-bold text-xl md:text-4xl mb-5 text-center">
              Đăng Ký Dùng Thử
            </h1>
            <p className=" mb-6 md:mb-12 text-sm md:text-base">
              Hãy để lại thông tin bên dưới chúng tôi sẽ liên hệ bạn để tư vấn .
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className=" mb-2 md:mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  dark:text-gray-300"
                >
                  Tên <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  {...register('name', {
                    required: 'Không được bỏ trống mục này',
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
                {errors.name && <span>{errors.name?.message}</span>}
              </div>
              <div className=" mb-2 md:mb-6">
                <label
                  htmlFor="Email"
                  className="block mb-2 text-sm font-medium  dark:text-gray-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="Email"
                  type={'email'}
                  {...register('Email', {
                    required: 'Không được bỏ trống mục này',
                    pattern: {
                      value:
                        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                      message: 'Sai định dạng',
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
                {errors.Email && <span>{errors.Email?.message}</span>}
              </div>
              <div className=" mb-2 md:mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium  dark:text-gray-300"
                >
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type={'text'}
                  name="phone"
                  {...register('phone', {
                    pattern: {
                      value: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                      message: 'Sai định dạng',
                    },
                    required: 'Không được bỏ trống mục này',
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
                {errors.phone && <span>{errors.phone?.message}</span>}
              </div>

              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="ColorCore py-2 px-5 rounded-lg "
                >
                  Gửi ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormRegister;
