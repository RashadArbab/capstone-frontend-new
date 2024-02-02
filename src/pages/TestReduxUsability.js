import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, clearUser } from "../redux/userSlice";

function TestReduxUsability() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateUser = () => {
    dispatch(
      setUser({
        email: "newemail@example.com",
        username: "rashad_arbab",
        user_id: 2,
      })
    );
  };

  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h1>Test Redux Usability</h1>
      <p>Email: {user.email}</p>
      <p>User ID: {user.user_id}</p>
      <button onClick={handleUpdateUser}>Update User</button>
      <button onClick={handleClearUser}>Clear User</button>
    </div>
  );
}

export default TestReduxUsability;
