import Banner from './Components/Section/Banner';
import Customer from './Components/Section/Customer';
import Footer from './Components/Section/Footer';
import FormRegister from './Components/Section/FormRegister';
import Header from './Components/Section/Header';
import Introduce from './Components/Section/Introduce';
import Outstanding from './Components/Section/Outstanding';
import PriceList from './Components/Section/PriceList';
import SliderSection from './Components/Section/Slider';

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