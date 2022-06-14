import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components';

function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default SharedLayout;
