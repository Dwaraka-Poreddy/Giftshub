import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { useSelector } from "react-redux";
import AuthHeader from "../../components/nav/Header";
const Register = ({ history }) => {
  const [ReEmail, setReEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const handleRegisterSubmit = async (e) => {
    console.log(
      process.env.REACT_APP_REGISTER_REDIRECT_URL,
      "handle register submit"
    );
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(ReEmail, config);
    toast.success(
      `Email is sent to ${ReEmail}.Click the link to complete your registration.`
    );
    //save email in local storage
    window.localStorage.setItem("emailForRegistration", ReEmail);
    console.log();
    // clear state
    setReEmail("");
  };

  const registerForm = () => (
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="email"
        className="form-control"
        value={ReEmail}
        onChange={(e) => setReEmail(e.target.value)}
        placeholder="Your Email"
        autoFocus
      />
      <br />
      <Button
        size="large"
        className="mb-3"
        block
        shape="round"
        type="primary"
        onClick={handleRegisterSubmit}
        className="btn btn-raised"
      >
        Register
      </Button>
    </form>
  );

  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 136, 232, 1) 0%, rgba(0, 182, 198, 1) 0%, rgba(0, 136, 232, 1) 100% )",
        height: "80vh",
      }}
    >
      {" "}
      <AuthHeader />
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>Register</h4>
            {registerForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
