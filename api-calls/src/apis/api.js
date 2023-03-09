// import axios from "axios";

export const insertData = async (userData) => {
  try {
    const res = await fetch("http://localhost:5000/auth/signup", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "no-cors", // no-cors, *cors, same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: "follow", // manual, *follow, error
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(userData), // body data type must match "Content-Type" header
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const res = await axios.post(
  //     "http://localhost:5000/auth/signup",
  //     userData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log(res);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
};

export const getData = async () => {
  try {
    const res = await fetch("http://localhost:5000/users", {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const res = await axios.get("http://localhost:5000/users");
  //   console.log(res);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
};

export const getDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const res = await axios.get(`http://localhost:5000/users/${id}`);
  //   console.log(res);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
};

export const updateData = async (id, userData) => {
  try {
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(userData), // body data type must match "Content-Type" header
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const res = await axios.put(
  //     `http://localhost:5000/users/${id}`,
  //     userData,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   console.log(res);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
};

export const deleteData = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    });
    const result = await response.json();
    return result; // parses JSON response into native JavaScript objects
  } catch (err) {
    console.log(err);
  }
  // try {
  //   const res = await axios.delete(`http://localhost:5000/users/${id}`);
  //   console.log(res);
  //   return res;
  // } catch (err) {
  //   console.log(err);
  // }
};
