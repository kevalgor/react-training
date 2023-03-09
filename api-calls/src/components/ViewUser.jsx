import React, { useState, useEffect } from "react";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ViewUser = ({ view, data }) => {
  const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setOpen(view);
  }, [view]);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {`Id: ${data._id}`}
            <br />
            {`Name: ${data.name}`}
            <br />
            {`Email: ${data.email}`}
            <br />
            {`Mobile: ${data.mobile}`}
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ViewUser;
