import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  
  const [isSideBarOpen, setSidebar] = useState(false);

  return (
    <>
      <Navbar isSideBarOpen={isSideBarOpen} setSidebar={setSidebar}/>
      {isSideBarOpen && <Sidebar />}
      <div style={{paddingTop: "7vh", width: "100vw"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Home