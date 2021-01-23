import React, { useState, useEffect } from "react";
import { auth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthHeader from "../../components/nav/Header";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [ReEmail, setReEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));
  const { days_page } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.token) {
      if (days_page.days_redirect === "n") {
        history.push("/home");
      } else if (days_page.days_redirect === "r") {
        history.push("/recommendedhome");
      }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: "LOGGED_IN_USER",
        payload: {
          email: user.email,
          token: idTokenResult.token,
          uid: user.uid,
        },
      });
      setLoading(true); // waste to write
      history.push("/");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    await auth
      .signInWithPopup(googleAuthProvider)
      .then(async (result) => {
        const { user } = result;
        console.log(user);
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            uid: user.uid,
            profilepic: user.photoURL,
          },
        });
        history.push("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password "
        />
      </div>
      <Link to="/forgot/password" className="float-right text-danger">
        Forgot Password
      </Link>

      <Button
        onClick={handleSubmit}
        type="primary"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || !password}
        className="mb-3"
      >
        Login with Email/ Password
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
      <div className="container p-3">
        <div className="row">
          <div className="col-md-6 ">
            {loading ? (
              <h4 className="text-danger"> Loading.. </h4>
            ) : (
              <h4>Login</h4>
            )}
            {loginForm()}
            <br />
            <center>
              <h3>OR</h3>
            </center>
            <hr />
            <Button
              onClick={handleGoogleLogin}
              type="danger"
              block
              shape="round"
              icon={<GoogleOutlined />}
              size="large"
              className="mb-3"
            >
              Login with Google
            </Button>
          </div>
          <div className="col-md-6 ">
            <h4>Register</h4>
            {registerForm()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
