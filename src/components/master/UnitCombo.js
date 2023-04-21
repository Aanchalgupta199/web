import React, { useEffect, useState } from 'react'
import axios from "../../utils/axiosInstance"

const UnitCombo = (props) => {

    const [unit, setUnit] = useState();

    const getUnits = () => {
        axios.get(`getUnitByDept/${props.deptId}`)
        .then((res) => setUnit(res.data))
    }

    useEffect(() => {
        getUnits();
    },[props.deptId, props.renderFlag])

    const unitHandler = (event) => {
        props.setUnitId(event.target.value)
    }

  return (
    <>
    Unit: 
    <select name="unitId" onChange={unitHandler}>
        <option value="-1">Select Value</option>
        {
        unit && unit.map((uni) => <option key={uni.unitId} value={uni.unitId}>{uni.unitName}</option>)
        }
    </select>
    </>
  )
}

export default UnitCombo