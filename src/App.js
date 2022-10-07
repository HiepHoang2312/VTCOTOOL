import Homepage from 'src/Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VtcoTool from './Pages/VtcoTool';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="VtcoTool" element={<VtcoTool />} />
        <Route path="" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
