import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "../utils/axiosInstance"

export  const BedModal = (props) => {

  const [patDetails, setPatDetails] = React.useState();

  React.useEffect(() => {
    if(props.hid !== undefined){
      axios.get(`getPatient/${props.hid}`)
      .then((res) => setPatDetails(res.data))
    }
  })

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

  return (
    <div>
      <Modal
        open={props.showModal}
        onClose={()=>props.setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b><center>{patDetails?.fname+" "+patDetails?.lname}</center></b>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            <p>Hospital ID: {patDetails?.hid}</p>
            <p>Gender: {patDetails?.gender}</p>
            <p>DOB: {patDetails?.dob}</p>
            <p>Father's Name: {patDetails?.father_name}</p>
            <p>City: {patDetails?.city}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
    )
}
