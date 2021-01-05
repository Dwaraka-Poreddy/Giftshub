import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import firebase from "firebase";

// use Dispatch for sending data to global state
// use selector for getting data from the state
import { useHistory } from "react-router-dom";

const { SubMenu, Item } = Menu; // Its destructing IMP

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let history = useHistory();
  // spread operater
  let { user } = useSelector((state) => ({ ...state }));
  console.log(user, "user");
  // console.log(user.profilepic, "pic");
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <nav class="navbar navbar-expand-md bg-light navbar-light">
      <div class="container">
        <a class=" navbar-brand text-primary" href={`/`}>
          Gifts Hub
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav ml-auto nav-flex-icons">
            {!user ? (
              <>
                <a class="nav-link" href={`/login`}>
                  login
                </a>

                <a class="nav-link" href={`/register`}>
                  Register
                </a>
              </>
            ) : (
              <li class="nav-item avatar dropdown">
                <>
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink-5"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user.email.split("@")[0]}
                    <img
                      width="40"
                      src={user.profilepic}
                      class="md-avatar rounded-circle ml-3"
                      alt="avatar image"
                    />{" "}
                  </a>
                </>

                <div
                  class="dropdown-menu dropdown-menu-right dropdown-secondary"
                  aria-labelledby="navbarDropdownMenuLink-5"
                >
                  <li class="nav-item ">
                    <a class="nav-link" href="">
                      Your Profile
                    </a>
                  </li>
                  <li class="nav-item ">
                    {user && (
                      <a class="nav-link" href={`/home`}>
                        Previous Packs
                      </a>
                    )}
                  </li>
                  <li class="nav-item ">
                    {user && (
                      <a onClick={logout} class="nav-link" href={`/login`}>
                        Logout
                      </a>
                    )}
                  </li>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
