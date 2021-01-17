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
  const [email, setEmail] = useState("ajachintu@gmail.com");
  const [password, setPassword] = useState("srinivas1");
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
          placeholder="Your Password"
        />
      </div>
      <br />
      <Button
        onClick={handleSubmit}
        type="primary"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
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
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {loading ? (
              <h4 className="text-danger"> Loading.. </h4>
            ) : (
              <h4>Login</h4>
            )}
            {loginForm()}
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
            <Link to="/forgot/password" className="float-right text-danger">
              Forgot Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
