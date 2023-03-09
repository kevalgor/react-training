import React, { useState, useEffect } from "react";
import { Button, Box, Modal } from "@mui/material";
import List from "./List";
import UserForm from "./UserForm";
import { deleteData, getData } from "../apis/api";

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

const Home = () => {
  const [data, setData] = useState([]);
  const [openUserForm, setOpenUserForm] = useState(false);
  const userFormHandleOpen = () => setOpenUserForm(true);
  const userFormHandleClose = () => setOpenUserForm(false);

  const addUser = () => {
    userFormHandleOpen();
  };

  const userList = async () => {
    const result = await getData();
    setData([...result.data]);
    // .then((res) => {
    //   setData([...res.data]);
    // })
    // .catch((err) => console.log(err));
  };

  useEffect(() => {
    userList();
  }, []);

  const deleteUser = (id) => {
    deleteData(id)
      .then((res) => {
        userList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: "10px 20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0px",
        }}
      >
        <h1>Users</h1>
        <Button variant="contained" size="medium" onClick={addUser}>
          + Add User
        </Button>
        <Modal
          open={openUserForm}
          onClose={userFormHandleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserForm
              isEdit={false}
              data={null}
              userFormHandleClose={userFormHandleClose}
              userList={userList}
            />
          </Box>
        </Modal>
      </div>
      <div>
        {data.length > 0 ? (
          <List list={data} deleteUser={deleteUser} userList={userList} />
        ) : (
          <h3>no user</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
