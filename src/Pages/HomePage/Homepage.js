import Banner from 'src/Components/Section/Banner/Banner';
import Customer from 'src/Components/Section/Customer/Customer';
import Footer from 'src/Components/Section/Footer/Footer';
import FormRegister from 'src/Components/Section/FormRegister/FormRegister';
import Header from 'src/Components/Section/Header/Header';
import Introduce from 'src/Components/Section/Introduce/Introduce';
import Outstanding from 'src/Components/Section/Outstanding/Outstanding';
import PriceList from 'src/Components/Section/PriceList/PriceList';
import SliderSection from 'src/Components/Section/Slider/SliderSection';

const Homepage = () => {
  return (
    <div>
      <Header />

      <Banner />

      <Outstanding />

      <Introduce />

      <Customer />

      <SliderSection />

      <PriceList />

      <FormRegister />

      <Footer />
    </div>
  );
};

export default Homepage;
