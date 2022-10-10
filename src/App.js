import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from 'src/Pages/HomePage';

import VtcoTool from './Pages/VtcoTool';

import Price from 'src/Pages/Price';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="VtcoTool" element={<VtcoTool />} />
        <Route path="Price" element={<Price />} />
        <Route path="" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
