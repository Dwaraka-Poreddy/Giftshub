import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MailIcon from "@material-ui/icons/Mail";
import HeaderBtn from "../Studio/HeaderBtn";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import emailjs from "emailjs-com";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Share({ livelink, from, to }) {
  const classes = useStyles();
  const [receiverEmail, setreceiverEmail] = useState();
  const [giftshub, setgiftshub] = useState("https://www.google.com/");

  const [title, settitle] = useState(
    `Dear ${to}, a gift from ${from} is waiting for you at ${livelink}. Made by ${giftshub} with love`
  );
  const [title1, settitle1] = useState(
    `Dear ${to}, a gift  is waiting for you at ${livelink}. Made by ${giftshub}`
  );

  function sendEmail(e) {
    var items = {
      to_name: to,
      from_name: from,
      to_email: receiverEmail,
      gift_link: livelink,
    };

    emailjs
      .send(
        "gifts_hub",
        "template_d9tubms",
        items,
        "user_2oABpGWP8WfHfd6Kmlto3"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  }

  return (
    <div className="App">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          value={receiverEmail}
          onChange={(e) => {
            setreceiverEmail(e.target.value);
          }}
          required
          id="filled-basic"
          label="Receiver Email"
          variant="filled"
        />
      </form>

      <FacebookShareButton
        windowWidth="500px"
        windowHeight="500px"
        url={livelink}
        title={title1}
      >
        <HeaderBtn Icon={FacebookIcon} title="Facebook " />
      </FacebookShareButton>
      <br />

      <TwitterShareButton
        windowWidth="500px"
        windowHeight="500px"
        url={livelink}
        title={title1}
      >
        <HeaderBtn Icon={TwitterIcon} title="Twitter " />
      </TwitterShareButton>
      <br />
      <div>
        {" "}
        <WhatsappShareButton
          windowWidth="500px"
          windowHeight="500px"
          url={livelink}
          title={title}
          separator="::"
        >
          <HeaderBtn Icon={WhatsAppIcon} title="Whatsapp " />
        </WhatsappShareButton>
      </div>
      <center>
        <HeaderBtn
          handleClick={() => {
            sendEmail();
          }}
          Icon={MailIcon}
          title="Email "
        />
      </center>
    </div>
  );
}

export default Share;
