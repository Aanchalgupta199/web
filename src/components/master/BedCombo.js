import React, { useEffect, useState } from 'react'
import axios from "../../utils/axiosInstance"

const BedCombo = (props) => {

  const [bed, setBed] = useState();

    const getBeds = () => {

      axios.get(`getBedByWard/${props.wardId}`)
      .then((res) => setBed(res.data))
    }

    useEffect(() => {
        getBeds();
    },[props.deptId, props.unitId, props.wardId])

    const bedHandler = (event) => {
       props.setBedId(event.target.value);
    }

  return (
    <>
    Bed: 
    <select name="bedId" onChange={bedHandler}>
        <option value="-1">Select Value</option>
        {
        bed && bed.map((bd) => <option key={bd.bedId} value={bd.bedId}>{bd.bedName}</option>)
        }
    </select>
    </>
  )
}

export default BedCombo