import React, { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import BedUi from "./BedUi";
import ProgressBar from "./ProgressBar";

const StatusDashboard = () => {
  const [statusData, setStatusData] = useState();
  const [bedCount, setBedCount] = useState({});
  const [showList, setShowList] = useState([]);

  const getDeptData = () => {
    axios.get("getDepartments").then((res) => {
      setStatusData(res.data);
      setShowList(Array(res.data.length).fill(false));
    });
  };

  const getBedCount = () => {
    axios.get("getBedCount").then((res) => setBedCount(res.data));
  };

  const setList = (i) => {
    const temp = Array(statusData.length).fill(false);
    temp[i] = true;
    setShowList(temp);

    axios.get("getBedCountByWard/${id}")
  };

  useEffect(() => {
    getDeptData();
    getBedCount();
  }, []);

  const title = { textAlign: "center", cursor: "pointer" };
  const outline = { border: "1px solid", borderColor: "gray" };
  const flex = { display: "flex", flexWrap: "wrap" }

  // const outlineDiv = (props) => {
  //   return(
      
  //     <div  style={outline}>
  //      <h2 style={title}>{props.unit.unitName}</h2>
  //      {props.content}
  //     </div>
  //   )
  // }

  // const unitContent = () => {

  // }

  return (
    <div style={{ margin: "40px 180px" }}>
      <div
        style={{
          background: "gray",
          height: "7vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "3vh",
        }}
      >
        <b>Total Beds: {bedCount.totalBeds}</b>
        <b>Beds occupied: {bedCount.occupiedBeds}</b>
        <b>Beds vaccant: {bedCount.vaccnatBeds}</b>
      </div>
      <div>
        {statusData &&
          statusData.map((dept, i) => {
            return (
              <div key={i} style={outline}>
                <h1 style={title} onClick={() => setList(i)}>{dept.deptName}</h1>
                {showList[i] &&

                  dept.units.map(unit => {
                    return (
                      <div key={unit.unitId} style={outline}>
                        <h2 style={title}>{unit.unitName}</h2>

                        {
                        unit.wards.map(ward => {
                          return (
                            <div style={outline}>
                              <h3 style={title}>{ward.wardName}</h3>
                              <div key={ward.wardId} style={flex}>

                                {ward.beds.map(bed =>  <BedUi name={bed} key={bed.bedId} />)}
                              </div>
                            </div>
                          );
                        })
                        }
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};


export default StatusDashboard;
