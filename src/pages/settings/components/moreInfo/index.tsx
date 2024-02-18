import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { MyTable } from "../../../../shared/table";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: "50%",
  display: "block",
};
type props = {
  open: boolean;
  handleClose: () => void;
};
const MoreInfo = ({ open, handleClose }: props) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Credit report
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <MyTable>
            <tr>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>25/12/2021</td>
              <td>5000</td>
            </tr>
          </MyTable>
        </Typography>
      </Box>
    </Modal>
  );
};

export default MoreInfo;
