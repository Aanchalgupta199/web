import React, { useEffect, useState } from 'react'
import axios from "../../utils/axiosInstance"

const WardCombo = (props) => {

  const [ward, setWard] = useState();

    const getWards = () => {

      axios.get(`getWardByUnit/${props.unitId}`)
      .then((res) => setWard(res.data))
    }

    useEffect(() => {
        getWards();
    },[props.deptId, props.unitId, props.renderFlag])

    const wardHandler = (event) => {
      props.setWardId(event.target.value)
    }

  return (
    <>
    Ward: 
    <select name="wardId" onChange={wardHandler}>
        <option value="-1">Select Value</option>
        {
        ward && ward.map((wrd) => <option key={wrd.wardId} value={wrd.wardId}>{wrd.wardName}</option>)
        }
    </select>
    </>
  )
}

export default WardCombo