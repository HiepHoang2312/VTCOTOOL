import Footer from '../HomePage/Components/Section/Footer';

import Header from '../HomePage/Components/Section/Header';

import logo2 from 'src/Assets/Image/logo.png';
import PriceList from '../HomePage/Components/Section/PriceList';

const index = () => {
  return (
    <div>
      <Header logo={logo2} />

      <PriceList Rectangle={true} />

      <Footer />
    </div>
  );
};

export default index;
