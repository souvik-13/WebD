// import { useState, useEffect } from "react";
import axios from "axios";
const Usesrs = () => {
//   useEffect(() => {
//     axios
//       .get("/api/users")
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   }, []);
  return (
    <>
      <div>
        <h1>Users</h1>
        <p>Users</p>
        <button
            onClick={() => {
                axios
                    .post("/api/users", {
                        name: "Fred",
                        age: "23",
                        email: "",
                    })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
            }}
        >Click</button>
      </div>
    </>
  );
};

export default Usesrs;
