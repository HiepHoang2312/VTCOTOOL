import Footer from '../HomePage/Components/Section/Footer';

import Header from '../HomePage/Components/Section/Header';

import GuildVideo from './Components/GuildVideo';

import VideoFooter from './Components/VideoFooter';

import logo2 from 'src/Assets/Image/logo.png';

const VtcoTool = () => {
  return (
    <div>
      <Header logo={logo2}></Header>

      <GuildVideo></GuildVideo>

      <VideoFooter />

      <Footer></Footer>
    </div>
  );
};

export default VtcoTool;
