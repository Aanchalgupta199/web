import React, { useState } from 'react'
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import axios from "../utils/axiosInstance"
import  {BedModal}  from './BedModal';

const BedUi = ({name}) => {

    const [patientData, setPatientData] = useState({});
    const[showModal, setShowModal] = useState(false);

const getPatientData = (id) => {
    axios.get(`getPatient/${id}`)
    .then((res) => setPatientData(res.data))
    .then((res) =>  setShowModal(true))
}

const {bedName, vaccant, adm} = name;

const bedBox={border: "1px solid", borderColor: "gray", boxShadow: "4px 4px 6px 0px gray", width: 200, height: 230,
margin: 22, textAlign: "center"}
  return (
   <div style={bedBox}>
       <h4>{bedName}</h4>
       {vaccant === 0 ? <><LocalHotelIcon style={{height: 100, width: 150, color: "tomato"}} onClick={() => getPatientData(adm.hid)}/>
       <br/>
       <b>Bed ID: {adm?.bedId}</b>
       <br/>
       <b>{adm?.name}</b></>
       :
       <LocalHotelIcon style={{height: 100, width: 150, color: "green"}}/>  }
       {<BedModal showModal={showModal} setShowModal={setShowModal} hid={adm?.hid}/>}
    </div>
  )
}

export default BedUi