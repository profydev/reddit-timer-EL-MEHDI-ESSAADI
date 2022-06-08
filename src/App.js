import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import { SharedLayout } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index />
          <Route path="search" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
