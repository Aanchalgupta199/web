import React from 'react'
import { Link } from 'react-router-dom'
import { Button, SideNavbar } from '../css/CustomCss'

const Sidebar = () => {

  return (
    <SideNavbar border={"1px solid black"} height={"92.75vh"} width={"16vw"} background={"#9B9B9A"} position={"fixed"}
    marginTop={"7vh"} display={"flex"}>
      <Link to="register"><Button bgColor={"#292926"} borderColor={"#292926"}> Register </Button></Link>
      <Link to="getPatients"><Button bgColor={"#292926"} borderColor={"#292926"}> Patients </Button></Link>
      <Link to="statusDashboard"><Button bgColor={"#292926"} borderColor={"#292926"}> Bed Status </Button></Link>
    </SideNavbar>
  )
}

export default Sidebar