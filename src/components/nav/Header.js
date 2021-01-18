import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();
  let history = useHistory();
  // spread operater
  let { user } = useSelector((state) => ({ ...state }));
  console.log(user, "user");
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
                    {user.profilepic ? (
                      <img
                        width="40"
                        src={user.profilepic}
                        class="md-avatar rounded-circle ml-3"
                        alt="avatar image"
                      />
                    ) : (
                      <img
                        width="40"
                        src="https://banner2.cleanpng.com/20180327/ssq/kisspng-computer-icons-user-profile-avatar-profile-5ab9e3b05772c0.6947928615221318883582.jpg"
                        class="md-avatar rounded-circle ml-3"
                        alt="avatar image"
                      />
                    )}{" "}
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
                      <a class="nav-link" href={`/userpackspage`}>
                        My Packs
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
