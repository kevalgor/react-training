import React, { useState } from "react";

const Home = () => {
  const [session, changeSession] = useState(false);
  return (
    <div>
      <p>{!session ? "" : "Welcome Guest"}</p>
      <button onClick={() => changeSession(!session)}>
        {!session ? "Login" : "Logout"}
      </button>
    </div>
  );
};

export default Home;
