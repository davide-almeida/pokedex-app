import React from "react";
import './assets/index.css'
import Body from './layout/Body'
import Header from './layout/Header'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
