import React from "react";
import "./styles/header.css";
import HeaderOption from "./headerOption";

//MUI STUFFS
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../../firebase/firebase";

export default function Header() {
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div>
      <div className="header">
        <div className="header_left">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
            alt="logo"
          />

          <div className="header_search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </div>
        </div>

        <div className="header_right">
          <HeaderOption Icon={HomeIcon} title="home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={true} title="Me" onClick={logOutOfApp} />
        </div>
      </div>
    </div>
  );
}
