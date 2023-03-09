import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Modal,
} from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";
import ViewUser from "./ViewUser";
import UserForm from "./UserForm";
import { getDataById } from "../apis/api";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const EditIcon = styled(Edit)`
  color: #ffc107;
`;

const DeleteIcon = styled(Delete)`
  color: #f44336;
`;

const VisibilityIcon = styled(Visibility)`
  color: #ffa455;
`;

const List = ({ list, deleteUser, userList }) => {
  const [openUserForm, setOpenUserForm] = useState(false);
  const userFormHandleOpen = () => setOpenUserForm(true);
  const userFormHandleClose = () => setOpenUserForm(false);
  const [showView, setShowView] = useState(false);
  const showViewOpen = () => setShowView(true);
  const showViewClose = () => setShowView(false);
  const [row, setRow] = useState({});

  const editUser = (row) => {
    userFormHandleOpen();
    setRow(row);
  };

  const viewUser = (row) => {
    showViewOpen();
    // setRow(row);
    getDataById(row._id)
      .then((res) => {
        setRow(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell>name</StyledTableCell>
            <StyledTableCell>email</StyledTableCell>
            <StyledTableCell>mobile</StyledTableCell>
            <StyledTableCell>createdAt</StyledTableCell>
            <StyledTableCell>action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.mobile}</StyledTableCell>
              <StyledTableCell>{row.createdAt}</StyledTableCell>
              <StyledTableCell>
                <VisibilityIcon
                  style={{ margin: "0px 5px", cursor: "pointer" }}
                  onClick={() => viewUser(row)}
                />
                <EditIcon
                  style={{ margin: "0px 5px", cursor: "pointer" }}
                  onClick={() => editUser(row)}
                />
                <DeleteIcon
                  style={{ margin: "0px 5px", cursor: "pointer" }}
                  onClick={() => deleteUser(row._id)}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={openUserForm}
        onClose={userFormHandleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserForm
            isEdit={true}
            data={row}
            userFormHandleClose={userFormHandleClose}
            userList={userList}
          />
        </Box>
      </Modal>
      <Modal
        open={showView}
        onClose={showViewClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            {`Id: ${row._id}`}
            <br />
            {`Name: ${row.name}`}
            <br />
            {`Email: ${row.email}`}
            <br />
            {`Mobile: ${row.mobile}`}
          </div>
        </Box>
      </Modal>
    </TableContainer>
  );
};

export default List;
