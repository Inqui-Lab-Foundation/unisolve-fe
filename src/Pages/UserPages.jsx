import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsersAsync } from "../redux/reducers/users/users.thunk";
import { ImageCardComp } from "../stories/ImageCard/ImageCard";
import { FiEye } from "react-icons/fi";
import Nature from "../assets/img/nature.png";
import "./UserPage.scss";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { isLoading, users, errorMessage } = useSelector(
    (state) => state.users
  );
  const cardProps = {
    primary: true,
    label: "ImageCardComp",
    imgUrl: Nature,
    title: "How can I improve self care with Ikigai?",
    count: "1,288 students",
    time: "5m",
    icon: FiEye,
  };

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, []);

  return (
    <div className="userPage">
      <div>
          <h2>COURSE CARD</h2>
        <ImageCardComp {...cardProps} />
      </div>
      <div>
        <h1>Dummy User List</h1>
        {isLoading && <h3>....loading</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {users && users.map((user) => <h5 key={user.id}> {user.name}</h5>)}
      </div>
    </div>
  );
};

export default UsersPage;
