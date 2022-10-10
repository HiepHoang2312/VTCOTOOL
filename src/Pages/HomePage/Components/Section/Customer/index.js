import image7 from 'src/Assets/Image/image7.png';
import image8 from 'src/Assets/Image/image8.png';
import image9 from 'src/Assets/Image/image9.png';

const Customer = () => {
  return (
    <section className="md:py-16 py-8 text-center">
      <div className="container mx-auto px-5">
        <h1 className="TextCore font-bold text-xl md:text-4xl pb-8 md:pb-16">
          Khách Hàng Của Chúng Tôi
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-2 md:gap-20">
            <div className="flex justify-center">
              <img src={image9} alt="image9" />
            </div>
            <div className="flex justify-center">
              <img src={image8} alt="image8" />
            </div>
            <div className="flex justify-center">
              <img src={image7} alt="image7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
