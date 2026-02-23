import { useContext } from "react";
import userContext from "../context/context";

function Profile() {
  const { user } = useContext(userContext);

  return (
    <div className="p-2">
      <li>Email: {user?.email}</li>
      <li>Password: {user?.password}</li>
    </div>
  );
}

export default Profile;
