import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.scss';
import { SharedLayout } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element="home page" />
        <Route element="search page" path="/search/javascript" />
      </Route>
    </Routes>
  );
}
export default App;
